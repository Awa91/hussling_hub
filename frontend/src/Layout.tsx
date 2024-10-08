import React, { } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer,footerData, mediaData } from "./components/Footer";



const menuSections = [
  { title: " Find a Job", url: "/home"},
  { title: "Talents", url: "/about"},
  { title: "Features", url: "/services"},
  { title: "About", url: "/gallery"},
  
];

const mobileMenuSections = [
  { title: " Find a Job", url: "/home"},
  { title: "Talents", url: "/about"},
  { title: "Features", url: "/services"},
  { title: "About", url: "/gallery"},
  { title: "Login", url: "/gallery"},
  { title: "Sign Up", url: "/gallery"},
  
  
];

export const Layout = React.memo(() => {
  console.log('Layout component')
  return (<>
    <Header logo="/assets/hustlehub-transparent-logo250x100.png" logoLabel="Logo" title="Hussling Hub" sections={menuSections} mobileMenuSections={mobileMenuSections}/>
    

   
    {/* <div className="relative">
    <div className='w-full h-full bg-primary/100 absolute'>
      </div> 
  
    </div> */}
    <Outlet />

    <Footer items={footerData} media={mediaData} /></>);

});




const HoverableDropdown = React.memo(() => {
  return (<></>);

});

// const Footer = React.memo(() => {
//     return (<></>);

// });
