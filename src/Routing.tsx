import AnimatedPage from "components/animations/animatedPage";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "screens/about";
import Achieved from "screens/achieved";
import Home from "screens/home";

const MainRouter = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <AnimatedPage>
                            <Home />
                        </AnimatedPage>
                    }
                />
                <Route
                    path="about"
                    element={
                        <AnimatedPage>
                            <About />
                        </AnimatedPage>
                    }
                />
                <Route
                    path="achieved"
                    element={
                        <AnimatedPage>
                            <Achieved />
                        </AnimatedPage>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};

export default MainRouter;