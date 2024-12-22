import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";

// Example function for authentication check
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null; // Replace with your actual authentication logic
};

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          {/* Login Route */}
          <Route
            path="/login"
            element={
              isAuthenticated() ? <Navigate to="/feed" /> : <Login />
            }
          />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              isAuthenticated() ? <Body /> : <Navigate to="/login" />
            }
          >
            <Route path="feed" element={<Feed />} />
            <Route path="profile" element={<Profile />} />
            <Route path="connections" element={<Connections />} />
            <Route path="requests" element={<Requests />} />
          </Route>

          {/* Catch-All Route */}
          <Route
            path="*"
            element={
              isAuthenticated() ? (
                <Navigate to="/feed" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
