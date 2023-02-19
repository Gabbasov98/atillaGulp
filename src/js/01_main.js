let inputs = document.querySelectorAll(".fg input, .fg textarea, .fg select")



inputs.forEach(input => {
    setInputsLabelPosition(input)

    input.onchange = function () {
        setInputsLabelPosition(this)
    }
})

function setInputsLabelPosition(input) {
    if(input.value != ""){
        input.classList.add("_has-text")
    }else{
        input.classList.remove("_has-text")
    }
}
