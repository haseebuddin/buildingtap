import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import { Box, Divider, MenuItem, Select, Typography } from "@mui/material";
import { useStyles } from "../../styles";
import {
  avatar,
  help,
  home,
  logo,
  logoarrow,
  notification,
} from "@/imgSource";
import { useRouter } from "next/router";
import Image from "next/image";

const Index = ({ mobile }) => {
  const classes = useStyles();
  const location = useRouter();

  const [value, setValue] = useState(true);

  console.log(value);
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box className={styles.mainContainer}>
      <Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Image src={logo} alt="Flash Technology" />
          </Box>
          <Box>
            <Image src={logoarrow} alt="" />
          </Box>
        </Box>

        <Box className={styles.linkContainer}>
        <Box pl="10px">
            <Link
              style={{
                display: "flex",
                alignItems: "center",
              }}
              href=""
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.inActiveLink
              }
            >
              {mobile > 600 ? (
                <Typography className={classes.owner2}>MENU</Typography>
              ) : (
                ""
              )}
            </Link>
          </Box>
          <Box>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
              }}
              href=""
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.inActiveLink
              }
            >
              {pathname === "/Overview" ? (
                <Image src={home} alt="Home" className={styles.imgBar} />
              ) : (
                <Image src={home} alt="Home" className={styles.imgBar} />
              )}

              {mobile > 600 ? (
                <Typography className={classes.name}>Home</Typography>
              ) : (
                ""
              )}
            </Link>
          </Box>
          <Box onClick={() => setValue(!value)}>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
              }}
              href=""
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.inActiveLink
              }
            >
              {pathname === "/Statistics" ? (
                <Image
                  src={notification}
                  alt="notification"
                  className={styles.imgBar}
                />
              ) : (
                <Image
                  src={notification}
                  alt="notification"
                  className={styles.imgBar}
                />
              )}

              {mobile > 600 ? (
                <Typography className={classes.name}>Notification</Typography>
              ) : (
                ""
              )}
            </Link>
          </Box>

          <Box onClick={() => setValue(!value)}>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
              }}
              href=""
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.inActiveLink
              }
            >
              {pathname === "/people" ? (
                <Image src={help} alt="help" className={styles.imgBar} />
              ) : (
                <Image src={help} alt="help" className={styles.imgBar} />
              )}

              {mobile > 600 ? (
                <Typography className={classes.name}>Help Support</Typography>
              ) : (
                ""
              )}
            </Link>
          </Box>

          <Box>
            <Select
            className={classes.owner2}
              value={age}
              onChange={handleChange}
              displayEmpty
              sx={{
                width: "220px",
                
                color: "#BDBABA",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                ".MuiSvgIcon-root ": {
                  fill: "#BDBABA !important",
                },
              }}
            >
              <MenuItem value="">PROJECTS (0)</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Box>
          <Box pl="10px">
            <Link
              style={{
                display: "flex",
                alignItems: "center",
              }}
              href=""
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.inActiveLink
              }
            >
              <Box display="flex" mt="15px" alignItems="center" color="#F84343">
                <AddIcon />
                {mobile > 600 ? (
                  <Typography className={classes.name}>Add project</Typography>
                ) : (
                  ""
                )}
              </Box>
            </Link>
          </Box>
          <Divider sx={{ mt: "10px", background: "gray" }} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image src={avatar} alt="" />
        <Box ml="10px">
          <Typography className={classes.name}>Araa Rashek</Typography>
          <Typography color="#BDBABA" className={classes.owner}>
            Product Owner
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
