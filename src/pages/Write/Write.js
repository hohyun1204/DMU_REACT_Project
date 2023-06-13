import "pages/Write/Write.css"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { writeAction } from "modules/boardReducer";

function Write(){
    const info_text = "강의어때는 강의에 대한 평가를 남길 수 있는 사이트입니다.\n이 외에 게시물이나 심한 비방이 담긴 게시물은 삭제됩니다.";
    const { users } = useSelector(state => state.userReducer)
    const { login_id } = useSelector(state => state.userReducer)
    const { lastId } = useSelector(state => state.boardReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onWrite = (e) => {
        e.preventDefault();

        const lecture = e.target.lecture;
        const professor = e.target.professor;
        const content = e.target.content;
        const anonymous = e.target.anonymous;
        let name = users[users.findIndex(it => it.id === login_id)].name;

        let today = new Date();
        let year = today.getFullYear()
        year = year.toString().slice(2, 4)
        let month = today.getMonth()
        if(month < 10) {
            month = "0" + month
        }
        let day = today.getDay()
        if(day < 10) {
            day = "0" + day
        }
        let hours = today.getHours();
        if(hours < 10) {
            hours = "0" + hours
        }
        let minutes = today.getMinutes();
        if(minutes < 10) {
            minutes = "0" + minutes
        }

        let date = year + "/" + month + "/" + day + " " + hours + ":" + minutes

        if(!lecture.value.trim()) {
            alert('강의명을 입력해주세요')
            lecture.focus()
            return
        }
        if(!professor.value.trim()) {
            alert('교수님 성함을 입력해주세요')
            professor.focus()
            return
        }
        if(!content.value.trim()) {
            alert('내용을 입력해주세요')
            content.focus()
            return
        }
        if(anonymous.checked) {
            name = '익명'
        }
        
        if(window.confirm('작성하시겠습니까?')) {
            dispatch(writeAction({
                id: lastId + 1,
                userid: login_id,
                name: name,
                lecture: lecture.value.trim(),
                professor: professor.value.trim(),
                content: content.value,
                date: date
            }))
            navigate('/')
        }
    }

    return(
        <div class="write_wrap">
            <div class="write_box">
                <form onSubmit={onWrite}>
                    <div class="write_header">
                        <input type="text" class="write_lecture" name="lecture" placeholder="강의명"></input>
                        <input type="text" class="write_professor" name="professor" placeholder="교수님 성함(성함만 적어주세요)"></input>
                    </div>
                    <div class="write_container">
                        <textarea class="write_section" name="content" placeholder={info_text}></textarea>
                        <div class="write_footer">
                            <label for="anonymous" class="anonymous_check">
                                <input class="checkbox" type="checkbox" id="anonymous" name="anonymous" value="anonymous"></input>
                                <i class="circle"></i>
                                <span class="anonymous_text">익명</span>
                            </label>
                            <input class="write_submit" type="submit" value="작성"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Write;