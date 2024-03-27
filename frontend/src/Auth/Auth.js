import { Stack, Typography } from '@mui/material'
import React from 'react'
import Login from '../Components/Login'
import Register from '../Components/Register'

export default function Auth() {
  return (
    <>

  <Stack bgcolor='#F4F5F7' height='210px' flexDirection='row' justifyContent='space-evenly' alignItems='center'>
   <Typography color='#212121' fontSize={{md:"32px" , sm:"25px" , xs:"20px"}}>LOGIN/REGISTER</Typography>
   <Typography fontSize='14px' color='#FF7004'>HOME/ <span style={{color:'#474747'}} >LOGIN</span></Typography>
  </Stack>
  <Stack flexDirection='row' gap='1em'  padding={{xl:"3em 15em",lg:"3em 5em" , md:"3em 10em",sm:"3em 5em" , xs:"3em 1em"}}  >
  <Login/>
  <Register/>
 </Stack>
 </>
  )
}
