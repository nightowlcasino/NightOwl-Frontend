import "./Sidebars.css";
import LeftSideBar from "./LeftSideBar.js";
import MobileNavigation from "./MobileNavigation.js";

const Sidebars = ({sidebarToggled,setSidebarToggled}) => {
    return(
        <div id="sidebars">
            <LeftSideBar sidebarToggled={sidebarToggled} setSidebarToggled={setSidebarToggled}/>
            <MobileNavigation />
        </div>
    )
}

export default Sidebars;
