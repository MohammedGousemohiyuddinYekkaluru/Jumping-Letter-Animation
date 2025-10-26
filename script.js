const span = document.querySelectorAll('span');  //this gives a node list

span.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.remove('active');
        void item.offsetWidth;  // forces browser reflow to restart the animation
        item.classList.add('active');
    })
})