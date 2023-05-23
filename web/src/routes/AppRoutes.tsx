import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/'/>
          <Route path='/new'/>
          <Route path='/edit/:id' />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}