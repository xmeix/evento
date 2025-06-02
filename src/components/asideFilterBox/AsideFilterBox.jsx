import "./AsideFilterBox.css";
import Proptypes from "prop-types";

const AsideFilterBox = ({showFilters}) => {
    return ( 
        <div className="asideFilterBox" style={{display: showFilters? "none": "initial"}}>
            AsideFilterBox
        </div>
     );
}
AsideFilterBox.propTypes = {
    showFilters: Proptypes.bool, 
  };
 
export default AsideFilterBox;
