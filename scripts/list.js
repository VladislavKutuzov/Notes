const textListNode = document.querySelector('.list--text');
let boolBtnList = false;

function textDoctupe() {
    const listInnerNode = document.querySelector('.list__inner');
    const listNode = document.querySelector('.list');
    const inputNode = document.querySelector('.list--text');

    listInnerNode.classList.add('editing__inner');
    listNode.classList.add('editing');
    inputNode.classList.remove('text--doctupe');
}