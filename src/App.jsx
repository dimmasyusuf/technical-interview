
import { Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import Headerbar from './components/Headerbar';
import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <>
      <Headerbar />
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/menu"
          element={<Menu />}
        />
      </Routes>
    </>
  );
}
