const poga = document.querySelector('.js-poga');

let punkti = 10;

poga.addEventListener('click', () => {
    punkti = punkti - 1

    if(punkti > 0){
        poga.textContent = `Nospied mani vēl ${punkti}x`
    } else {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")

        punkti = 10

        poga.textContent = `Nospied mani vēl ${punkti}x`
    }
})
NEW
