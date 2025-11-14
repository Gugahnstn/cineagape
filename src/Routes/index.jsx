import { BrowserRouter, Routes, Route} from "react-router-dom";
import Register  from "../pages/Register";
import Home from "../pages/Home";

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Home/>} />
                <Route  path="/inscricao" element={<Register/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesComponent;