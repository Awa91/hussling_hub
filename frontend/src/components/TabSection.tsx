import React, { useState } from "react";
import "./styles.css";
import Tabs from "./Tabs";
// Tabs Components
import {TabOne} from "./TabOne";
import {TabTwo} from "./TabTwo";
import {TabThree} from "./TabThree";

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "Tab One",
    index: 1,
    Component: TabOne
  },
  {
    label: "Tab Two",
    index: 2,
    Component: TabTwo
  },
  {
    label: "Tab Three",
    index: 3,
    Component: TabThree
  }
];

// export default function TabSection() {
//   const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

//   return (
//     <div className="App">
     
//       <br />
//       <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
//     </div>
//   );
// }

export const  TabSection = React.memo(() => {
    const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
    return (<>
     <div className="mt-40">
     
     <br />
     <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
   </div></>);
  
  });