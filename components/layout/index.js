import React, { useEffect, useState } from "react";
import { Box, Divider } from "@mui/material";
import { Header, Leftbar } from "..";

const Index = ({ children }) => {
  const [mobile, setMobile] = useState();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth);
    });
  });

  useEffect(() => {
    setMobile(window.innerWidth);
  }, []);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Leftbar mobile={mobile} />
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{ width: "100%"}}
          color="white"
        >
          <Header />
          <Divider/>
        </Box>
        <Box
          sx={{
            // paddingX: { md: "30px", xs: "10px" },
            // height: "100vh",
            // overflowY: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
