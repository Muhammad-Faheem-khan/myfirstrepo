const open_account = document.querySelector('.nav-link-btn');
const modal_window = document.querySelector('.modal-window');
const overlay = document.querySelector('.modal-container');
const close_Modal = document.querySelector('.close-btn');
const full_name = document.querySelector('#name');
const gender_selector = document.querySelector('#gender-select');
const country_select = document.querySelector('#country')
const submit_data = document.querySelector('.submit-btn')


const closeModal=function(){
    modal_window.classList.add("hidden")
    overlay.classList.add("hidden")
}

open_account.addEventListener('click', function(){
    modal_window.classList.remove("hidden")
    overlay.classList.remove("hidden")
})

close_Modal.addEventListener('click',closeModal)

document.addEventListener('keydown', function(e){
    if(e.key==='Escape' && !modal_window.classList.contains('hidden'))
    {
        closeModal()
    }
})
overlay.addEventListener('click',closeModal)

const getFormData= function(){
    const fullName = full_name.value;
    const gender = gender_selector.value
    const country = country_select.value

    full_name.value = ""
    country_select.value = ""



}


submit_data.addEventListener('click', getFormData)
