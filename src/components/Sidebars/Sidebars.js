import "./Sidebars.css";
import LeftSideBar from "./LeftSideBar.js";

const Sidebars = () => {

    return(
        <div id="sidebars">
            {/* {path.includes("/games") ? <MobileSlideOverBar /> : <LeftSideBar />} */}
            <LeftSideBar />
        </div>
    )

}

export default Sidebars;
