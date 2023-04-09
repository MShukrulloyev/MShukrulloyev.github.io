/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true /* Animations repeat */
})

sr.reveal(`.pre-footer, footer`)

sr.reveal(`.services_flex-box .box, .treeS1, .team_flex-box .box, .services_flex .box, .steps .step, .services_flex-box .how-it_box`, { origin: 'bottom', interval: 100 })

sr.reveal(`.container_part1`, { origin: 'left' })

sr.reveal(`.container_part2`, { origin: window.innerWidth <= 425 ? 'left' : 'right' })
// sr.reveal(`.qualification__content, .services__card `, { interval: 100 })