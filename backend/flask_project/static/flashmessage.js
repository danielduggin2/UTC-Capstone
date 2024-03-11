function deleteFlashMessage(e){
    e.target.parentElement.remove();
}

buttons = document.querySelectorAll(".flash-message > button");

buttons.forEach((button) => {
    button.addEventListener("click",deleteFlashMessage);
})
