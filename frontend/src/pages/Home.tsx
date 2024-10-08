import React from "react";
import {TabSection} from "../components/TabSection";
import SearchSection from '../components/SearchSection';
import DropdownSection from "../components/DropdownSection";
import { HeroSection ,heroSectionData} from "../components/HeroSection";
import { JobOpportunies } from "../components/JobOpportunies";
import { Category, categoryData } from "../components/CategoriesSection";
import { PopularitySection, popularitySectionData } from "../components/PopularitySection";
import { CommentSection, commentSectionData } from "../components/CommentSection";
import { ExplorationSection, explorationSectionData } from "../components/ExplorationSection";
import { SearchAccordion } from "../components/SearchAccordion";

export const Home = React.memo(() => {
  console.log('Home component')
  return (<>
   
   
    <HeroSection items={heroSectionData}/>
    <SearchAccordion items={<SearchSection/>}/>
    <JobOpportunies/>
   
    
    <Category items={categoryData}/>
   
   
    <PopularitySection items={popularitySectionData}/>
   <CommentSection items={commentSectionData}/>
   <ExplorationSection items={explorationSectionData}/>

  </>);
});

