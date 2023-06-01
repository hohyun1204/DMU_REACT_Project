import "pages/CheckEmailCode/CheckEmailCode.css"
import { CheckNumber } from 'utils/UserKeyPress/CheckNumber';
import { EnterPress } from 'utils/UserKeyPress/EnterPress';

function CheckEmailCode(){
    return(
        <div class="user_box">
            <span class="user_title">
                <font class="title_font">tasdasdadwd****@examp.com</font>으로<br/>
                전송된 인증번호를 입력해주세요.
            </span>
            <form>
                <input class="input_box text" type="text" name="id" onKeyUp={CheckNumber} onKeyDown={EnterPress} maxLength={6} placeholder='인증번호 6자리(xxxxxx)'></input>
                <input class="input_box submit" type="submit" value="인증번호 확인"></input>
            </form>
        </div>
    );
}

export default CheckEmailCode