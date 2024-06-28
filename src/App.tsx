import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "Routing";

function App() {
    return (
        <div className="bg-white h-screen w-screen">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;
