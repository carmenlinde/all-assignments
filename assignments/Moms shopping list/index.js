const form = document.addItem

form.addEventListener("submit" , function(event){
    event.preventDefault()

    let listInput = form.title.value
    form.title.value = ""

    let button = document.createElement("button")
    button.textContent = "x"
    button.style.width = "20px"
    button.style.marginLeft = "48%"
    button.addEventListener("click" , () => {
        newItem.remove()
        button.remove()
    })
    
    const newItem = document.createElement("li")
    newItem.textContent = listInput 
    document.getElementsByTagName("ul")[0].append(newItem)
    document.getElementsByTagName("ul")[0].append(button)


})