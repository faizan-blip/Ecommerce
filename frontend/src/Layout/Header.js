import { Avatar, Divider, Drawer, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import Person2Icon from '@mui/icons-material/Person2';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
export default function Header() {
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [currencyAnchorEl, setCurrencyAnchorEl] = useState(null);
  const [userLanguage, setUserLanguage] = useState('en'); // Default to English
  const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Default currency

  const handleLanguageClick = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleCurrencyClick = (event) => {
    setCurrencyAnchorEl(event.currentTarget);
  };

  const handleCurrencyClose = () => {
    setCurrencyAnchorEl(null);
  };

  const handleLanguageChange = (language) => {
    setUserLanguage(language);
    setLanguageAnchorEl(null); // Close the menu after language selection
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setCurrencyAnchorEl(null); // Close the menu after currency selection
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Stack flexDirection='column'>
        {/* Drawer */}
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        >
          <Stack
            bgcolor="#fff"
            height="100vh"
            justifyContent="start"
            alignItems="start"
            flexDirection='column'
            color='#00'
          >
            <Avatar onClick={()=> setIsSidebarOpen(false)} sx={{background:"#FF7004 !important" , margin:"0.5em 0.5em"}}><CloseIcon/></Avatar>
            <Stack flexDirection='column' gap='0.5em' padding="1em 1em">
            <Link to='/' style={{textDecorationLine:"none"}} ><Typography sx={{textDecoration:"none" ,textDecorationLine:"none"}} fontSize='14px' color='#474747 !important'>Home</Typography></Link> 
              <Divider sx={{borderColor:"#EEEEEE" , width:"100%"}}/>
              <Typography fontSize='14px' color='#474747' sx={{display:"flex" , alignItems:"center" , justifyContent:"space-between"}}>Office <AddIcon fontSize='14px' /></Typography>
              <Divider sx={{borderColor:"#EEEEEE" , width:"100%"}}/>
              <Typography fontSize='14px' color='#474747' sx={{display:"flex" , alignItems:"center", justifyContent:"space-between" }}>Hospitality <AddIcon  fontSize='14px'/></Typography>
              <Divider sx={{borderColor:"#EEEEEE" , width:"100%"}}/>
              <Typography fontSize='14px' color='#474747' sx={{display:"flex" , alignItems:"center" , justifyContent:"space-between"}}>Outdoor <AddIcon fontSize='14px' /></Typography>
              <Divider sx={{borderColor:"#EEEEEE" , width:"100%"}}/>
              <Typography fontSize='14px' color='#474747'>Unique</Typography>
              <Divider sx={{borderColor:"#EEEEEE" , width:"100%"}}/>
              <Typography fontSize='14px' color='#474747'>How It Works</Typography>
              <Divider sx={{borderColor:"#EEEEEE" , width:"100%"}}/>
              <Typography fontSize='14px' color='#474747'>Become a Partner</Typography>
              <Divider sx={{borderColor:"#EEEEEE" , width:"100%"}}/>
            </Stack>
          </Stack>
        </Drawer>

        <Stack flexDirection='row' bgcolor='#000' minHeight='45px' justifyContent='space-between' padding={{lg:"1em 15em", md:"1em 5em" , xs:"1em 1em"}} alignItems='center' flexWrap="wrap" gap='0.7em'>
          <Typography color='#fff' fontStyle='italic' fontSize={{sm:"14px" , xs:"12px"}}>ALL TYPE OF FURNITURE ITEMS UNDER ONE ROOF, WITH CUSTOMIZATION OPTION!</Typography>
          <Stack flexDirection='row' alignItems='center'>
            <Typography color='#fff'  fontSize={{sm:"14px" , xs:"12px"}}>Language :</Typography>
            <Divider sx={{ borderColor: "#43474E" }} orientation="vertical" />
            <Typography  fontSize={{sm:"14px" , xs:"12px"}} color='#fff' onClick={handleLanguageClick} style={{ cursor: 'pointer', marginLeft: '0.5em' , display:"flex" , alignItems:"center" }}>{userLanguage.toUpperCase()}  <KeyboardArrowDownIcon/></Typography>
            <Menu
              anchorEl={languageAnchorEl}
              open={Boolean(languageAnchorEl)}
              onClose={handleLanguageClose}
            >
              <MenuItem sx={{ fontSize:{sm:"14px" , xs:"12px"}}}  onClick={() => handleLanguageChange('en')}>English</MenuItem>
              <MenuItem sx={{ fontSize:{sm:"14px" , xs:"12px"}}} onClick={() => handleLanguageChange('es')}>Spanish</MenuItem>
              {/* Add more languages as needed */}
            </Menu>
            <Divider sx={{ borderColor: "#43474E" , height:"1.4em" ,margin:"0 0.7em"}} orientation="vertical" />
            <Typography  fontSize={{sm:"14px" , xs:"12px"}} color='#fff' marginLeft='1em'>Currency :</Typography>
            <Typography fontSize={{sm:"14px" , xs:"12px"}} color='#fff' onClick={handleCurrencyClick} style={{ cursor: 'pointer', marginLeft: '0.5em', display:"flex" , alignItems:"center" }}>{selectedCurrency} <KeyboardArrowDownIcon/></Typography>
            <Menu
              anchorEl={currencyAnchorEl}
              open={Boolean(currencyAnchorEl)}
              onClose={handleCurrencyClose}
            >
              <MenuItem sx={{ fontSize:{sm:"14px" , xs:"12px"}}} onClick={() => handleCurrencyChange('USD')}>USD</MenuItem>
              <MenuItem sx={{ fontSize:{sm:"14px" , xs:"12px"}}} onClick={() => handleCurrencyChange('EUR')}>EUR</MenuItem>
              {/* Add more currencies as needed */}
            </Menu>
          </Stack>
        </Stack>
        <Stack bgcolor='#fff' height='80px' flexDirection='row' justifyContent='space-between' padding={{lg:"1em 15em", md:"1em 5em" , sm:"1em 1em"}} alignItems='center'>
        <IconButton sx={{ color: '#000' ,display:{md:"none"  , xs:"block"}}} onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography fontSize={{sm:"32px" , xs:"15px"}}>Your Logo Here</Typography>
          <Stack flexDirection='row' alignItems='center' gap={{sm:"0.5em" , xs:"0.2em"}}>
          <IconButton sx={{color:"#000"}}><SearchIcon /></IconButton>
          <Divider sx={{ borderColor: "#898989" , height:"24px" }} orientation="vertical" />
       <Link to='/auth'><IconButton sx={{color:"#000"}}><Person2Icon /></IconButton></Link>   
          <Divider sx={{ borderColor: "#898989" , height:"24px" }} orientation="vertical" />
          <IconButton sx={{color:"#000"}}><LocalMallIcon /></IconButton>
          </Stack>
        </Stack>
        <Stack bgcolor='#000' height='55px' flexDirection='row' gap='3.2em' justifyContent='center' alignItems='center'  padding='1em 0' color='#fff' sx={{display:{md:"flex"  , xs:"none"}}}>
    
 <Link to='/'  style={{textDecorationLine:"none"}} ><Typography sx={{textDecoration:"none" ,textDecorationLine:"none", color:"#fff"}} >Home</Typography></Link> 
  <Typography sx={{display:"flex" , alignItems:"center" }}>Office <KeyboardArrowDownIcon /></Typography>
  <Typography sx={{display:"flex" , alignItems:"center" }}>Hospitality <KeyboardArrowDownIcon /></Typography>
  <Typography sx={{display:"flex" , alignItems:"center" }}>Outdoor <KeyboardArrowDownIcon /></Typography>
  <Typography>Unique</Typography>
  <Typography>How It Works</Typography>
  <Typography>Become a Partner</Typography>
        </Stack>
      </Stack>
    </>
  );
}
