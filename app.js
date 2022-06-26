const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')

const container = document.querySelector('.container')

const slidesCount = mainSlide.querySelectorAll('div').length   /* slidesCount - количество слайдов */


let activeSlideIndex = 0                                      /* переменная для отслеживания - какой слайд активный */


sidebar.style.top = `-${(slidesCount - 1) * 100}vh`          /* обратные ковычки для динамических строчек с различными параметрами */

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if(event.key === 'ArrowDown') {
        changeSlide('down')
    }
})


function changeSlide(direction) {            /* вызываем функцию и как параметр передаём направление - direction куда кликаем */
    if (direction === 'up') {
        activeSlideIndex++                   /* если вверх, то прибавляем 1 для перехода к следующему  слайду */
        if(activeSlideIndex === slidesCount)
        {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight       /* создаём переменную-константу хд... обращаемся к контейнеру и просим получить свойство для высот клиентсокого экрана так сказать */
    
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`    /* убираем - перед $ */ 
}