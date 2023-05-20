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
import { Grid } from "@mui/material";

function BarraLateral() {
    const { collapseSidebar } = useProSidebar();

    return (
        <div id="sidebar" style={({ height: "100vh" }, { display: "flex" })}>
            <Sidebar
                backgroundColor="#DDDDDD"
                rtl={false}
                style={{ height: "100vh", position: "sticky", top: 0 }}
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
                        <h3>Administración</h3>
                    </MenuItem>
                    <NavLink to="home" style={{ color: "black" }} ><MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem> </NavLink>
                    <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
                    <SubMenu icon={<HomeOutlinedIcon />} label="Compras/Ventas">
                        <Grid marginLeft="5%">
                            <NavLink to="/compras" style={{ color: "black" }} ><MenuItem icon={<PeopleOutlinedIcon />}>Compras</MenuItem></NavLink>
                            <MenuItem icon={<PeopleOutlinedIcon />}>Item 2</MenuItem>
                            <MenuItem icon={<PeopleOutlinedIcon />}>Item 3</MenuItem>
                        </Grid>
                    </SubMenu>
                    <NavLink to="registrar-producto" activeClassName="active" style={{ color: "black" }} ><MenuItem icon={<ContactsOutlinedIcon />}>Registrar Productos</MenuItem> </NavLink>
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
        </div>
    );
}

export default BarraLateral;