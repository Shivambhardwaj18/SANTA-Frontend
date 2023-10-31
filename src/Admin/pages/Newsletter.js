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

export default function Newsletter() {
  const { user } = useSelector((state) => state?.user);
  const [newsLetters, setNewsLetters] = useState([]);
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
  }, [newsLetters]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}data/getAllNewsLetter`, {
        headers: {
          Authorization: `${user?.token}`,
        },
      });
      setNewsLetters(response.data.data);
    } catch (error) {
      console.error("Error fetching API data:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRowDelete = async (oldData) => {
    try {
      await axios.delete(`${BASE_URL}data/deleteEmail/${oldData._id}`, {
        headers: {
          Authorization: `${user?.token}`,
        },
      });
      setNewsLetters((prevNewsLetters) =>
        prevNewsLetters.filter((newsLetter) => newsLetter._id !== oldData._id)
      );
      toast.success("News Letter Deleted!");
    } catch (error) {
      toast.error("Failed to Delete News Letter.");
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
            { title: "Email", field: "email" },
          ]}
          editable={{
            onRowDelete: handleRowDelete,
          }}
          data={newsLetters}
          title={"News Letter"}
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
            exportFileName: "newsLetterData",
            addRowPosition: "first",
            headerStyle: {
              textAlign: "center",
            },
            cellStyle: {
              textAlign: "center",
            },
          }}
        />
      </ThemeProvider>
    </div>
  );
}
