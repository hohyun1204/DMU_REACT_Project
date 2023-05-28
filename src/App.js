import { Routes, Route } from 'react-router-dom';
import 'App.css';
import Main from 'pages/Main/Main';
import Login from 'pages/Login/Login';
import Join from 'pages/Join/Join';
import FindPW from 'pages/FindPW/FindPW';
import UserLayout from 'components/User/UserLayout';


function App() {
  return (
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<UserLayout><Login /></UserLayout>} />
        <Route path="/findpw" element={<UserLayout><FindPW /></UserLayout>} />
        <Route path="/join" element={<UserLayout><Join /></UserLayout>} />
      </Routes>
  );
}

export default App;
