import FavoriteIcon from "@mui/icons-material/Favorite";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { CustomDialog } from "../CustomDialog";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import { FavoriteTable } from "./FavoriteTable";

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App React Test
          </Typography>
          <IconButton
            color="inherit"
            aria-label="favorites"
            component="label"
            onClick={() => handleClick()}
          >
            <FavoriteIcon></FavoriteIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
