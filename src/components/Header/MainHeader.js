import 'components/Header/MainHeader.css'
import logo from 'assets/images/logo.png'
import search from 'assets/images/search.png'
import write from 'assets/images/write.png'
import user from 'assets/images/user.png'
import logout from 'assets/images/logout.png'
import { Link } from 'react-router-dom'

function MainHeader(){
    return(
        <div class="header">
            <div class="logo">
                <Link to="/"><img class="logo_img" src={logo} alt="로고 이미지"></img></Link>
                <div class="logo_title">
                    <span class="name">강의어때</span>
                    <span class="sub_name">동양미래대</span>
                </div>
            </div>
            <ul class="menu">
                <li>
                    <Link to="/search"><img class="menu_img" src={search} alt="검색 이미지"></img></Link>
                </li>
                <li>
                    <Link to="/write"><img class="menu_img" src={write} alt="작성 이미지"></img></Link>
                </li>
                <li>
                    {/* 로그인 안했으면 로그인 페이지로 이동하는 아이콘 */}
                    <Link to="/login"><img class="menu_img" src={user} alt="유저 이미지"></img></Link>
                    {/* 로그인 했으면 로그아웃 페이지로 이동하는 아콘 */}
                    {/* <Link to="/logout"><img class="menu_img" src={logout} alt="로그아웃"></img></Link> */}
                </li>
            </ul>
        </div>
    );
}

export default MainHeader;