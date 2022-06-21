
let boolBtnList = false;
function textDoctupe() {
    const textListNode = document.querySelector('.list--text');
    if (boolBtnList) {
        textListNode.classList.add('text--doctupe');
        boolBtnList = !boolBtnList;
    } else {
        textListNode.classList.remove('text--doctupe');
        boolBtnList = !boolBtnList;
    }
}