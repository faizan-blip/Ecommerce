import {  Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Footer() {
  // const boxes = [1, 2, 3, 4, 5];

  return (
    
    <>
      <Stack flexDirection='column' justifyContent='center' alignItems='center' height='100%' gap='5em' paddingTop='4em'>
        <Stack flexDirection='column' gap='0.5em' justifyContent='center' alignItems='center' padding='0 1em'>
          <Typography fontSize='13px' color='#929292'>Special Offers For Subscribers</Typography>
          <Typography fontSize={{md:"24px",sm:"22px" , xs:"18px"}} fontWeight='700' color='#292929'>Ten Percent Member Discount</Typography>
          <Typography fontSize='13px' color='#929292' marginTop='1em' >Subscribe to our newsletters now and stay up to date with new collections, the latest lookbooks and exclusive offers.</Typography>
          <Stack width={{md:"620px" , xs:"300px"}} border='1px solid #EBEBEB' height='59px' flexDirection='row' alignItems='center'  marginTop='1.2em'>
            <TextField 
              placeholder='Enter Your Email Address Here...'
              sx={{
                width: {sm:"70%" ,xs:"60%"},
                height: '59px',
                "& .MuiInputBase-input": {
                  border: 'none !important',
                  '&:focus, &:active': {
                    borderColor: 'black',
                  }
                }
              }}
            />
            <Button sx={{color:"#292929" , width:"40%" , fontWeight:"600"}}>SUBSCRIBE!</Button>
          </Stack>
        </Stack>
        {/* <Stack flexDirection='row' height='100%' width={{sm:"60%" , xs:"auto"}} gap='2.2em'  padding='0 1em' flexWrap='wrap'>
        {boxes.map((box, index) => (
          <Box key={index} sx={{ flexGrow:"1", height: "5em", background: '#d2d2d2', width:"20%" }} />
        ))}
        </Stack> */}
        <Stack sx={{backgroundColor:"#f6f6f6"}} flexDirection='column' height='100%' alignItems='center' justifyContent='center' gap='2.5em' padding='3em 1.5em' width={{sm:"97%" , xs:"auto"}}>
        <Stack height='100%' justifyContent={{lg:"space-evenly" , xs:"start"}} alignItems={{lg:"center" , xs:"start"}} flexDirection={{lg:"row" , xs:"column"}} gap={{lg:"0" , xs:"2em"}}  >
           <Stack flexDirection='column' gap='0.5em' justifyContent='start' alignItems='start' >
           <Typography fontSize={{sm:"32px" , xs:"15px"}}>Your Logo Here</Typography>
           <Typography fontSize='13px' color='#929292' width={{sm:"80%" , xs:"auto"}}>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
vel illum dolore eu feugiat nulla facilisis.</Typography>
<Typography fontSize={{sm:"16px" , xs:"14px"}} fontWeight='700' color='#292929' marginTop='1em'>Follow Us On Social:</Typography>
   <Stack flexDirection='row' gap='0.7em'>
   <IconButton><FacebookIcon/></IconButton>
   <IconButton><XIcon/></IconButton>
   <IconButton><LinkedInIcon/></IconButton>
   <IconButton><InstagramIcon/></IconButton>
   </Stack>
           </Stack>
           <Stack flexDirection={{sm:"row"  ,xs:"column"}} gap={{sm:"3.2em" , xs:"1.5em"}}>
             <Stack flexDirection='column' gap='1.5em'>
<Typography fontSize={{sm:"16px" , xs:"14px"}} color='#292929' fontWeight='700'>Opening Time</Typography>
<Typography  fontSize='13px' color='#929292' marginTop='0.1em'>Mon – Fri: 8AM – 10PM</Typography>
<Typography fontSize='13px' color='#929292'>Sat: 9AM-8PM</Typography>
<Typography  fontSize='13px' color='#929292'>Sun: Closed</Typography>
             </Stack>

             <Stack flexDirection='column' gap='1.5em'>
<Typography fontSize={{sm:"16px" , xs:"14px"}} color='#292929' fontWeight='700'>My Account</Typography>
<Typography  fontSize='13px' color='#929292' marginTop='0.1em'>My Account</Typography>
<Typography fontSize='13px' color='#929292'>Wishlist</Typography>
<Typography  fontSize='13px' color='#929292'>Order Tracking</Typography>
<Typography fontSize='13px' color='#929292'>Privacy Policy</Typography>
<Typography  fontSize='13px' color='#929292'>Shipping Information</Typography>
             </Stack>

             <Stack flexDirection='column' gap='1.5em'>
<Typography fontSize={{sm:"16px" , xs:"14px"}} color='#292929' fontWeight='700'>About Us</Typography>
<Typography  fontSize='13px' color='#929292' marginTop='0.1em'>About Us</Typography>
<Typography fontSize='13px' color='#929292'>Shopping Guide</Typography>
<Typography  fontSize='13px' color='#929292'>Delivery Information</Typography>
<Typography fontSize='13px' color='#929292'>Privacy Policy</Typography>
<Typography  fontSize='13px' color='#929292'>Our Store</Typography>
             </Stack>
           </Stack>
        </Stack>
        <Stack sx={{border:"2px solid #ebebeb" , width:{md:"70%" , xs:"90%"}}} />
        <Stack flexDirection={{sm:"row" , xs:"column-reverse"}} width={{md:"70%" , xs:"auto"}} justifyContent='space-between' gap={{sm:"0" ,xs:"0.7em"}}>
       <Typography fontSize='13px' color='#929292'>Copyright ©2024 Your Company Name Here. All rights reserved.</Typography>
       <Stack  color='#929292' flexDirection='row' gap='1.7em' alignItems='center' alignSelf='center'><Typography fontSize='13px' flexWrap='wrap' >
       Policy  </Typography> <Typography fontSize='13px' >Questions</Typography><Typography fontSize='13px' > Affiliate </Typography><Typography fontSize='13px' >Help</Typography></Stack>
        </Stack>
        </Stack>
      </Stack>
    </>
  )
}
