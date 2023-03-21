import { BrowserRouter, Route, Routes } from "react-router-dom";
import HabitPage from "./pages/HabitPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TodayPage from "./pages/TodayPage";
import HistoryPage from "./pages/HistoryPage";
import { useState } from "react";
import { UserContext } from "./cotexts/UserContext";
import { ProgressContext } from "./cotexts/ProgressContext";

function App() {
  const [user, setUser] = useState(undefined);
  const [progress, setProgress] = useState(0);

  return (
    <ProgressContext.Provider value={{progress:progress,setProgress:setProgress}}>
      <UserContext.Provider value={{user:user, setUser: setUser}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<RegisterPage />} />
            <Route path="/habitos" element={<HabitPage />} />
            <Route path="/hoje" element={<TodayPage setProgress={setProgress} />} />
            <Route path="/historico" element={<HistoryPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ProgressContext.Provider>
  );
}

export default App;
