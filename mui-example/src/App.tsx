import { Box } from "@mui/material";
// import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <NavBar />
      <Register />
    </Box>
  );
}
