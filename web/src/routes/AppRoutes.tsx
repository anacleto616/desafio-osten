import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NewCompany from "../pages/NewCompany";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='/new' element={<NewCompany />}/>
          <Route path='/edit/:id' />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}