const allItems = document.querySelectorAll('li')
const searchQuery = document.getElementById('search-query')

searchQuery.addEventListener('keyup', function(){
    for (const item of allItems) {
        const content = item.textContent.toLowerCase() 
        if (content.includes(searchQuery.value.toLowerCase())) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    }
})