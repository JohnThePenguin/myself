import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "Routing";

function App() {
    return (
        <div className="bg-white h-screen w-screen">
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;
