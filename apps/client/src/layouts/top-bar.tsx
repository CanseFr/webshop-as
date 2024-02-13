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
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authentication/authenticationSlice.ts';
import { Avatar, Divider, ListItemIcon, Tooltip } from '@mui/material';
import { GppGood, Logout, Settings } from '@mui/icons-material';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';

const pages = ['Home', 'Shop', 'Contact'];
const links = ['/', '/shop', '/contact'];

export const Layout = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user, role } = useSelector((store: any) => store.authentication);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleRedirect = (link: string) => {
    setAnchorElNav(null);
    setAnchorEl(null);
    navigate(link);
  };

  const handleLogout = (link: string) => {
    setAnchorElNav(null);
    dispatch(logout());
    navigate(link);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar color={'primary'} position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img src="../../public/assets/logo/logo-ico.png" width="30px" alt="" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography onClick={() => handleRedirect(links[index])} textAlign="center">
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img src="../../public/assets/logo/logo-ico.png" width="30px" alt="" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={() => handleRedirect(links[index])}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </Button>
              ))}
            </Box>
            {isAuthenticated ? (
              <>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    {/*// TODO: Glisser ici le path profil pic cherché dans le public assets*/}
                    <Avatar sx={{ width: 52, height: 52 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem disabled={true} onClick={handleClose}>
                    <Avatar sx={{ width: 32, height: 32 }}>{user[0]}</Avatar>
                    {user}
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <AlignVerticalBottomIcon color={'secondary'} fontSize="small" />
                    </ListItemIcon>
                    Account
                  </MenuItem>
                  <Divider />
                  {/*// TODO : Inserer ici le mode jour/nuit*/}
                  {/*<MenuItem onClick={handleClose}>*/}
                  {/*  <ListItemIcon>*/}
                  {/*    <Settings fontSize="small" />*/}
                  {/*  </ListItemIcon>*/}
                  {/*  Settings*/}
                  {/*</MenuItem>*/}
                  {/*<Divider />*/}
                  {role && (
                    <>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <GppGood color={'info'} fontSize="small" />
                        </ListItemIcon>
                        Administration
                      </MenuItem>
                      <Divider />
                    </>
                  )}
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={() => handleLogout('/')}>
                    <ListItemIcon>
                      <Logout color={'warning'} fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button
                  sx={{ fontWeight: 'bold', color: 'white' }}
                  variant="text"
                  onClick={() => handleRedirect('/login')}
                >
                  Login
                </Button>
                &nbsp; &nbsp;
                <Button
                  sx={{ fontWeight: 'bold', color: 'white' }}
                  variant="contained"
                  onClick={() => handleRedirect('/register')}
                >
                  Register
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
