import "./Sidebars.css";
import LeftSideBar from "./LeftSideBar.js";
import MobileNavigation from "./MobileNavigation.js";

const Sidebars = () => {

    return(
        <div id="sidebars">
            {/* {path.includes("/games") ? <MobileSlideOverBar /> : <LeftSideBar />} */}
            <LeftSideBar />
            <MobileNavigation />
        </div>
    )

}

export default Sidebars;
