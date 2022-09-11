const contactBtn = document.getElementById('contact-us')
const sendBtn = document.getElementById('submit')
const modal = document.getElementById('modal')
const closeModalBtn = document.getElementById('close-modal')

contactBtn.addEventListener('click', function() {
    modal.style.display = 'block'
})

sendBtn.addEventListener('click', function() {
    modal.style.display = 'none'
})

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none'
})