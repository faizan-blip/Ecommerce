import { CheckBox } from '@mui/icons-material';
import { Button, Card, Divider, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Login() {
  return (
    <>
      <Card sx={{ display: "flex", flexDirection: "column", padding: "1.2em 2.2em", width: "50%", height: "20em", gap: "2em" }}>
        <Typography sx={{ textDecoration: "underline", fontWeight: "700", fontSize: "16px", color: "#363F4D" }}>Login</Typography>
        <Stack flexDirection='column' gap='0.7em'>
          <Typography fontSize='14px' color='#7A7A7A'>Email Address*</Typography>
          <input type="email" style={{ width: "100%", height: "40px", border: "1px solid #999999" }} />
          <Typography fontSize='14px' color='#7A7A7A' marginTop='0.7em'>Password</Typography>
          <input type="password" style={{ width: "100%", height: "40px", border: "1px solid #999999" }} />
          <Stack flexDirection='row' justifyContent='space-between' alignItems='center'>
            <label>
              <CheckBox />
              <Typography fontSize='14px' color='#7A7A7A'>Remember Me</Typography>
            </label>
            <Typography fontSize='14px' color='#7A7A7A'><a href="#">Forgot Password?</a></Typography>
          </Stack>
        </Stack>
        <Button variant='contained' sx={{background:"#363F4D !important" , height:"36px" , width:"140px", fontSize:"14px"}}>Login</Button>
          <Divider sx={{color:"#7A7A7A" , fontSize:"14px" , borderColor:"#000" , marginTop:"0.7em"}}>or use one of these options</Divider>
          <Stack flexDirection='row' justifyContent='space-evenly' ></Stack>
      </Card>
    </>
  )
}
