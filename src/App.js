import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import "..//node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin-2.css";
import "./fontawesome-free/css/all.css";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import User from "./User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserCreate from "./UserCreate";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";


function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/user" element={<User/>}></Route>
            <Route path="/userCreate" element={<UserCreate/>}></Route>
            <Route path="/user/:id" element={<ViewUser/>}></Route>
            <Route path="/edit/:id" element={<EditUser/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
