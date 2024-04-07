import Metrics from "./components/Metrics";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Songs from "./components/Songs";
import Users from "./components/Users";
import "./scss/Styles.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="dashboard">
              <Sidebar />
              <Metrics />
            </div>
          }
        />
        <Route
          path="/songs"
          element={
            <div className="dashboard">
              <Sidebar />
              <Songs />
            </div>
          }
        />
        <Route path="/users"
        element={
          <div className="dashboard">
              <Sidebar />
              <Users />
            </div>

        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
