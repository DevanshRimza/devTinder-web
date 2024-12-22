import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";

// Function to check authentication
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null; // Replace with your logic
};

function App() {
  // State to track authentication changes
  const [auth, setAuth] = useState(isAuthenticated());

  useEffect(() => {
    // Listen for storage changes (useful for multi-tabs)
    const handleStorageChange = () => {
      setAuth(isAuthenticated());
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          {/* Login Page */}
          <Route
            path="/login"
            element={auth ? <Navigate to="/profile" /> : <Login setAuth={setAuth} />}
          />

          {/* Protected Routes */}
          <Route
            path="/"
            element={auth ? <Body /> : <Navigate to="/login" />}
          >
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to={auth ? "/profile" : "/login"} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
