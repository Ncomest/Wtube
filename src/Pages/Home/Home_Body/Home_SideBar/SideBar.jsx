import React from "react";
import "./SideBar.css";
import ListChoice, {
 Country,
 Genre,
} from "../../../../UI/components/List_Choice/ListChoice";

import SideBarFilter from "../../../../UI/components/Buttons/SideBarFilter/SideBarFilter";

function SideBar() {
 return (
  <div className="SideBar">
   <FilterBar />
  </div>
 );
}

const FilterBar = () => {
 return (
  <div>
   <ListChoice>
    <Genre />
   </ListChoice>
   <ListChoice>
    <Country />
   </ListChoice>
   <FilterBarContainerYear />
   <FilterBarContainerImdb />
   <FilterBarContainerKP />
   <SideBarFilter />
  </div>
 );
};

export default SideBar;

const FilterBarContainerYear = () => {
 return (
  <div className="FilterBarContainer_Container">
   <p className="FilterBarContainer_Text">Год</p>
   <div className="FilterBarContainer_Items">
    <select
     name="YearStart"
     id="YearStart"
     className="FilterBarContainer_Select"
    >
     <option value="0">2021</option>
     <option value="1">2022</option>
     <option value="2">2023</option>
    </select>
    <select
     name="YearFinish"
     id="YearFinish"
     className="FilterBarContainer_Select"
    >
     <option value="0">2021</option>
     <option value="1">2022</option>
     <option value="2">2023</option>
    </select>
   </div>
  </div>
 );
};
const FilterBarContainerImdb = () => {
 return (
  <div className="FilterBarContainer_Container">
   <p className="FilterBarContainer_Text">Рейтинг Imdb</p>
   <div className="FilterBarContainer_Items">
    <select
     name="ImdbStart"
     id="ImdbStart"
     className="FilterBarContainer_Select"
    >
     <option value="0">1</option>
     <option value="1">2</option>
     <option value="2">3</option>
    </select>
    <select
     name="ImdbFinish"
     id="ImdbFinish"
     className="FilterBarContainer_Select"
    >
     <option value="0">1</option>
     <option value="1">2</option>
     <option value="2">3</option>
    </select>
   </div>
  </div>
 );
};
const FilterBarContainerKP = () => {
 return (
  <div className="FilterBarContainer_Container">
   <p className="FilterBarContainer_Text">Рейтинг КиноПоиск</p>
   <div className="FilterBarContainer_Items">
    <select name="KpStart" id="KpStart" className="FilterBarContainer_Select">
     <option value="0">1</option>
     <option value="1">2</option>
     <option value="2">3</option>
    </select>
    <select name="KpFinish" id="KpFinish" className="FilterBarContainer_Select">
     <option value="0">1</option>
     <option value="1">2</option>
     <option value="2">3</option>
    </select>
   </div>
  </div>
 );
};
