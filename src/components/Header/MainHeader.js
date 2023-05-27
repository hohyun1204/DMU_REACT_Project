import 'components/Header/MainHeader.css'
import logo from 'assets/images/logo.png'

function MainHeader(){
    return(
        <div class="header">
            <img class="logo_img" src={logo}></img>
            <div class="logo_title">
                <span class="name">강의어때</span>
                <span class="sub_name">동양미래대</span>
            </div>
        </div>
    );
}

export default MainHeader;