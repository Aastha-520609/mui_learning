import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu } from '@mui/material'
import  MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Woman2OutlinedIcon from '@mui/icons-material/Woman2Outlined';
import MenuItem from '@mui/material/MenuItem';
import {React, useState} from 'react'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display:"none", 
    alignItems: "center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display:"flex", 
    alignItems: "center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    } 
}));

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography variant="h6" sx={{ display: {xs:"none", sm: "block"}}}>AASTHA</Typography>
            <Woman2OutlinedIcon sx={{ display: {xs:"block", sm: "none"}}}/>
            <Search><InputBase placeholder="search..."></InputBase></Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
                <Avatar sx={{width: 30, height: 30}} src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                onClick={e=>setOpen(true)}
                />
            </Icons>
            <UserBox>
               <Avatar sx={{width: 30, height: 30}} src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
               <Typography variant="span" >Me</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem> Profile </MenuItem>
        <MenuItem> My account </MenuItem>
        <MenuItem> Logout </MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
