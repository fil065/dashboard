import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/DashBoard";
import Todo from "./components/pages/Todo";
import Contacts from "./components/pages/Contacts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/contacts" element={<Contacts />} />
      {/* <Route path="/notes" element={<Todo />} /> */}
      {/* <Route path="/weather" element={<Todo />} /> */}
      {/* <Route path="/music" element={<Todo />} /> */}
      {/* <Route path="/calendar" element={<Todo />} /> */}
      {/* <Route path="/chat" element={<Todo />} /> */}
      {/* <Route path="/crypto" element={<Todo />} /> */}
    </Routes>
  );
}

export default App;
