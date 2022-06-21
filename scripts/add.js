const addNode = document.querySelector('.add');
const colorNode = document.querySelectorAll('.color');
const blockNode = document.querySelector('.block');

const colorSel = document.querySelector('.color__selection');
let bool = false;

addNode.onanimationend = function () {
  this.classList.remove('active');
};

addNode.addEventListener('click', () => {
    if (bool) {
        addNode.classList.add('active');
        colorSel.classList.remove('color__active');
        bool = !bool;
    } else {
        addNode.classList.add('active');
        colorSel.classList.add('color__active');
        bool = !bool;
    }
});

function add(color) {
    const date = new Date().toLocaleDateString();
    const listNode = `
            <div class="list ${color}">
                <p class="list--text text--doctupe">Привет, это моя первая заметка</p>
                <div class="list__footer">
                    <div class="data">${date}</div>
                    <div class="list__btn" onclick="textDoctupe()"><img src="images/pencil.png" alt=""></div>
                </div>
            </div>`;
    blockNode.innerHTML += listNode;
    colorSel.classList.remove('color__active');
    bool = !bool;
};

