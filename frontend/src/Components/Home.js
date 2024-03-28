import React, { useState } from 'react';
import HeroSlider from './HeroSlider';
import { Avatar, Box, Button, Divider, Stack, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// Array of objects containing icon and text
const icons = [
  { icon: '/book.png', text: 'Book Shelf' },
  { icon: '/sofa.png', text: 'Light & Sofa' },
  { icon: '/table.png', text: 'Reading Table' },
  { icon: '/cotable.png', text: 'Corner Table' },
  { icon: '/chair.png', text: 'Office Chair' }
];
const backgrounds = [
  { image: '/dining.png',  text: "New Arrivals",
  describe: "Dining Table 2018", sale:"Sale Up To 20% Off"},
  { image: '/middining.png', text: "New Arrivals",
  describe: "Wood Chair – Table Style New", sale:"From AED 120.99 – Sale 60%" },
  { image: '/armchair.png', text: "New Arrivals",
  describe: "Copenhagen Chair", sale:"Sale Up To 40% Off" }
];

const box =[
  { icon:"/ship.png" , text:"FREE SHIPPING" , describe:"Order Above AED 1500"},
  { icon:"/free.png" , text:"FREE ASSEMBLY" , describe:"On all orders"},
  { icon:"/bell.png" , text:"WARRANTY" , describe:"one year Warranty"},
  { icon:"/secure.png" , text:"SECUREE PAYMENTS" , describe:"Safe, Fast & Secure"},
]
const prod = [
  {category:"NewArrival",icon:"/chairs.png" , tag:"New" , text:"Wooden decorations" , describe:"AED 38.50"   , like:<FavoriteBorderIcon fontSize='13px'/>},
  {category:"NewArrival",icon:"/chairs.png" , tag:"New" , text:"Wooden decorations" , describe:"AED 38.50"   , like:<FavoriteBorderIcon fontSize='13px'/>},
  {category:"NewArrival",icon:"/chairs.png" , tag:"New" , text:"Wooden decorations" , describe:"AED 38.50"   , like:<FavoriteBorderIcon fontSize='13px'/>},
  {category:"NewArrival",icon:"/chairs.png" , tag:"New" , text:"Wooden decorations" , describe:"AED 38.50"   , like:<FavoriteBorderIcon fontSize='13px'/>},
  {category:"NewArrival",icon:"/chairs.png" , tag:"New" , text:"Wooden decorations" , describe:"AED 38.50"   , like:<FavoriteBorderIcon fontSize='13px'/>},
  {category:"NewArrival",icon:"/chairs.png" , tag:"New" , text:"Wooden decorations" , describe:"AED 38.50"   , like:<FavoriteBorderIcon fontSize='13px'/>},
  {category:"NewArrival",icon:"/chairs.png" , tag:"New" , text:"Wooden decorations" , describe:"AED 38.50"   , like:<FavoriteBorderIcon fontSize='13px'/>},
  {category:"NewArrival",icon:"/chairs.png" , tag:"New" , text:"Wooden decorations" , describe:"AED 38.50"   , like:<FavoriteBorderIcon fontSize='13px'/>},
  {category:"BestSeller",icon:"/vass.png" , tag:"New" , text:"Wooden decorations" , describe:"AED 38.50" , dis:"-10%" , desrate:"AED 48.50" , like:<FavoriteBorderIcon fontSize='13px'/>},
  {category:"BestSeller",icon:"/chairs2.png" , tag:"New" , text:"Wooden decorations" , describe:"AED 38.50" , dis:"-10%" , desrate:"AED 48.50" , like:<FavoriteBorderIcon fontSize='13px'/>},
  {category:"SaleItem",icon:"/chairs.png" , tag:"New" , text:"Wooden decorations" , describe:"AED 38.50" , dis:"-10%" , desrate:"AED 48.50" , like:<FavoriteBorderIcon fontSize='13px'/>},
  {category:"BestSeller",icon:"/chairs.png" , tag:"New" , text:"Wooden decorations" , describe:"AED 38.50" , dis:"-10%" , desrate:"AED 48.50" , like:<FavoriteBorderIcon fontSize='13px'/>},
  {category:"SaleItem",icon:"/chairs.png" , tag:"New" , text:"Wooden decorations" , describe:"AED 38.50" , dis:"-10%" , desrate:"AED 48.50" , like:<FavoriteBorderIcon fontSize='13px'/>},
  {category:"Onsale",icon:"/chairs.png" , tag:"New" , text:"Wooden decorations" , describe:"AED 38.50" , dis:"-10%" , desrate:"AED 48.50" , like:<FavoriteBorderIcon fontSize='13px'/>},
  {category:"Onsale",icon:"/chairs.png" , tag:"New" , text:"Wooden decorations" , describe:"AED 38.50" , like:<FavoriteBorderIcon fontSize='13px'/>},
]
const news = [
  {icon:"/news.png" , text:"Interior design is the art.",  date:"16 March" , button:"Read More" , describe:"Lorem ipsum dolor sit amet, consectetur adipi elit, sed."},
  {icon:"/news.png" , text:"Interior design is the art.",  date:"16 March" , button:"Read More" , describe:"do eiusmod tempor incididu ut labore et dolore magna"},
  {icon:"/news.png" , text:"Interior design is the art.",  date:"16 March" , button:"Read More" , describe:"do eiusmod tempor incididu ut labore et dolore magna."},
]

export default function Home() {
 
  const newArrivals = prod.filter(product => product.category === "NewArrival");
  const bestSellers = prod.filter(product => product.category === "BestSeller");
  const saleItems = prod.filter(product => product.category === "SaleItem");
  const onSales = prod.filter(product => product.category === "Onsale");
  const [filteredProducts, setFilteredProducts] = useState(newArrivals);
  const handleTypographyClick = (category) => {
    switch (category) {
      case 'NewArrival':
        setFilteredProducts(newArrivals);
        break;
      case 'BestSeller':
        setFilteredProducts(bestSellers);
        break;
      case 'SaleItem':
        setFilteredProducts(saleItems);
        break;
      case 'Onsale':
        setFilteredProducts(onSales);
        break;
      default:
        setFilteredProducts(prod);
        break;
    }
  };
  return (
    <>
      <HeroSlider />
      <Stack flexDirection='row' gap='3.1em' alignItems='center' justifyContent='space-evenly' padding={{xl:"2em 17em",lg:"2em 5em" , md:"2em 10em",sm:"2em 5em" , xs:"1em 1em"}} flexWrap='wrap'>
        {icons.map((item, index) => (
          <Avatar key={index} sx={{ background: "none", border: "2px solid #474747", width: "170px", height: "170px" }}>
            <Stack flexDirection='column' justifyContent='center' alignItems='center' gap='1em'>
             <Box component='img' src={item.icon} sx={{width:"80%"}}/>
             <Typography fontSize='16px' color='#474747'>{item.text}</Typography>
            </Stack>
          </Avatar>
        ))}
      </Stack>
      <Stack height="100%" flexDirection='row' gap={{md:"2em",sm:"1.5em" , xs:"1em"}} alignItems='center' justifyContent='center' padding={{xl:"2em 15em",lg:"2em 5em" , md:"2em 10em",sm:"2em 5em" , xs:"1.5em 1em"}} flexWrap={{lg:"nowrap" , xs:"wrap"}}  >
        {backgrounds.map((background, index) => (
          <Stack flexGrow='1' key={index} width={index === 1 ? '50%' : '25%'} sx={{ backgroundImage: `url(${background.image})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '6px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '2em 2em' , minHeight:{sm:"320px" , xs:"250px"} , flexDirection:'column' , alignItems:index === 1 ? 'center' : 'start' , gap:"1em" , color:"#fff"}}>
           <Typography fontSize={{sm:"14px" , xs:"12px"}}>{background.text}</Typography>
           <Typography fontSize={{md:"24px" ,sm:"20px", xs:"18px"}}>{background.describe}</Typography>
           <Divider sx={{borderColor:"#fff" ,borderWidth:"2px", width:"44px"}}/>
           <Typography fontSize={{sm:"14px" , xs:"12px"}} marginTop='1.1em'>{background.sale}</Typography>
          </Stack>
        ))}
      </Stack>
      <Stack flexDirection={{lg:"row" ,xs:"column"}} border='1px solid #EBEBEB' minHeight='94px' alignItems='center' justifyContent='center' margin={{xl:"2em 15em",lg:"2em 5em" , md:"2em 10em",sm:"2em 5em" , xs:"1.5em 1em"}} flexWrap={{lg:"nowrap" , xs:"wrap"}}  >
      {
        box.map((box , index)=>(
          <Stack flexGrow='1' key={index} flexDirection={{lg:"row" ,xs:"column"}} flexWrap='wrap' alignItems='center' justifyContent='center' gap='0.5em' width={{lg:"25%" , xs:"100%"}} border='1px solid #ebebeb' minHeight='94px'>
            <Avatar sx={{padding:'0.5em 0.5em', margin:"0.5em 0.5em" , border:"2px solid #ebebeb" , width:"25px" ,height:"25px"}} src={box.icon}/>
            <Stack flexDirection='column' gap="0.3em" alignItems={{sm:"start" , xs:"center"}} margin='0.5em 0'>
<Typography fontSize='12px' color='#363F4D'>{box.text}</Typography>
<Typography fontSize='13px' color='#91959B'>{box.describe}</Typography>
            </Stack>
          </Stack>
        ))
      }
      </Stack>
      <Stack height="100%" flexDirection='column' gap='1em' alignItems='center' justifyContent='center' padding={{xl:"2em 15em",lg:"2em 5em" , md:"2em 10em",sm:"2em 5em" , xs:"1.5em 1em"}} flexWrap={{lg:"nowrap" , xs:"wrap"}}  >
      <Typography color='#212121' fontSize={{md:"34px" , sm:"26px" , xs:"20px"}} fontWeight='700'>Our Products</Typography>
      <Typography color='#474747' fontSize='16px' width={{md:"27em" , xs:"auto"}} textAlign='center'>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
eiusmo tempor incididunt ut labore</Typography>
<Stack flexDirection='row' gap={{sm:"1em" , xs:"0.8em"}} marginTop='0.5em' flexWrap='wrap'>
<Typography sx={{cursor:"pointer"}}  color={filteredProducts[0]?.category === 'NewArrival' ? '#FF7004' : '#474747'} fontSize={{sm:"16px" , xs:"14px"}}  onClick={() => handleTypographyClick('NewArrival')}>New Arrivals</Typography>
<Typography sx={{cursor:"pointer"}}  color={filteredProducts[0]?.category === 'BestSeller' ? '#FF7004' : '#474747'} fontSize={{sm:"16px" , xs:"14px"}}  onClick={() => handleTypographyClick('BestSeller')}>Best Sellers</Typography>
<Typography sx={{cursor:"pointer"}}  color={filteredProducts[0]?.category === 'SaleItem' ? '#FF7004' : '#474747'} fontSize={{sm:"16px" , xs:"14px"}}  onClick={() => handleTypographyClick('SaleItem')}>Sale Items</Typography>
<Typography sx={{cursor:"pointer"}}  color={filteredProducts[0]?.category === 'Onsale' ? '#FF7004' : '#474747'}fontSize={{sm:"16px" , xs:"14px"}}  onClick={() => handleTypographyClick('Onsale')}>On Sales</Typography>
</Stack>
<Stack flexDirection='row' gap='4em' flexWrap='wrap' marginTop='1em'>
{
  filteredProducts.map((pro , index)=>(
    <Stack key={index}  width={{sm:"250px" , xs:"100%"}} height='auto'  flexDirection='column' position='relative' alignItems='center'>
       <Box component='img' src={pro.icon} sx={{width:"100%" , minWidth:"300px" , minHeight:"300px"}}/>
       {
       pro.dis && pro.dis.length > 0 &&
        <Box sx={{position:"absolute" , top:"5%" , left:"5%" , width:"45px" , height:"24px" ,background:"#FF7004" , borderRadius:"3px" , fontSize:"12px" , display:"flex", justifyContent:"center" ,alignItems:"center" , color:"#fff"}} >{pro.dis}</Box>
       }
       <Box sx={{position:"absolute" , top:pro.dis ? '14%' : '5%' , left:"5%" , width:"45px" , height:"24px" ,background:"#007A58" , borderRadius:"3px" , fontSize:"12px" , display:"flex", justifyContent:"center" ,alignItems:"center" , color:"#fff"}} >{pro.tag}</Box>
       <Avatar sx={{position:"absolute" , top:"5%" , right:"5%" , width:"35px" , height:"35px" , background:"#fff" , color:"#000"}}>{pro.like}</Avatar>
       <Typography marginTop='0.7em' fontSize='16px' color='#1D1D1D'>{pro.text}</Typography>
       <Typography fontSize='13px' color='#3F3F3F'>{pro.describe} <span style={{textDecoration:"line-through" , color:"#999999" , fontSize:"13px"}}>{pro.desrate}</span></Typography>
    </Stack>
  ))
}

</Stack>
<Stack marginTop='2.5em' flexDirection='row' gap='1.2em' flexWrap={{md:"nowrap" , xs:"wrap"}}>
<Box component='img' src='/black.png' sx={{width:"50%" , minWidth:"300px" , minHeight:"250px" , flexGrow:"1"}}/>
<Box component='img' src='/best.png' sx={{width:"50%" , minWidth:"300px" , minHeight:"250px", flexGrow:"1"}}/>
</Stack>
      </Stack>
      <Stack height="100%" flexDirection='column' gap='1em' alignItems='center' justifyContent='center' padding={{xl:"2em 15em",lg:"2em 5em" , md:"2em 10em",sm:"2em 5em" , xs:"1.5em 1em"}} flexWrap={{lg:"nowrap" , xs:"wrap"}}  >
      <Typography color='#212121' fontSize={{md:"34px" , sm:"26px" , xs:"20px"}} fontWeight='700'>Latest News</Typography>
      <Typography color='#474747' fontSize='16px' width={{md:"27em" , xs:"auto"}} textAlign='center'>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
eiusmo tempor incididunt ut labore</Typography>
<Stack flexDirection='row' gap='4.5em'marginTop='1em' flexWrap='wrap'>
{
  news.map((pro , index)=>(
    <Stack key={index} width={{md:"250px" , xs:"auto"}}  height='auto'  flexDirection='column' alignItems='start'>
       <Box component='img' src={pro.icon} sx={{width:"100%" , minWidth:"300px" , minHeight:"300px" , flexGrow:{sm:"0" , xs:"1"}}}/>
       <Typography marginTop='0.7em' fontSize='14px' color='#FF7004' sx={{textDecoration:"underline"}}>{pro.date}</Typography>
       <Typography marginTop='0.7em' fontSize='16px' fontWeight='700' color='#1D1D1D'>{pro.text}</Typography>
       <Typography marginTop='0.7em' fontSize='14px' color='#474747'>{pro.describe}</Typography>
      <Button  variant='contained' sx={{background:"#4D4D4D !important" ,fontSize:"14px" , borderRadius:"0 !important",marginTop:"0.8em"}}>{pro.button}</Button>
    </Stack>
  ))
}

</Stack>
</Stack>
    </>
  );
}
