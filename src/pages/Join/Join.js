import 'pages/Login/Login.css';
import { CheckNumber } from 'utils/UserKeyPress/CheckNumber';
import { EnterPress } from 'utils/UserKeyPress/EnterPress';

const JoinAction = (e) => {
    e.preventDefault();
    let id = e.target.id;
    let pw = e.target.pw;
    let email = e.target.email;
    // if(id.value.length < 8) {
    //     alert('학번을 제대로 입력하세요')
    //     id.focus()
    // }

}

function Join(){
    return(
        <div class="user_box">
            <form id="join_frm" onSubmit={JoinAction}>
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