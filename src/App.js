import { Routes, Route } from 'react-router-dom';
import 'App.css';
import Main from 'pages/Main/Main';
import Login from 'pages/Login/Login';


function App() {
  return (
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
