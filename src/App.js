import { Route, Routes } from "react-router";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Items, Sales, Reports } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
}

export default App;
