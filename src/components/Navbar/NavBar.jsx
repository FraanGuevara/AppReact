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
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';




const pages = ['classic', 'car-and-motocycle', 'NBA', 'patches', 'trucker'];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <>
      <div id={styles.containerNavbar}>
        <div style={{ backgroundColor: 'black', overflow: 'hidden', textOverflow: 'clip' }}>
          <div id={styles.textoNavbar}>
            3 AND 6 FREE INTEREST QUOTES 💳 ㅤㅤㅤㅤ|ㅤㅤㅤㅤFREE SHIPPING 🚚
          </div>
        </div>
        <AppBar id={styles.navbarAllproducts} position="relative" >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                <motion.p
                  id={styles.logo}
                  whileTap={{
                    rotate: '360deg',
                    duration: '1'
                  }}
                  transition={{
                    ease: 'easeInOut',
                    type: 'spring'
                  }}
                >
                  AuraFlow
                </motion.p>
              </Typography>
              {/* ----------------------------------------------------------- */}

              <Box sx={{
                flexGrow: 1, display: { xs: 'flex', md: 'none' }
              }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>

                <Menu
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
                  <div id={styles.menuNavbar}>
                    {/* Boton ALL */}
                    <Link id={styles.botonesLink} to='/'>
                      <Button id={styles.botonesStyle} variant="contained" key='Home' onClick={handleCloseNavMenu}>
                        All products
                      </Button>
                    </Link>
                    {/* Boton Categories */}
                    <Button id={styles.botonStyleDisable} variant="contained">Categories</Button>
                    {/* Botones de las categorias */}
                    {pages.map((page) => (
                      <Link id={styles.botonesLink} to={'/category/' + page}>
                        <Button id={styles.botonesStyle} variant="contained" key={page} onClick={handleCloseNavMenu}>
                          {page}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </Menu>
              </Box>
              {/* ----------------------------------------------------------- */}
              <Typography
                variant="h5"
                noWrap
                component="div"
                id={styles.logo}
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
                <motion.p
                  id={styles.logo}
                  whileTap={{
                    rotate: '360deg',
                    duration: '5'
                  }}
                  transition={{
                    ease: 'easeInOut',
                    type: 'spring'
                  }}
                >
                  AuraFlow
                </motion.p>
              </Typography>
              {/* ----------------------------------------------------------- */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                {/* Boton ALL */}
                <Link id={styles.botonesLink} to='/'>
                  <Button
                    key='All-products'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    All products
                  </Button>
                </Link>

                {/* Botones CATEGORIAS */}
                {pages.map((page) => (
                  /* Link para que a cada "page" se le asigne el link de router con su mismo nombre */
                  <Link id={styles.botonesLink} to={'/category/' + page}>
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
              <CartWidget />
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>

  );
};
