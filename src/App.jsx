import { Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import Headerbar from './components/Headerbar';

export default function App() {
  return (
    <>
      <Headerbar />
      <Routes>
        <Route
          path="/menu"
          element={<Menu />}
        />
      </Routes>
    </>
  );
}
