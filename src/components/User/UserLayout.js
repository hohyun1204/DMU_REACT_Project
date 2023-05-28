import "components/User/UserLayout.css"
import logo from 'assets/images/logo.png'
import { Link } from "react-router-dom";

export default function UserLayout({children}){
    return(
        <div class="user_wrap">
            <Link to="/"><img class="user_img" src={logo} alt="로고 이미지"></img></Link>
            {children}
        </div>
    );
}