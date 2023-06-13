import 'pages/Login/Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { joinAction } from 'modules/userReducer';
import { useNavigate } from 'react-router-dom';
import { CheckNumber } from 'utils/UserKeyPress/CheckNumber';
import { EnterPress } from 'utils/UserKeyPress/EnterPress';

function Join(){
    const { users } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault();
        const id = e.target.id;
        const pw = e.target.pw;
        const email = e.target.email;
        const name = e.target.name;

        if(!name.value.trim()) {
            alert("닉네임을 입력하세요.")
            name.focus()
            return
        }
        if(!id.value.trim()) {
            alert("학번을 입력하세요.")
            id.focus()
            return
        }
        if(id.value.length < 8) {
            alert("학번 8자리를 제대로 입력하세요.")
            id.focus()
            return
        }
        if(!pw.value.trim()) {
            alert("비밀번호를 입력하세요.")
            pw.focus()
            return
        }
        if(pw.value.length < 8) {
            alert("비밀번호 최소 8자리를 입력하세요.")
            pw.focus()
            return
        }
        if(!email.value.trim()) {
            alert("이메일을 입력하세요.")
            email.focus()
            return
        }
        // name이 존재한다면 0 존재하지않다면 -1 반환
        if (users.findIndex(it => it.name === name.value.trim()) >= 0) {
            alert("중복된 닉네임입니다.")
            name.focus()
            return
        }
        // id가 존재한다면 0 존재하지않다면 -1 반환
        if (users.findIndex(it => it.id === id.value.trim()) >= 0) {
            alert("중복된 학번입니다.")
            id.focus()
            return
        }

        if(window.confirm('회원가입하시겠습니까?')) {
            dispatch(joinAction({
                id: id.value.trim(),
                password: pw.value.trim(),
                email: email.value.trim(),
                name: name.value.trim()
            }))
            navigate('/login')
        }
    }

    return(
        <div class="user_box">
            <form onSubmit={onSubmit}>
                <input class="input_box text" type="text" name="name" maxLength={8} placeholder='닉네임'></input>
                <input class="input_box text" type="text" name="id" onKeyUp={CheckNumber} onKeyDown={EnterPress} maxLength={8} placeholder='학번'></input>
                <input class="input_box text" type="password" id="pw" name="pw" maxLength={16} placeholder='비밀번호'></input>
                <input class="input_box text" type="email" id="email" name="email" placeholder='비밀번호 분실 시 확인용 이메일'></input> 
                <input class="input_box submit" type="submit" value="회원가입"></input>
            </form>
        </div>
    );
}

export default Join