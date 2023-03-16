import { BrowserRouter, Route, Routes } from "react-router-dom";
import HabitPage from "./pages/HabitPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"
import TodayPage from "./pages/TodayPage";
import HistoryPage from "./pages/HistoryPage"
import { useState } from "react";
import { UserContext } from "./cotexts/UserContext";

function App() {
  const [user, setUser] = useState(undefined);

  return (
    <UserContext.Provider value={user}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage setUser={setUser} />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/habitos" element={<HabitPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
