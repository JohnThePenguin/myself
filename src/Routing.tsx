import AnimatedPage from "components/animations/animatedPage";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "screens/about";
import Achieved from "screens/achieved";
import BoringStuff from "screens/boring";
import Experience from "screens/experience";
import Home from "screens/home";
import Today from "screens/today";

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

                <Route
                    path="experience"
                    element={
                        <AnimatedPage>
                            <Experience />
                        </AnimatedPage>
                    }
                />

                <Route
                    path="today"
                    element={
                        <AnimatedPage>
                            <Today />
                        </AnimatedPage>
                    }
                />

                <Route
                    path="boring"
                    element={
                        <AnimatedPage>
                            <BoringStuff />
                        </AnimatedPage>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};

export default MainRouter;