import { Routes, Route } from 'react-router-dom';
import 'App.css';
import Main from 'pages/Main/Main';
import UserLayout from 'components/User/UserLayout';
import Login from 'pages/Login/Login';
import Join from 'pages/Join/Join';
import FindPW from 'pages/FindPW/FindPW';
import CheckEmailCode from 'pages/CheckEmailCode/CheckEmailCode';
import ChangePW from 'pages/ChangePW/ChangePW';

function App() {
  return (
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<UserLayout><Login /></UserLayout>} />
        <Route path="/join" element={<UserLayout><Join /></UserLayout>} />
        <Route path="/findpw" element={<UserLayout><FindPW /></UserLayout>} />
        <Route path="/checkemail" element={<UserLayout><CheckEmailCode /></UserLayout>} />
        <Route path="/changepw" element={<UserLayout><ChangePW /></UserLayout>} />
      </Routes>
  );
}

export default App;
