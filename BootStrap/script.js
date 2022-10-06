

const update= ()=>{
let select_value = document.getElementById('selected-option')
let text = select_value.options[select_value.selectedIndex].value
console.log(text)

}


update();