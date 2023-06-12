import 'components/Header/MainHeader.css'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutAction } from 'modules/userReducer';
import { useNavigate } from 'react-router-dom';
import logo from 'assets/images/logo.png'
import search from 'assets/images/search.png'
import write from 'assets/images/write.png'
import user from 'assets/images/user.png'
import logout from 'assets/images/logout.png'
import { Link } from 'react-router-dom'

function MainHeader(){
    const { login_id } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogout = () => {
        dispatch(LogoutAction())
        navigate('/')
    }

    let login = null;
    if(!!login_id) { // 로그인 상태
        login = <img class="menu_img" src={logout} alt="로그아웃" onClick={()=>{
            onLogout()
        }}></img>
    } else { // 비로그인 상태
        login = <Link to="/login"><img class="menu_img" src={user} alt="유저 이미지"></img></Link>
    }
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
                    <img class="menu_img" src={write} alt="작성 이미지" onClick={()=>{
                        if(!!login_id) {
                            navigate('/write')
                        } else {
                            alert("로그인이 필요한 서비스입니다.\n로그인 페이지로 이동합니다.")
                            navigate('/login')
                        }
                    }}></img>
                </li>
                <li>
                    {login}
                </li>
            </ul>
        </div>
    );
}

export default MainHeader;