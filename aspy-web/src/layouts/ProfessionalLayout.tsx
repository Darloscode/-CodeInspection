import SideMenu from "@components/SideMenu";
import { Outlet } from "react-router-dom";

const ProfessionalLayout = () => (
  <div style={{ display: "flex" }}>
    <SideMenu />
    <div style={{ flex: 1, marginLeft: 10 }}>
      <Outlet />
    </div>
  </div>
);

export default ProfessionalLayout;
