// const textListNode = document.querySelector('.list--text');
let boolBtnList = true;

function textDoctupe() {
    const listInnerNode = document.querySelector('.list__inner');
    const listNode = document.querySelector('.list');
    const inputNode = document.querySelector('.list--text');
    const btnDoctupeNode = document.querySelector('.list__btn');

    if (boolBtnList) {
        listInnerNode.classList.add('editing__inner');
        listNode.classList.add('editing');
        inputNode.classList.remove('text--doctupe');
        btnDoctupeNode.classList.add('list__ok');
        boolBtnList = !boolBtnList;
    } else {
        listInnerNode.classList.remove('editing__inner');
        listNode.classList.remove('editing');
        inputNode.classList.add('text--doctupe');
        btnDoctupeNode.classList.remove('list__ok');
        boolBtnList = !boolBtnList;
    }
    console.log(boolBtnList);
}
