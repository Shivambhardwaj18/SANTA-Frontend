// @mui
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
// components
// sections
import { AppWidgetSummary } from "../sections/@dashboard/app";
import SEO from "../../components/seo";

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  return (
    <>
      <SEO titleTemplate="Admin | Dashboard" description="." />
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Total Products"
              total={714000}
              icon={"ant-design:android-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Total Users"
              total={1352831}
              color="info"
              icon={"ant-design:apple-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Total Enquiry"
              total={1723315}
              color="warning"
              icon={"ant-design:windows-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Bug Reports"
              total={0}
              color="error"
              icon={"ant-design:bug-filled"}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
