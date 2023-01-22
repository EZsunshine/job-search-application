// import * as React from 'react';
// import Avatar from '@mui/joy/Avatar';
// import Box from '@mui/joy/Box';
// import Divider from '@mui/joy/Divider';
// import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import Typography from '@mui/joy/Typography';
// import Sheet from '@mui/joy/Sheet';
import PieChart from '@mui/icons-material/PieChart';
// import MoreVertIcon from '@mui/icons-material/MoreVert';



// export default function Navigation() {
  
//   return (
    
//     <Box sx={{ display: 'flex' }}>
//       <Sheet sx={{ display: 'flex' }}>
//       <Sheet
//         variant="solid"
//         color="info"
//         invertedColors
//         sx={(theme) => ({
//           p: 2,
//           ml: -3,
//           my: -3,
//           background: `linear-gradient(to top, ${theme.vars.palette.info[700]}, ${theme.vars.palette.info[600]} 25%, ${theme.vars.palette.info[500]} 75%)`,
//         })}
//       >
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
//           <Avatar src="/static/images/avatar/2.jpg" size="lg" />
//           <Typography sx={{ flex: 1 }}>Jerry Wilson</Typography>
//           <IconButton>
//             <MoreVertIcon />
//           </IconButton>
//         </Box>
//         <List
//           sx={{
//             '--List-item-radius': '8px',
//             '--List-gap': '4px',
//             flexGrow: 0,
//             minWidth: 256,
//           }}
//         >
//           <Link to={"/dashboard"}>
//             <ListItemButton>
//               <ListItemDecorator>
//                 <PieChart />
//               </ListItemDecorator>
//               Dashboard
//             </ListItemButton>
//           </Link>
//           <Link to={"/dashboard/search"}>
//             <ListItemButton>
//               <ListItemDecorator />
//               Job Search
//             </ListItemButton>
//           </Link>
//           <Link to={"/dashboard/account"}>
//             <ListItemButton>
//               <ListItemDecorator />
//               Account
//             </ListItemButton>
//           </Link>
//           <Link to={"/"}>
//             <ListItemButton>
//               <ListItemDecorator>
//                 <PieChart />
//               </ListItemDecorator>
//               Logout
//             </ListItemButton>
//           </Link>
//         </List>
        
//         <Divider sx={{ mt: 'auto', mb: 80, mx: -2 }} />
//       </Sheet>
//       </Sheet>
      
//     </Box>
//   );
// }


//////////////////////////////////////////////////////////////////////////////////////////// V2
// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom"

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

// export default function SearchAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             Employ.ease
//           </Typography>

//           <Link to={"/dashboard"}>
//             <ListItemButton>
//               <ListItemDecorator>
//                 <PieChart />
//               </ListItemDecorator>
//               Dashboard
//             </ListItemButton>
//           </Link>
//           <Link to={"/dashboard/search"}>
//             <ListItemButton>
//               <ListItemDecorator />
//               Job Search
//             </ListItemButton>
//           </Link>
//           <Link to={"/dashboard/account"}>
//             <ListItemButton>
//               <ListItemDecorator />
//               Account
//             </ListItemButton>
//           </Link>
//           <Link to={"/"}>
//             <ListItemButton>
//               <ListItemDecorator>
//                 <PieChart />
//               </ListItemDecorator>
//               Logout
//             </ListItemButton>
//           </Link>

//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0); 


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Employ.ease
            </Typography>
          </Box>
          


          <Box sx={{ 
            display: "flex",  
            flexGrow: 1, 
            justifyContent: "space-evenly",
            bgcolor: "background",
            hover: "white",
            textAlign: "center",
            textDecoration: "none", }} >


<Tabs value={value} onChange={handleTabChange} color="white" centered>

        <Link to={"/dashboard"}>
          <Tab label="Dashboard" />
        </Link>

        <Link to={"/dashboard/search"}>
          <Tab label="Find Jobs"/>
        </Link>

        <Link to={"/dashboard/account"}>
          <Tab label="Account" />
        </Link>

        <Link to={"/"}>
          <Tab label="Logout" />
        </Link>
        
      </Tabs>

          </Box>


          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: "flex-end" }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={5} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}