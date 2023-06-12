import "pages/View/View.css"
import { useNavigate } from "react-router-dom";
import like from "assets/images/like.png"
import comment from "assets/images/comment.png"

function View(){
    const navigate = useNavigate();

    const showDetailView = (id) => {
        navigate('/view', {
            state: {
                id: id
            }
        })
    }

    return(
        <div class="view_wrap">
            <div class="view_container">
                <div class="view_box" onClick={() => showDetailView('1')}>
                    <div class="view_header">
                        <span class="view_lecture">웹 클라이언트 프로그래밍</span>
                        <span class="view_professor">오영재 교수님</span>
                    </div>
                    <div class="view_content">
                        <span>강의가 완전 유익해요!!<br/>교수님이 친절하세요!<br/>asd</span>
                    </div>
                    <div class="view_footer">
                        <span class="view_time">8분 전</span>
                        <span class="view_name">익명</span>
                        <div class="view_status">
                            <span class="view_like"><img class="view_img" src={like} alt="좋아요 이미지"/> 4</span>
                            <span class="view_comment"><img class="view_img" src={comment} alt="말풍선 이미지"/> 6</span>
                        </div>
                    </div>
                </div>
                <div class="view_box" onClick={() => showDetailView('2')}>
                    <div class="view_header">
                        <span class="view_lecture">웹 클라이언트 프로그래밍</span>
                        <span class="view_professor">오영재 교수님</span>
                    </div>
                    <div class="view_content">
                        <span>강의가 완전 유익해요!!</span>
                    </div>
                    <div class="view_footer">
                        <span class="view_time">8분 전</span>
                        <span class="view_name">상남자</span>
                        <div class="view_status">
                            <span class="view_like"><img class="view_img" src={like} alt="좋아요 이미지"/> 11</span>
                            <span class="view_comment"><img class="view_img" src={comment} alt="말풍선 이미지"/> 32</span>
                        </div>
                    </div>
                </div>
                <div class="view_box nosearch">
                    검색 결과가 없습니다.
                </div>
                <div class="view_page">
                    <div class="view_page_button first">
                        처음
                    </div>
                    <div class="view_page_button prev">
                        이전
                    </div>
                    <div class="view_page_button next">
                        다음
                    </div>
                </div>
            </div>
            <div class="link_box">
                <span>
                    동양미래대학교<br/>
                    홈페이지 바로가기
                </span>
            </div>
        </div>
    );
}

export default View;