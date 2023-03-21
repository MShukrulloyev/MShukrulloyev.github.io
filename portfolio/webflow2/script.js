const wrapper = document.querySelector('.wrapper'),
    box = document.querySelectorAll('.box'),
    width = document.querySelector('.main_container').offsetWidth,
    parent = document.querySelector('.dots');

let offset = 1, defaultWidth, itemWidth, boxesWidth, d;

setInterval(() => {
    if (offset === box.length - 1) {
        offset = 0;
    } else {
        offset++;
    }
    onDeleteActive();
    refreshDate();
}, 5000)

if (window.outerWidth <= 624) {
    defaultWidth = 0;
    itemWidth = wrapper.offsetWidth;
    boxesWidth = itemWidth;
    d = 0;
} else {
    defaultWidth = (width / 2) - (box[0].offsetWidth / 2);
    boxesWidth = box[0].offsetWidth;
    d = 30;
}

box.forEach(item => {
    item.style.minWidth = itemWidth + "px";
    const div = document.createElement('div');
    div.className = 'dot';
    parent.append(div);
});

const btn = document.querySelectorAll('.dot');

wrapper.style.padding = `0 ${defaultWidth}px`;

function refreshDate() {
    wrapper.scrollLeft = (boxesWidth * offset) - d;
    btn[offset].classList.add('active');
    box[offset].classList.add('active_box');
}

refreshDate();

function onDeleteActive() {
    btn.forEach(bt => bt.classList.remove('active'))
    box.forEach(bt => bt.classList.remove('active_box'))
}


btn.forEach((item, i) => {
    item.addEventListener('click', () => {
        onDeleteActive();
        offset = i;
        refreshDate();
    })
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' && offset < box.length - 1) offset++
    if (event.key === 'ArrowLeft' && offset > 0) offset--
    onDeleteActive();
    refreshDate();
})

// touch

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
    pressed = true
    startX = e.clientX
    this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mouseleave', function (e) {
    pressed = false
})

window.addEventListener('mouseup', function (e) {
    pressed = false
    wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
    if (!pressed) {
        return
    }

    this.scrollLeft += startX - e.clientX;
})

wrapper.addEventListener('scroll', () => {
    box.forEach((item, i) => item.offsetLeft <= wrapper.scrollLeft + box[0].offsetLeft ? offset = i : null);
    onDeleteActive();
    btn[offset].classList.add('active');
    box[offset].classList.add('active_box');
})