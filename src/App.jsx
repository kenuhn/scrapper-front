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

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const userId = decodeToken();
    console.log("user_id", userId.userId);
    if (userId) {
      setIsAuth(true);
    }
  }, []);
  return (
    <>
      <authContext.Provider value={{ isAuth: isAuth, setIsAuth: setIsAuth }}>
        <crawlContext.Provider value={{ search: search, setSearch: setSearch }}>
          <Outlet />
        </crawlContext.Provider>
      </authContext.Provider>

      {isAuth && <Sidebar />}
    </>
  );
}

export default App;
