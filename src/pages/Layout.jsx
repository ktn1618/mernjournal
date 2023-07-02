import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

const Layout = () => {
    return (
        <>
            <NavBar />

            <main>
                <Outlet />
            </main>
        </>

    );
};

export default Layout;