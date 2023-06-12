import 'pages/Login/Login.css';
import { useDispatch } from 'react-redux';
import { joinAction } from 'modules/userReducer';
import { useNavigate } from 'react-router-dom';
import { CheckNumber } from 'utils/UserKeyPress/CheckNumber';
import { EnterPress } from 'utils/UserKeyPress/EnterPress';

function Join(){

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault();
        const id = e.target.id;
        const password = e.target.pw;
        const email = e.target.email;
        const name = e.target.name;

        dispatch(joinAction({
            id: id.value,
            password: password.value,
            email: email.value,
            name: name.value
        }))

        navigate('/login')

    }

    return(
        <div class="user_box">
            <form id="join_frm" onSubmit={onSubmit}>
                <input class="input_box text" type="text" name="name" placeholder='닉네임'></input>
                <input class="input_box text" type="text" name="id" onKeyUp={CheckNumber} onKeyDown={EnterPress} maxLength={8} placeholder='학번'></input>
                <input class="input_box text" type="password" id="pw" name="pw" placeholder='비밀번호'></input>
                <input class="input_box text" type="email" id="email" name="email" placeholder='비밀번호 분실 시 확인용 이메일'></input> 
                <input class="input_box submit" type="submit" value="회원가입"></input>
            </form>
        </div>
    );
}

export default Join