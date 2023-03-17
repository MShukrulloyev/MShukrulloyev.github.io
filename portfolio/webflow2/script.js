const boxes = document.querySelector('.boxes'),
    wrapper = document.querySelector('.wrapper'),
    box = document.querySelectorAll('.box'),
    width = document.querySelector('.main_container').offsetWidth,
    parent = document.querySelector('.dots');

let offset = 1, defaultWidth, itemWidth, boxesWidth;
if (window.outerWidth <= 624) {
    defaultWidth = 0;
    itemWidth = wrapper.offsetWidth;
    boxesWidth = (itemWidth + 30);
} else {
    defaultWidth = ((width / 2) - (box[0].offsetWidth / 2)) * 1;
    boxesWidth = (box[0].offsetWidth + 30);
}

box.forEach(item => {
    item.style.width = itemWidth + "px";
    const div = document.createElement('div');
    div.className = 'dot';
    parent.append(div);
});

boxes.style.width = box[0].offsetWidth * box.length + "%";

const btn = document.querySelectorAll('.dot');

function refresh() {
    boxes.style.paddingLeft = defaultWidth + "px";
    boxes.style.transform = `translateX(-${boxesWidth * offset}px)`;
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