import { Routes, Route } from 'react-router-dom';
import 'App.css';
import { useState } from 'react';
import Main from 'pages/Main/Main';
import UserLayout from 'components/User/UserLayout';
import Login from 'pages/Login/Login';
import Join from 'pages/Join/Join';
import FindPW from 'pages/FindPW/FindPW';
import CheckEmailCode from 'pages/CheckEmailCode/CheckEmailCode';
import ChangePW from 'pages/ChangePW/ChangePW';

function App() {
  const [user, setUser] = useState([
    {id: 20201569, pw: 'qwer1234', name: '호현', email: 'hohyun1204@naver.com'}
  ])
  const [id, setId] = useState(null)
  const [nextId, setNextId] = useState(2);
  const [post, setPost] = useState([
    {id: 1, userid: 20201569, lecture: '웹 클라이언트 프로그래밍', professor: '오영재', like: 0, comment: 0}
  ])
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
