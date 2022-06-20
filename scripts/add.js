const add = document.querySelector('.add');
const colorSel = document.querySelector('.color__selection');
let bool = false;

add.onanimationend = function () {
  this.classList.remove('active');
};

add.addEventListener('click', () => {
    if (bool) {
        add.classList.add('active');
        colorSel.classList.remove('color__active');
        bool = !bool;
    } else {
        add.classList.add('active');
        colorSel.classList.add('color__active');
        bool = !bool;
    }
})


