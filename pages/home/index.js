import { Layout, Welcome } from "@/components";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../../styles";
const Index = () => {
  const styles = useStyles();
  return (
    <Layout>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Welcome />
      </Grid>
    </Layout>
  );
};

export default Index;
