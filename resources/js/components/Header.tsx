import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import "../../css/app.css"
import logo from '../../assets/icons/sco_logo_blanco.svg'
import TopicIcon from '@mui/icons-material/Topic';
import EngineeringIcon from '@mui/icons-material/Engineering';
import MovieIcon from '@mui/icons-material/Movie';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Button from '@mui/material/Button';
import SideBar from './SideBar';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    
    <AppBar className="header-gradient" position="static">
  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    {/* Contenedor para el icono del menú y el logo */}
    <Box sx={{ display: "flex", alignItems: "center" }}>
     
        <SideBar />
   
      <img src={logo} alt="logo" width="auto" height="40" />
    </Box>

          <Box sx={{ flexGrow: 1.5 }} />

          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', ml: 2 }}>
            <Box className="buttons" sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
              <TopicIcon />
              <Button variant="text">Administración</Button>
            </Box>

            <Box className="buttons" sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
              <EngineeringIcon />
              <Button variant="text">Operaciones</Button>
            </Box>

            <Box className="buttons" sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
              <MovieIcon />
              <Button variant="text">Producción</Button>
            </Box>

            <Box className="buttons" sx={{ display: 'flex', alignItems: 'center' }}>
              <QuestionAnswerIcon />
              <Button variant="text">Comunicación</Button>
            </Box>
          </Box>

          {/* Icono de usuario a la derecha */}
          <Box sx={{ flexGrow: 1 }} />
          {auth && (
            <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}