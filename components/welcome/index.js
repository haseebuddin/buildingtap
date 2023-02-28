import { home, welcome } from "@/imgSource";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useStyles } from "../../styles";

const Index = () => {
  const styles = useStyles();
  return (
    <Box mt="88px">
      <Box align="center">
        <Image src={welcome} alt="Home" />
        <Typography className={styles.welcome}>
          Welcome to BuildingTap!
        </Typography>
      </Box>
      <Box mt="40px" align="center">
        <Typography className={styles.noAdd}>No added projects.</Typography>
        <Typography className={styles.addNew}>
          Please click the “Add new project” button,to project appear here.{" "}
        </Typography>
      </Box>
      <Box mt="40px" align="center">
        <Box
          sx={{
            cursor: "pointer",
            display: "flex",
            width: "100px",
            alignItems: "center",
            justifyContent: "center",
            height: "100px",
            border: "1px dashed #7B7979",
            borderRadius:"8px",
          }}
        >
          <AddIcon sx={{
            color:"#7B7979",
            fontSize:"30px"
            
          }} />
        </Box>
        <Typography className={styles.newProject}>New Project</Typography>
      </Box>
    </Box>
  );
};

export default Index;
