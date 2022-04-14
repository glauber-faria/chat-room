import './App.css';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import Chat from './pages/chat/chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home" />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
