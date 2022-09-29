import * as React from 'react';

import { Link, NavLink} from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import logo from '../logo.svg';
// import CartIcon from '../components/cart/CartIcon';

const pages = ['web', 'climb', 'about', 'store', 'thoughts'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const useStyles = makeStyles({
  root: {
    color: 'white',
  },
  activeLink: {
    // textDecoration: 'underline',
    textDecoration: 'none',
    '& button': {
      textDecoration: 'none',
      color: 'white',
      fontSize: '18px', 
      fontWeight: 'bolder',
      textStroke: '1px #000000'
    }
  },
  inactiveLink: {
    textDecoration: 'none',
    '& button': {
      textDecoration: 'none', 
      fontSize: '18px', 
      fontWeight: 'bold' 
    }
  },
  mobileActiveLink: {
    // textDecoration: 'underline',
    textDecoration: 'none',
    '& button': {
      textDecoration: 'none',
      color: 'black',
      fontSize: '14px', 
      fontWeight: 'bolder' 
    }
  },
  mobileInactiveLink: {
    textDecoration: 'none',
    '& button': {
      textDecoration: 'none', 
      fontSize: '12px', 
      fontWeight: 'bold' 
    }
  },
  selected: {
    backgroundColor: 'grey',
  }
});

const Header = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ width: '100vw', height: '10vh', display: 'flex', flexDirection: 'row'}}>
      <Box sx={{ marginLeft: '1rem', display: {xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex'}, flexDirection: 'row', width: '33%'}}>
        {pages.map((page) => (
          <NavLink 
            key={page} 
            to={`/${page.toLowerCase()}`}
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.inactiveLink
            }
          >
            <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', }}
            >
              {page}
            </Button>
          </NavLink>
        ))}
      </Box>
      <Box sx={{ marginLeft: '1rem', display: { xs: 'flex', sm: 'flex', md: 'none' }, width: '33%'}}>
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
            display: { xs: 'block', sm: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem 
              key={page} 
              onClick={handleCloseNavMenu} 
              sx={{ backgroundColor: 'grey' }}
              selected
              classes={{ selected: classes.selected}}
            >
              <NavLink 
                key={page} 
                to={`/${page.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? classes.mobileActiveLink : classes.mobileInactiveLink
                }
              >
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block', }}
                >
                  {page}
                </Button>
              </NavLink>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={{ width: '33%', display: {xs: 'none', sm:'none', md: 'flex'}, justifyContent: 'center'}}>
        <Link to={'/'} style={{ color: 'black', textDecoration: 'none' }}>
        {
          logo ? (
            // <img
            //   src={logo}
            //   alt={"logo"}
            //   style={{
            //     width: 50,
            //     height: 50,
            //   }}
            // />
            <h2>Sergio Falcon</h2>
          ) : (
            <Skeleton variant="rectangular" width={50} height={50} />
          )
        }
        </Link>
      </Box>
      <Box sx={{ width: '66%', display: {xs: 'flex', sm:'flex', md: 'none'}, justifyContent: 'left'}}>
        <Link to={'/'} style={{ color: 'black', textDecoration: 'none' }}>
        {
          logo ? (
            // <img
            //   src={logo}
            //   alt={"logo"}
            //   style={{
            //     width: 50,
            //     height: 50,
            //   }}
            // />
            <h1>Sergio Falcon</h1>
          ) : (
            <Skeleton variant="rectangular" width={50} height={50} />
          )
        }
        </Link>
      </Box>
      {/* <Box sx={{ width: '33%', display: 'flex', flexDirection: 'row-reverse', marginRight: '1rem'}}>
        <CartIcon />
      </Box> */}
    </Box>
  );
};

export default Header;
