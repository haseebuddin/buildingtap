import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  //  homeF css
  body:{
    fontFamily: "Open Sans !important"
  },

  menu: {
    fontWeight: "400 ",
    fontSize: "47px ",
    fontFamily:"Open Sans",
    lineHeight: "19px ",

    [theme.breakpoints.down("sm")]: {},
  },
  addNew: {
    fontWeight: "400 !important",
    fontSize: "15px !important",
    fontFamily:"Open Sans",
    lineHeight: "19px !important",

    [theme.breakpoints.down("sm")]: {},
  },
  name: {
    fontWeight: "600 !important",
    fontSize: "15px !important",
    fontFamily:"Open Sans",
    lineHeight: "24px !important",

    [theme.breakpoints.down("sm")]: {},
  },
  owner: {
    fontWeight: "400 !important",
    fontSize: "12px !important",
    fontFamily:"Open Sans",
    lineHeight: "16px !important",

    [theme.breakpoints.down("sm")]: {},
  },
  owner2: {
    fontWeight: "700 !important",
    fontSize: "12px !important",
    fontFamily:"Open Sans",
    lineHeight: "16px !important",

    [theme.breakpoints.down("sm")]: {},
  },
  noAdd: {
    fontWeight: "700 !important",
    fontSize: "18px !important",
    fontFamily:"Open Sans",
    lineHeight: "24px !important",
    marginBottom:"15px",

    [theme.breakpoints.down("sm")]: {},
  },
  welcome: {
    fontWeight: "700 !important",
    fontSize: "26px !important",
    fontFamily:"Open Sans",
    lineHeight: "32px !important",

    [theme.breakpoints.down("sm")]: {},
  },
  newProject: {
    fontWeight: "600 !important",
    fontSize: "13px !important",
    fontFamily:"Open Sans",
    lineHeight: "24px !important",
    marginTop:"5px",

    [theme.breakpoints.down("sm")]: {},
  },
  btnLeft: {
    fontWeight: "700 !important",
    fontSize: "12px !important",
    fontFamily:"Open Sans",
    lineHeight: "16px !important",

    [theme.breakpoints.down("sm")]: {},
  },
}));
