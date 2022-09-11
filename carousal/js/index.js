const allCarouselItems = document.getElementsByClassName('carousel-item')
const nextItemBtn = document.getElementById('carousel-item-next')
const prevItemBtn = document.getElementById('carousel-item-prev')
const totalCarouselItems = allCarouselItems.length
let currentCarouselItem = 0


function hideAllCarouselItems(){
    for (const item of allCarouselItems) {
        item.classList = 'carousel-item'
    }
}

nextItemBtn.addEventListener('click', function(){
    hideAllCarouselItems()
    // allCarouselItems[currentCarouselItem].classList.remove('carousel-item-visible')
    if (currentCarouselItem === totalCarouselItems - 1) {
        currentCarouselItem = 0
    } else {
        currentCarouselItem++
    }

    allCarouselItems[currentCarouselItem].classList.add('carousel-item-visible-right')
})

prevItemBtn.addEventListener('click', function(){
    // allCarouselItems[currentCarouselItem].classList.remove('carousel-item-visible')
    hideAllCarouselItems()
    if (currentCarouselItem === 0) {
        currentCarouselItem = totalCarouselItems - 1
    } else {
        currentCarouselItem--
    }

    allCarouselItems[currentCarouselItem].classList.add('carousel-item-visible-left')
})