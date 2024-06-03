document.addEventListener('astro:page-load', () => {
    const button = document.querySelector('.Bars')
    const nav = document.querySelector('.Navigation')

    button.addEventListener('click', () => {
        nav.classList.toggle('isActive')
        button.classList.toggle('TransformBars')
    })
});

