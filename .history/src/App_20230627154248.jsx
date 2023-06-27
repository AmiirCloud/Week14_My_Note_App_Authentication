import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import EditNote from "./components/EditNote";
import { Routes, Route } from "react-router-dom";
import Login from "./components/users/Login";
import Navigation from "./components/Navigation/Navigation";

function App() {

  return (
    <div className="bg-blue-600 min-h-screen flex">
     
          <h3 className="text-3xl text-white mb-5 mt-5"></h3>
            <Navigation/>
          <Routes>
          {window.location.pathname === "/" && (
            <Route path="/" element={<AddNote />} />
          ) } else {
            <Route path="/edit/:id" element={<EditNote />} />
          }
          <Route path="/login"element={<Login/> }></Route>
          </Routes>

          <Notes />
     
    </div>
  );
}

export default App;