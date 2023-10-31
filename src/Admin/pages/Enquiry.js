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

export default function Enquiry() {
  const { user } = useSelector((state) => state?.user);
  const [enquiries, setEnquiries] = useState([]);
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
  }, [enquiries]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}data/all-enquiry`, {
        headers: {
          Authorization: `${user?.token}`,
        },
      });
      setEnquiries(response.data.data);
    } catch (error) {
      console.error("Error fetching API data:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRowDelete = async (oldData) => {
    try {
      await axios.delete(`${BASE_URL}data/deleteEnquiry/${oldData._id}`, {
        headers: {
          Authorization: `${user?.token}`,
        },
      });
      setEnquiries((prevEnquiries) =>
        prevEnquiries.filter((enquiry) => enquiry._id !== oldData._id)
      );
      toast.success("Enquiry Deleted!");
    } catch (error) {
      toast.error("Failed to Delete Enquiry.");
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
            { title: "Phone Number", field: "phoneNumber" },
            { title: "Email", field: "email" },
            { title: "Message", field: "message" },
            { title: "Product Id", field: "productId" },
            { title: "Product Name", field: "productName" },
          ]}
          editable={{
            onRowDelete: handleRowDelete,
          }}
          data={enquiries}
          title={"Enquiries"}
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
            exportFileName: "enquiryData",
            addRowPosition: "first",
          }}
        />
      </ThemeProvider>
    </div>
  );
}
