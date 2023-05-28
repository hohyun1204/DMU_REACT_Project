import 'pages/Login/Login.css';
import { Link } from 'react-router-dom';
import { CheckNumber } from 'utils/UserKeyPress/CheckNumber';
import { EnterPress } from 'utils/UserKeyPress/EnterPress';

function Login(){
    return(
        <div class="user_box">
            <form>
                <input class="input_box text" type="text" name="id" onKeyUp={CheckNumber} onKeyDown={EnterPress} maxLength={8} placeholder='학번'></input>
                <input class="input_box text" type="password" id="pw" name="pw" placeholder='비밀번호'></input>
                <input class="input_box submit" type="submit" value="로그인"></input>
                <label for="check" class="login_check">
                    <input class="checkbox" type="checkbox" id="check" name="keeplogin" value="keep"></input>
                    <i class="circle"></i>
                    <span class="keep_text">자동 로그인</span>
                </label>
                <div class="login_help">
                    <Link to="/findpw" class="link"><span class="help_text">비밀번호 찾기</span></Link>
                     <span class="help_text separate">|</span>
                    <Link to="/join" class="link"><span class="help_text">회원가입 </span></Link>
                </div>
            </form>
        </div>
    );
}

export default Login;