import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../config/config";
import { toast } from "react-toastify";
import { ThemeProvider, createTheme } from "@mui/material";
import {
  Search,
  Edit,
  Delete,
  FirstPage,
  LastPage,
  ChevronRight,
  ChevronLeft,
  Cancel,
} from "@mui/icons-material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Chip from "@mui/material/Chip";

export default function UserPage() {
  const { user } = useSelector((state) => state?.user);
  const [medications, setMedications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const theme = createTheme({
    // Your theme configuration here
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [medications]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}user/allUsers`, {
        headers: {
          Authorization: `${user?.token}`,
        },
      });
      setMedications(response.data);
    } catch (error) {
      console.error("Error fetching API data:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRowAdd = async (newData) => {
    try {
      const response = await axios.post(`${BASE_URL}user/register`, newData, {
        headers: {
          Authorization: `${user?.token}`,
        },
      });
      const addedUser = response.data.user;
      setMedications((prevMedications) => [...prevMedications, addedUser]);
      toast.success("User Added!");
    } catch (error) {
      toast.error("Failed to Add User.");
    }
  };

  const handleRowUpdate = async (newData, oldData) => {
    try {
      await axios.put(
        `${BASE_URL}user/editUserDetails/${oldData._id}`,
        newData,
        {
          headers: {
            Authorization: `${user?.token}`,
          },
        }
      );
      setMedications((prevMedications) =>
        prevMedications.map((medication) =>
          medication._id === oldData._id ? newData : medication
        )
      );
      toast.success("User Updated!");
    } catch (error) {
      toast.error("Failed to Updated User.");
    }
  };

  const handleRowDelete = async (oldData) => {
    try {
      await axios.put(
        `${BASE_URL}user/modifyUser/${oldData._id}`,
        {},
        {
          headers: {
            Authorization: `${user?.token}`,
          },
        }
      );
      setMedications((prevMedications) =>
        prevMedications.filter((medication) => medication._id !== oldData._id)
      );
      toast.success("User Deleted!");
    } catch (error) {
      toast.error("Failed to Delete User.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ maxWidth: "100%" }}>
      <ThemeProvider theme={theme}>
        <MaterialTable
          columns={[
            { title: "Id", field: "_id", hidden: true },
            { title: "Name", field: "name" },
            { title: "Username", field: "username", editable: "onAdd" },
            {
              title: "Role",
              field: "role",
              lookup: { ADMIN: "ADMIN", AGENT: "AGENT" },
              width: 100,
            },
            {
              title: "Disable",
              field: "disable",
              render: (rowData) => (
                <Chip
                  label={rowData.disable ? "Yes" : "No"}
                  color={rowData.disable ? "secondary" : "primary"}
                />
              ),
              width: 50,
            },
          ]}
          editable={{
            onRowAdd: handleRowAdd,
            onRowUpdate: handleRowUpdate,
            onRowDelete: handleRowDelete,
          }}
          data={medications}
          title={"User"}
          icons={{
            Search: Search,
            Edit: Edit,
            Delete: Delete,
            FirstPage: FirstPage,
            LastPage: LastPage,
            NextPage: ChevronRight,
            PreviousPage: ChevronLeft,
            ResetSearch: CloseIcon,
            Add: PersonAddIcon,
            Check: SaveIcon,
            Clear: CloseIcon,
            Cancel: CloseIcon,
            Export: SaveAltIcon,
            SortArrow: ArrowDownwardIcon,
          }}
          options={{
            exportButton: true,
            searchAutoFocus: true,
            exportFileName: "userData",
            addRowPosition: "first",
          }}
        />
      </ThemeProvider>
    </div>
  );
}
