import React from "react";
import "./SideBar.css";
import ListChoice, {
 Country,
 Genre,
} from "../../../../UI/components/List_Choice/ListChoice";

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

   <div>Год</div>
   <div>Рейтинг имдб</div>
   <div>рейтинг втубе</div>
   <div>кнопки</div>
  </div>
 );
};

export default SideBar;
