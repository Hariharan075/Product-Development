import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "./admin.css";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";

import Typography from "@mui/material/Typography";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/admin";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Header from "./header";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function AdminBars() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const admin = useSelector((state) => state.admin.value);

  return (
     <Box>
      <div className="dashboard">
      <h1>PoTato</h1>
     <h2>Welcome</h2>
     <input type="text" placeholder="Search"></input>
     <h3>{admin.email}</h3>
     <h3>{admin.password}</h3>
     <button>LogOut</button>
     </div>
     <div className="sidebar">
         <ul>
          <li>Dashboard
          </li>
          <li>Profile</li>
          <li>Messages</li>
          <li>Explore</li>
         </ul>
     </div>
     <footer id="footer" >
      <p >Terms and Conditions </p>
      <p>ContactUs</p>
    </footer>
     </Box> 
    
        
        
    
  );
}
