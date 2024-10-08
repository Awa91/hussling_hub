import React,{useState, FC } from "react";
import { ProductsCarousel, productCarouselData , productCarouselData1} from "./ProductsCarousel";
import "./styles.css";

type TabsProps = {
    tabs: {
      label: string;
      index: number;
      Component: FC<{ index: number }>;
    }[];
    selectedTab: number;
    onClick: (index: number) => void;
    orientation?: "horizontal" | "vertical";
    className?: string;
  };
  
  /**
   * Avalible Props
   * @param className string
   * @param tab Array of object
   * @param selectedTab number
   * @param onClick Function to set the active tab
   * @param orientation Tab orientation Vertical | Horizontal
   */
  const Tabs: FC<TabsProps> = ({
    className = "tabs-component",
    tabs = [],
    selectedTab = 0,
    onClick,
    orientation = "vertical"
  }) => {
    const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);
  
    return (
      <div
        className={
          orientation === "vertical" ? className + " vertical" : className
        }
      >
        <div role="tablist" aria-orientation={orientation}>
          {tabs.map((tab) => (
            <button
              className={selectedTab === tab.index ? "active" : ""}
              onClick={() => onClick(tab.index)}
              key={tab.index}
              type="button"
              role="tab"
              aria-selected={selectedTab === tab.index}
              aria-controls={`tabpanel-${tab.index}`}
              tabIndex={selectedTab === tab.index ? 0 : -1}
              id={`btn-${tab.index}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          aria-labelledby={`btn-${selectedTab}`}
          id={`tabpanel-${selectedTab}`}
        >
          {Panel && <Panel.Component index={selectedTab} />}
        </div>
      </div>
    );
  };



  const Demo = React.memo(() => {
    return (<>
    <ProductsCarousel items={productCarouselData}/></>);
  
  });

  const Demo1 = React.memo(() => {
    return (<>
    <ProductsCarousel items={productCarouselData1}/></>);
  
  });

type JobOpportuniesProps = {
    label: string;
    index: number;
    Component: React.FC<{}>;
  }[];
  
  // Tabs Array
   const tabs: JobOpportuniesProps = [
    {
      label: "Project Management",
      index: 1,
      Component: Demo 
    },
    {
      label: "Design",
      index: 2,
      Component: Demo1 
    },
    {
      label: "Development",
      index: 3,
      Component:Demo 
    },
    {
      label: "Marketing",
      index: 4,
      Component: Demo
    },
    {
      label: "Customer Service",
      index: 5,
      Component: Demo 
    }
   ];
  

export const JobOpportunies = React.memo(() => {
     const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

    return (<>
     <div className="mt-40">
     
     <br />
     <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
   </div></>);
  
  });