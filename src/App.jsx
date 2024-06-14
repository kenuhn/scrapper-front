import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./componnent/sidebar/sidebar";
import { decodeToken } from "./service/decodeToken";
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext({
  isAuth: false,
  setIsAuth: () => {},
});
// eslint-disable-next-line react-refresh/only-export-components
export const crawlContext = createContext({
  search: [],
  setSearch: () => {},
});

export const tokenContext = createContext({
  token: "",
  setToken: () => {},
});

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [search, setSearch] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const userId = decodeToken();
    if (userId) {
      setToken(userId);
      setIsAuth(true);
    } else {
      setToken(null);
    }
  }, []);
  return (
    <>
      <tokenContext.Provider value={{ token: token, setToken: setToken }}>
        <authContext.Provider value={{ isAuth: isAuth, setIsAuth: setIsAuth }}>
          <crawlContext.Provider
            value={{ search: search, setSearch: setSearch }}
          >
            <Outlet />
          </crawlContext.Provider>
        </authContext.Provider>
      </tokenContext.Provider>

      {isAuth && <Sidebar />}
    </>
  );
}

export default App;
