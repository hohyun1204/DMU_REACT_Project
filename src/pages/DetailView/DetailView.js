import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import "pages/DetailView/DetailView.css"
import user from 'assets/images/user2.png'
import like_img from "assets/images/like.png"
import comment from "assets/images/comment.png"
import { likeAction, deleteAction, updateAction } from "modules/boardReducer";
import univ_img from "assets/images/univ_logo.svg"
import { useState } from "react";

function Update(props) {
    const info_text = "강의어때는 강의에 대한 평가를 남길 수 있는 사이트입니다.\n이 외에 게시물이나 심한 비방이 담긴 게시물은 삭제됩니다.";
    const [id] = useState(props.id)
    const [userid] = useState(props.userid)
    const [name] = useState(props.name)
    const [lecture, setLecture] = useState(props.lecture)
    const [professor, setProfessor] = useState(props.professor)
    const [content, setContent] = useState(props.content)
    const [like] = useState(props.like)
    const [comment] = useState(props.comment)
    const [date] = useState(props.date)
    return (
        <div class="detailview_section">
            <form id="board_frm" onSubmit={(e)=>{
                e.preventDefault()
                if(lecture.trim().length < 1) {
                    alert("강의명을 입력해주세요.")
                    e.target.lecture.focus()
                    return
                }
                if(professor.trim().length < 1) {
                    alert("교수님 성함을 입력해주세요.")
                    e.target.professor.focus()
                    return
                }
                if(content.trim().length < 1) {
                    alert("내용을 입력해주세요.")
                    e.target.content.focus()
                    return
                }
                props.onUpdate(id, userid, name, lecture, professor, content, like, comment, date)
            }}>
                <div class="detailview_lecture">
                    <input class="update_input update_lecture" type="text" name="lecture" value={lecture} placeholder="강의명" onChange={event=>{
                      setLecture(event.target.value)  
                    }}/>
                    <input class="update_input update_professor" type="text" name="professor" value={professor} placeholder="교수님 성함(성함만 적어주세요)" onChange={event=>{
                      setProfessor(event.target.value)  
                    }}/>
                </div>
                <div class="detailview_content">
                    <textarea class="update_input update_content" name="content" placeholder={info_text} onChange={event=>{
                      setContent(event.target.value)  
                    }}>
                        {content}
                    </textarea>
                </div>
                <input class="option_text submit_button" type="submit" value="수정완료"></input>
            </form>
        </div>
    )
}

function DetailView(){
    const [mode, setMode] = useState('READ');
    const { boards } = useSelector(state => state.boardReducer)
    const { login_id } = useSelector(state => state.userReducer)
    const { viewId } = useSelector(state => state.boardReducer)
    const index = boards.findIndex(it => it.id === viewId);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [like, setLike] = useState(boards[index].like)

    const onDelete = (id) => {
        if(window.confirm('삭제하시겠습니까?')) {
            dispatch(deleteAction(id))
            navigate('/')
        }
    }

    let content = null;
    if(mode === 'READ') {
        content = 
        <div class="detailview_section">
            <div class="detailview_lecture">
                {boards[index].lecture}
                <span>{boards[index].professor} 교수님</span>
            </div>
            <div class="detailview_content">
                <pre>
                    {boards[index].content}
                </pre>
            </div>
        </div>
    } else {
        content = <Update id={boards[index].id} userid={boards[index].userid} name={boards[index].name} lecture={boards[index].lecture} professor={boards[index].professor} 
        content={boards[index].content} like={like} comment={boards[index].comment} date={boards[index].date} 
        onUpdate={(id, userid, name, lecture, professor, content, like, comment, date)=>{
            if(window.confirm('수정하시겠습니까')){
                dispatch(updateAction({
                    id: id,
                    userid: userid,
                    name: name,
                    lecture: lecture,
                    professor: professor,
                    content: content,
                    like: like,
                    comment: comment,
                    date: date
                }))
                setMode('READ')
            }
        }}
        ></Update>
    }

    let option = '';

    if(login_id === boards[index].userid) {
        option = <div class="detailview_option">
                    <span class="option_text pointer link_separate" onClick={()=>{setMode('UPDATE')}}>수정</span>
                    <span class="option_text pointer" onClick={()=>{onDelete(viewId)}}>삭제</span>
                </div>
    }
    if(login_id === boards[index].userid && mode === 'UPDATE') {
        option = <div class="detailview_option">
                    {/* <span class="option_text pointer link_separate">수정완료</span> */}
                    <span class="option_text pointer" onClick={()=>{setMode('READ')}}>취소</span>
                </div>
    }
    const click_like = () => {
        if(!!login_id) {
            dispatch(likeAction({
                boardid: boards[index].id,
                userid: login_id,
                index: index
            }))
            setLike(like + 1)
        } else {
            alert("로그인이 필요한 서비스입니다.\n로그인 페이지로 이동합니다.")
            navigate('/login')
        }
    }

    const onComment = (e) => {
        e.preventDefault()
        alert("준비중입니다.")
    }

    return(
        <div class="detailview_wrap">
            <div class="detailview_container">
                <div class="detailview_box">
                    <div class="detailview_header">
                        <img class="detailview_userimg" src={user} alt="사용자 이미지" /> 
                        <div class="detailview_info">
                            <span class="detailview_name">{boards[index].name}</span>
                            <span class="detailview_time">{boards[index].date}</span>
                        </div>
                        {option}
                    </div>
                    {content}
                    <div class="detailview_footer">
                        <div class="detailview_status">
                            <span class="detailview_like"><img class="detailview_img" src={like_img} alt="좋아요 이미지"/> {boards[index].like}</span>
                            <span class="detailview_comment"><img class="detailview_img" src={comment} alt="말풍선 이미지"/> {boards[index].comment}</span>
                        </div>
                        <span class="deatilview_button" onClick={()=>{click_like()}}><img class="detailview_img" src={like_img} alt="좋아요 이미지"/> 추천</span>
                    </div>
                </div>
                <div class="detailview_commentbox">
                    <div class="comment_header">
                        <img class="comment_userimg" src={user} alt="사용자 이미지" />
                        <span class="comment_name">익명1</span>
                        {/* <div class="comment_option">
                            <Link to="/" class="link"><span class="option_text">삭제</span></Link>
                        </div> */}
                    </div>
                    <div class="comment_section">
                        <span class="comment_text">테스트 댓글입니다.</span>
                    </div>
                    <div class="comment_footer">
                        <span class="comment_time">1분 전</span>
                    </div>
                </div>
                <div class="detailview_writebox">
                    <form onSubmit={onComment}>
                        <input type="text" class="write_input" placeholder="댓글을 입력하세요."/>
                        <label for="anonymous" class="anonymous_check">
                            <input class="checkbox" type="checkbox" id="anonymous" name="anonymous" value="anonymous"></input>
                            <i class="circle"></i>
                            <span class="anonymous_text">익명</span>
                        </label>
                        <input class="write_button" type="submit" value="작성"></input>
                    </form>
                </div>
            </div>
            <div class="link_box pointer" onClick={()=>{
                window.open('https://www.dongyang.ac.kr/dongyang/index.do', '_blank')
            }}>
                <img class="univ_img" src={univ_img} alt="학교로고 이미지"></img>
                <span>
                    동양미래대학교<br/>
                    홈페이지 바로가기
                </span>
            </div>
        </div>
    );
}

export default DetailView