const emailCollector = document.getElementById('email-collector')
const showMessageHere = document.getElementById('show-message-here')

emailCollector.addEventListener('submit', function(event) {
    event.preventDefault()
    let ourFormData = new FormData(event.target)
    const firstName = ourFormData.get("firstname")
    const email = ourFormData.get("email")

    showMessageHere.innerHTML = `
        <h2 class="main-content-title">Congratulations ${firstName}!</h2>
        <p class="sign-up-message">You are on your way to becoming a BBQ Master!</p>
        <p class="fine-print">You will get weekly BBQ tips sent to: ${email}</p>
    `

})
