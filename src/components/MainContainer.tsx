import React, { ReactNode } from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";

interface MainContainerProps {
    children: ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

export default MainContainer;