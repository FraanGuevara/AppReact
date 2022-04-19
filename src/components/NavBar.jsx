import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const pages = ['Remeras', 'Buzos', 'Pantalones'];
const settings = ['Perfil', 'Cuenta', 'Dashboard', 'Cerrar sesion'];

export default function ResponsiveAppBar ()  {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            AuraFlow{/* Logo */}
          </Typography>
          {/* ----------------------------------------------------------- */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* Boton HOME */}
              <Link to='/Home'>
                <MenuItem key='Home' onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>
              {/* Boton ALL */}
              <Link to='/All'>
                <MenuItem key='Home' onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">All</Typography>
                </MenuItem>
              </Link>

              {pages.map((page) => (
                <Link to={'/category/'+ page}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          {/* ----------------------------------------------------------- */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            AuraFlow{/* Logo Responsive*/}
          </Typography>

          {/* ----------------------------------------------------------- */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* Boton HOME */}
            <Link to= '/Home'>
              <Button
              key='Home'
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}>
                Home
              </Button>
            </Link>

            {/* Boton ALL */}
            <Link to= '/'>
              <Button
              key='All'
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}>
                All
              </Button>
            </Link>
            
            {/* Botones CATEGORIAS */}
            {pages.map((page) => (
              /* Link para que a cada "page" se le asigne el link de router con su mismo nombre */
              <Link to={'/category/'+ page}>
                <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page} 
                </Button>
              </Link>
            ))}
          </Box>
          <CartWidget/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
