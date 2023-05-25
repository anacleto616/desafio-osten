import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import DetailsCompany from "../pages/DetailsCompany";
import Home from "../pages/Home";
import NewCompany from "../pages/NewCompany";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='/details/:id' element={<DetailsCompany />}/>
          <Route path='/new' element={<NewCompany />}/>
          <Route path='/edit/:id' />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}