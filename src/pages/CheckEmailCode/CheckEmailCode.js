import "pages/ChangeEmailCode/ChangeEmailCode.css"
import { CheckNumber } from 'utils/UserKeyPress/CheckNumber';
import { EnterPress } from 'utils/UserKeyPress/EnterPress';

function ChangeEmailCode(){
    return(
        <div class="user_box">
            <span class="user_title">
                <font class="title_font">비밀번호</font>를 찾고자 하는&nbsp;
                <font class="title_font">아이디</font>를 입력해주세요.
            </span>
            <form>
                <input class="input_box text" type="text" name="id" onKeyUp={CheckNumber} onKeyDown={EnterPress} maxLength={8} placeholder='학번'></input>
                <input class="input_box submit" type="submit" value="비밀번호 찾기"></input>
            </form>
        </div>
    );
}

export default ChangeEmailCode