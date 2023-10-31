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

export default function Customercontact() {
  const { user } = useSelector((state) => state?.user);
  const [contacts, setContacts] = useState([]);
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
  }, [contacts]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}data/contact`, {
        headers: {
          Authorization: `${user?.token}`,
        },
      });
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching API data:", error);
      setError(error);
    } finally {
      setIsLoading(false);
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
            { title: "Subject", field: "subject" },
            { title: "Email", field: "email" },
            { title: "Message", field: "message" },
          ]}
          data={contacts}
          title={"Customer Need To Contact"}
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
