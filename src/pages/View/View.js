import "pages/View/View.css"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import like from "assets/images/like.png"
import comment from "assets/images/comment.png"
import { viewAction } from "modules/boardReducer";
import univ_img from "assets/images/univ_logo.svg"

function View(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { boards } = useSelector(state => state.boardReducer)
    const reverse = [...boards].reverse();

    const showDetailView = (id) => {
        dispatch(viewAction(id))
        navigate('/view')
    }

    return(
        <div class="view_wrap">
            <div class="view_container">
                {
                    boards.length < 1 ? 
                        <div class="view_box nosearch">
                            글이 존재하지 않습니다.
                        </div>
                        : reverse.map(rowData => (
                            rowData.id !== '' &&
                        <div class="view_box" onClick={() => showDetailView(rowData.id)}>
                            <div class="view_header">
                                <span class="view_lecture">{rowData.lecture}</span>
                                <span class="view_professor">{rowData.professor} 교수님</span>
                            </div>
                            <div class="view_content">
                                <span><pre>{rowData.content}</pre></span>
                            </div>
                            <div class="view_footer">
                                <span class="view_time">{rowData.date}</span>
                                <span class="view_name">{rowData.name}</span>
                                <div class="view_status">
                                    <span class="view_like"><img class="view_img" src={like} alt="좋아요 이미지"/> {rowData.like}</span>
                                    <span class="view_comment"><img class="view_img" src={comment} alt="말풍선 이미지"/> {rowData.comment}</span>
                                </div>
                            </div>
                        </div>
                        ))
                }
                {/* <div class="view_page">
                    <div class="view_page_button first">
                        처음
                    </div>
                    <div class="view_page_button prev">
                        이전
                    </div>
                    <div class="view_page_button next">
                        다음
                    </div>
                </div> */}
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

export default View;