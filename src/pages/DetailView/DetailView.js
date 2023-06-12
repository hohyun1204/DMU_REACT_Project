import { Link, useLocation } from "react-router-dom";
import "pages/DetailView/DetailView.css"
import user from 'assets/images/user2.png'
import like from "assets/images/like.png"
import comment from "assets/images/comment.png"

function DetailView(){
    const location = useLocation();
    return(
        <div class="detailview_wrap">
            {/* {location.state?.id}번 글 상세보기 */}
            <div class="detailview_container">
                <div class="detailview_box">
                    <div class="detailview_header">
                        <img class="detailview_userimg" src={user} alt="사용자 이미지" /> 
                        <div class="detailview_info">
                            <span class="detailview_name">익명</span>
                            <span class="detailview_time">3분 전</span>
                        </div>
                        <div class="detailview_option">
                            <Link to="/" class="link link_separate"><span class="option_text">수정</span></Link>
                            <Link to="/" class="link"><span class="option_text">삭제</span></Link>
                        </div>
                    </div>
                    <div class="detailview_section">
                        <div class="detailview_lecture">
                            웹 클라이언트 프로그래밍
                        </div>
                        <div class="detailview_content">
                            ㅏ아아아아<br/>
                            ㅏ아아아아<br/>
                            ㅏ아아아아<br/>
                            ㅏ아아아아<br/>
                        </div>
                    </div>
                    <div class="detailview_footer">
                        <div class="detailview_status">
                            <span class="detailview_like"><img class="detailview_img" src={like} alt="좋아요 이미지"/> 4</span>
                            <span class="detailview_comment"><img class="detailview_img" src={comment} alt="말풍선 이미지"/> 6</span>
                        </div>
                        <span class="deatilview_button"><img class="detailview_img" src={like} alt="좋아요 이미지"/> 추천</span>
                    </div>
                </div>
                <div class="detailview_commentbox">
                    <div class="comment_header">
                        <img class="comment_userimg" src={user} alt="사용자 이미지" />
                        <span class="comment_name">익명1</span>
                        <div class="comment_option">
                            <Link to="/" class="link"><span class="option_text">삭제</span></Link>
                        </div>
                    </div>
                    <div class="comment_section">
                        <span class="comment_text">아아아아아</span>
                    </div>
                    <div class="comment_footer">
                        <span class="comment_time">1분 전</span>
                    </div>
                </div>
                <div class="detailview_commentbox">
                    <div class="comment_header">
                        <img class="comment_userimg" src={user} alt="사용자 이미지" />
                        <span class="comment_name">익명2</span>
                        <div class="comment_option">
                            <Link to="/" class="link"><span class="option_text">삭제</span></Link>
                        </div>
                    </div>
                    <div class="comment_section">
                        <span class="comment_text">아아아아아<br/>ㅁㄴㅇ</span>
                    </div>
                    <div class="comment_footer">
                        <span class="comment_time">3분 전</span>
                    </div>
                </div>
                <div class="detailview_writebox">
                    <form>
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
            <div class="link_box">

            </div>
        </div>
    );
}

export default DetailView