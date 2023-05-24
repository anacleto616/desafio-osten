import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='/new'/>
          <Route path='/edit/:id' />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}