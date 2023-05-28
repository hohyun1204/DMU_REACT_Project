export const CheckNumber = (e) => { // 학번 입력 시 유효성 검사
    // 숫자 이외에 제거
    const regExp = /[^0-9]/g;
    const ele = e.target;
    if (regExp.test(ele.value)) {
        ele.value = ele.value.replace(regExp, '');
    } 
}