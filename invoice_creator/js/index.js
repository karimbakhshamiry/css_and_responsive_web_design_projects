const services_btns = document.querySelectorAll('.services-btn')
let btns = document.querySelectorAll('.remove')
let taskContainer = document.getElementById('task')
let totalContainer = document.getElementById('total')
let totalAmountContainer = document.getElementById('total-amount')
let stylesheetLink = document.querySelector('link')
const sendInvoiceBtn = document.getElementById('send-invoice')
const lightModeButton = document.getElementById('dark-light-mode')
let tasksArray = []
let tasksObject = {
    'Wash Car': { cost: 10 },
    'Mow Lawn': { cost: 20 },
    'Pull Weeds': { cost: 30 },
    'Make the Landscape': {cost: 60}
}


// adding click event to all services buttons
services_btns.forEach(btn => {
    btn.addEventListener('click', function() {
        // renderServices(btn.dataset.service, btn.dataset.cost)
        if (tasksArray.indexOf(btn.dataset.service) === -1){
            tasksArray.push(btn.dataset.service)
            renderServices(tasksArray)

            addingRemoveEvent()
        }
    })
})

// adding click events to remove spans
function addingRemoveEvent() {
    btns = document.querySelectorAll('.remove')
    btns.forEach(btn => {
        btn.addEventListener('click', function(){
            // tasksArray[tasksArray.indexOf(btn.parentElement.dataset.value)]
            tasksArray.splice(btn.parentElement.value, 1)
            renderServices(tasksArray)
            addingRemoveEvent()
        })
      })
}

// removeServices.forEach(span => {
//     span.addEventListener('click', function() {
//         const service = span.parentElement.dataset.value
//         delete tasksArray[tasksArray.indexOf(service)]
//         renderServices(tasksArray)
//     }) 
// })


function renderServices(arr) {
    taskContainer.innerHTML = `<span class="info"> TASK </span>`
    totalContainer.innerHTML = `<span class="info"> TOTAL </span>`
    arr.forEach(item => {
        let task = document.createElement('p')
        task.dataset.value = item
        task.innerHTML = `${item} <span class="remove">Remove</span>`

        taskContainer.append(task)

        let cost = document.createElement('p')
        cost.innerHTML = `<span class="gray-text">$</span>${tasksObject[item].cost}`
        totalContainer.append(cost)
    })
        
    // handling the total cost value
    let totalCost = 0
    tasksArray.forEach(i => {
        totalCost += tasksObject[i].cost
    })
    totalAmountContainer.textContent = `$${totalCost}`
}

sendInvoiceBtn.addEventListener('click', function(){
    tasksArray = []
    renderServices(tasksArray)
})

lightModeButton.addEventListener('click', function(){
    if (lightModeButton.dataset.lightmode === "true"){
        stylesheetLink.href = 'css/dark.style.css'
        lightModeButton.dataset.lightmode = 'false'
        lightModeButton.textContent = 'Light Mode'
    } else {
        stylesheetLink.href = 'css/light.style.css'
        lightModeButton.dataset.lightmode = 'true'
        lightModeButton.textContent = 'Dark Mode'
    }
})