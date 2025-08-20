import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Ninja from "./components/ninja/Ninja";
import Soda from "./components/soda/Soda";
import Dental from "./components/dental/Dental";

function App() {
    return (
        <div style={{position: 'relative'}}>

        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Ninja />} />
                <Route path="/soda" element={<Soda />} />
                <Route path="/dental" element={<Dental />} />
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
