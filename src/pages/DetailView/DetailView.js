import { useLocation } from "react-router-dom";

function DetailView(){
    const location = useLocation();
    return(
        <div>
            {location.state?.id}번 글 상세보기
        </div>
    );
}

export default DetailView