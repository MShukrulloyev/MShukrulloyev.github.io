const boxes = document.querySelector('.boxes'),
    wrapper = document.querySelector('.wrapper'),
    box = document.querySelectorAll('.box'),
    width = window.getComputedStyle(wrapper).width,
    parent = document.querySelector('.dots');

let offset = 1,
    defaultWidth = ((window.innerWidth / 2) - (box[0].offsetWidth / 2)) * 1;

boxes.style.width = 100 * box.length + "%";

box.forEach(box => {
    box.style.width = width + "px";

    const div = document.createElement('div');
    div.className = 'dot';
    parent.append(div);
});

const btn = document.querySelectorAll('.dot');

function refresh() {
    boxes.style.paddingLeft = defaultWidth + "px";
    boxes.style.transform = `translateX(-${(box[0].offsetWidth + 30) * offset}px)`;
    btn[offset].classList.add('active');
    box[offset].classList.add('active_box');
}

refresh();

btn.forEach((item, i) => {
    item.addEventListener('click', () => {
        btn.forEach(bt => bt.classList.remove('active'))
        box.forEach(bt => bt.classList.remove('active_box'))
        offset = i;
        refresh();
    })
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' && offset < box.length - 1) offset++
    if (event.key === 'ArrowLeft' && offset > 0) offset--
    btn.forEach(bt => bt.classList.remove('active'))
    box.forEach(bt => bt.classList.remove('active_box'))
    refresh();
})