import "pages/ChangePW/ChangePW.css"

function ChangePW(){
    return(
        <div class="user_box">
            <span class="user_title">
                <font class="title_font">비밀번호</font>를 변경해주세요.
            </span>
            <form>
                <input class="input_box text" type="password" name="pw" placeholder='새 비밀번호'></input>
                <input class="input_box submit" type="submit" value="비밀번호 변경"></input>
            </form>
        </div>
    );
}

export default ChangePW