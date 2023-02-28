import { home } from "@/imgSource";
import { useStyles } from "@/styles";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Index = () => {
  const styles = useStyles();
  return (
    <Box p="0px 5px">
      <Box display="flex" alignItems="center" color="black">
        <Image src={home} alt="Home" />
        <Typography className={styles.noAdd}>Home</Typography>
      </Box>
      <Box
        display="flex"
        p="0px 40px"
        alignItems="center"
        justifyContent="space-between"
        color="black"
        width={210}
      >
        <Link href="">
          <Typography
            className={styles.newProject}
            sx={{ pb: "5px", color: "Red", borderBottom: "2px solid red" }}
          >
            Projects
          </Typography>
        </Link>
        <Link href="">
          <Typography sx={{ pb: "5px" }} className={styles.newProject}>
            Peoples
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Index;
