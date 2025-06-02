import "./TopFilterBox.css"
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import  AsideFilterBox from "./../asideFilterBox/AsideFilterBox";
import { useEffect, useRef, useState } from "react";
const TopFilterBox = () => {

    const [showFilters, setShowFilters] = useState(false);
    const asideRef = useRef(null);
    const showAsideFilters = () => {
        setShowFilters((prev) => !prev);
    }

    const handleClickOutside = (event) => {
        if (!asideRef.current.contains(event.target)) {
          setShowFilters(true);
        } 
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return ( 
        <div className="topFilterBox">
           <div ref={asideRef}>
                <AsideFilterBox showFilters={showFilters} />
           </div>

            <div className="topFilterItem" onClick={showAsideFilters}>
                <TuneRoundedIcon className="icon topFilterItemIcon"/>
                <div className="topFilterItemText">{showFilters ? "Show Filters": "Hide Filters"}</div>
            </div>
            <div className="topFilterItem"> 
                <div className="topFilterItemText">99 Event</div>
            </div>
            <div className="topFilterItem"> 
                <div className="topFilterItemText">
                    Sort by
                </div>
                <select name="filter" id="filter">
                    <option value="f2">Top Rated</option>
                    <option value="f2">Low Rated</option>
                    <option value="f3">Most Favorited</option>
                    <option value="f4">Recently Added</option>
                    <option value="f9">Eventos Pick</option>
                    <option value="f10">Trending Now</option>
                </select>
            </div>
        </div>
     );
}
 
export default TopFilterBox;