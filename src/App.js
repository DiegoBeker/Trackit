import { BrowserRouter, Route, Routes } from "react-router-dom";
import HabitPage from "./pages/HabitPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"
import TodayPage from "./pages/TodayPage";
import HistoryPage from "./pages/HistoryPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage/>} />
        <Route path="/habitos" element={<HabitPage/>}/>
        <Route path="/hoje" element={<TodayPage/>} />
        <Route path="/historico" element={<HistoryPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
