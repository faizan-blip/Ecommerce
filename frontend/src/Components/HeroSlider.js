import { Stack, Typography, Box, Button } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function HeroSlider() {
    const slides = [
        {
          image: "/slider1.jpg",
          text: "New Arrivals",
          describe: "Corporis nulla luxurious bedroom",
          buttonText: "Shop Now"
        },
        {
          image: "/slider1.jpg",
          text: "New Arrivals",
          describe: "Corporis nulla luxurious bedroom",
          buttonText: "Shop Now"
        },
        {
          image: "/slider3.jpg",
          text: "New Arrivals",
          describe: "Corporis nulla luxurious bedroom",
          buttonText: "Shop Now"
        }
      ];
  return (
    <Carousel autoPlay showArrows={false} showStatus={false}  >
      {slides.map((slide, index) => (
        <Stack  key={index} sx={{ justifyContent: "center", alignItems: "center", height:{lg:"100vh" , xs:"100%"}, position: "relative" }}>
           <Box component="img" src={slide.image} sx={{ width: "100%", maxWidth: "100%", height: "100%", zIndex: "0", minWidth: "300px" }} />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
              zIndex: "1",
            }}
          />
          <Stack flexDirection='column' justifyContent='start' position='absolute' top={{md:"40%" , sm:"20%" , xs:"10%"}} left={{md:"20%" , sm:"15%" , xs:"10%"}} zIndex='2' gap={{md:"2em",sm:"1.5em" , xs:"1em"}}>
            <Typography fontSize={{sm:"18px" , xs:"13px"}} textAlign='start' color='#e2e2e2'>{slide.text}</Typography>
            <Typography fontSize={{ md:"39px", sm:"30px" , xs:"22px"}} fontWeight='700' textAlign='start' width='11em' color='#fefefe'>{slide.describe}</Typography>
            <Button variant="outlined" sx={{ borderColor:"#fefefe !important", width:{sm:"12em" , xs:"10em"} , height:{sm:"3.1em" , xs:"auto"} , color:"#fff" , fontWeight:"700" , borderRadius:"0 !important" , fontSize:{md:"18px",sm:"15px" , xs:"12px"}}}>
              {slide.buttonText}
            </Button>
          </Stack>
        </Stack>
      ))}
    </Carousel>
  )
}
