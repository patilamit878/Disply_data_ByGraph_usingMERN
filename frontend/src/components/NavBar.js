import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  const adddata = () => {
    navigate("/addData")
  }
  return (
    <AppBar position="sticky">
      <Toolbar>
          <Stack direction={"row"} spacing={2}>
            <Button color="inherit" onClick={home}>
              Home
            </Button>
            <Button color="inherit" onClick={adddata}>
              Add Data
            </Button>
          </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
