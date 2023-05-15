import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { NavLink } from "react-router-dom";

function SideBar() {
  const { collapseSidebar } = useProSidebar();
  return (
    <>
      <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
        <Sidebar
          backgroundColor="#EFF1F4"
          rtl={false}
          style={{
            height: "100vh",
            position: "sticky",
            top: 0,
            border: "1px solid #F2F2F2",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Menu>
            <MenuItem
              icon={<MenuOutlinedIcon />}
              onClick={() => {
                collapseSidebar();
              }}
              style={{ textAlign: "center" }}
            >
              {" "}
              <h2>Area Ventas</h2>
            </MenuItem>{" "}
            <NavLink to="registrarpedido">
              <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
            </NavLink>
            <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
            <SubMenu icon={<HomeOutlinedIcon />} label="Pepe">
              <MenuItem icon={<PeopleOutlinedIcon />}>Item 1</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon />}>Item 2</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon />}>Item 3</MenuItem>
            </SubMenu>
            <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
            <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
            <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
            <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
            <SubMenu icon={<HomeOutlinedIcon />} label="Home">
              <MenuItem icon={<PeopleOutlinedIcon />}>Item 1</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon />}>Item 2</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon />}>Item 3</MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>{" "}
    </>
  );
}

export default SideBar;
