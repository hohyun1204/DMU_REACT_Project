import 'pages/Login/Login.css';
import logo from 'assets/images/logo.png'
import { Link } from 'react-router-dom';

function Login(){
    return(
        <div class="login">
            <Link to="/"><img class="login_img" src={logo}></img></Link>
            <div class="login_box">
                <form>
                </form>
            </div>
        </div>
    );
}

export default Login;