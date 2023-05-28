import Header from 'components/Header/MainHeader';
import Container from 'components/Container/Container';
import View from 'pages/View/View'
import Search from 'pages/Search/Search'
import Write from 'pages/Write/Write'
import MyPage from 'pages/MyPage/MyPage'
import Logout from 'pages/Logout/Logout'
import DetailView from 'pages/DetailView/DetailView'
import 'pages/Main/Main.css';
import { Routes, Route } from 'react-router-dom';

function Main(){
    return(
        <div class="wrap">
            <Header />
            <Container>
                <Routes>
                    <Route path="/search" element={<Search />} />
                    <Route path="/write" element={<Write />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/view/*" element={<DetailView />} />
                    <Route path="/*" element={<View />} />
                </Routes>
            </Container>
        </div>
    );
}

export default Main;