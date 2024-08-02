import "./root.css";
import { Outlet } from "react-router-dom";
import CommonSideBar from "../../components/SideBarNavigator/CommonSideBar";
import QuickLinks from "../../components/QuickLinks/QuickLinks";
import NavBar from "../../components/NavBar/NavBar";
function Root() {
  return (
    <div>
      <NavBar />
      <div className="landing-container">
        <CommonSideBar />
        <Outlet />
        <QuickLinks />
      </div>
    </div>
  );
}

export default Root;
