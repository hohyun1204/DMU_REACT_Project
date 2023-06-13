import 'pages/Login/Login.css';
import { useDispatch, useSelector } from 'react-redux'
import { LoginAction } from 'modules/userReducer';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CheckNumber } from 'utils/UserKeyPress/CheckNumber';
import { EnterPress } from 'utils/UserKeyPress/EnterPress';

function Login(){
    const { users } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogin = (e) => {
        e.preventDefault()

        const id = e.target.id
        const pw = e.target.pw

        if (users.findIndex(it => it.id === id.value) < 0) {
            alert("아이디가 존재하지 않습니다.")
            id.focus()
            return
        }
        if (users.findIndex(it => it.password === pw.value) < 0) {
            alert("비밀번호가 일치하지 않습니다.")
            pw.focus()
            return
        }

        dispatch(LoginAction(id.value.trim()))
        navigate('/')
    }

    return(
        <div class="user_box">
            <form onSubmit={onLogin}>
                <input class="input_box text" type="text" name="id" onKeyUp={CheckNumber} onKeyDown={EnterPress} maxLength={8} placeholder='학번'></input>
                <input class="input_box text" type="password" id="pw" name="pw" maxLength={16} placeholder='비밀번호'></input>
                <input class="input_box submit" type="submit" value="로그인"></input>
                {/* <label for="check" class="login_check">
                    <input class="checkbox" type="checkbox" id="check" name="keeplogin" value="keep"></input>
                    <i class="circle"></i>
                    <span class="keep_text">자동 로그인</span>
                </label> */}
                <div class="login_help">
                    {/* <Link to="/findpw" class="link"><span class="help_text">비밀번호 찾기</span></Link> */}
                    <span class="help_text pointer" onClick={()=>{
                        alert("준비중입니다.")
                    }}>비밀번호 찾기</span>
                    <span class="help_text separate">|</span>
                    <Link to="/join" class="link"><span class="help_text">회원가입 </span></Link>
                </div>
            </form>
        </div>
    );
}

export default Login;