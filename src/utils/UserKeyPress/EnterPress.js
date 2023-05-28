export const EnterPress = (e) => {
    if(e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("pw").focus();
    }
}