import "pages/Write/Write.css"

function Write(){
    const info_text = "강의어때는 강의에 대한 평가를 남길 수 있는 사이트입니다.\n이 외에 게시물이나 심한 비방이 담긴 게시물은 삭제됩니다.";
    return(
        <div class="write_wrap">
            <div class="write_box">
                <form>
                    <div class="write_header">
                        <input type="text" class="write_lecture" placeholder="강의 이름"></input>
                        <input type="text" class="write_professor" placeholder="교수님 성함(성함만 적어주세요)"></input>
                    </div>
                    <div class="write_container">
                        <textarea class="write_section" placeholder={info_text}></textarea>
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