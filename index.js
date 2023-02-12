let menu = document.querySelector('.menu');
let tabs = menu.querySelectorAll('.tab');
let pages = document.querySelectorAll('.page');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        let target = tab.getAttribute('data-target');

        pages.forEach((page, index) => {
            page.classList.remove('active');
        })

        document.querySelector('#' + target).classList.add('active');
    })
})
