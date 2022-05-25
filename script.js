

function formValidation (formElement){
    if(!formElement.checkValidity()){

        formElement.closest('input,textarea,select').classList.add('error')
        if(!formElement.nextElementSibling){
            const error=document.createElement('small')
            error.className = 'error-msg'
            error.innerText = formElement.validationMessage
            formElement.insertAdjacentElement('afterend' ,error)
        } else{
            formElement.nextElementSibling.innerText = formElement.validationMessage
        }

    }else{
        formElement.closest('input,textarea,select').classList.remove('error')

        if(formElement.nextElementSibling?.className ==='error-msg'){
            formElement.nextElementSibling.remove()
        }
    }
}
let form = document.getElementById('form');

    [... form.elements].forEach(formElement =>{
        ['change','keyup'].forEach(method =>{
            formElement.addEventListener(method, ()=>{
                formValidation(formElement)
            })
        })
    })

form.addEventListener('submit',function(e){
    e.preventDefault();
    [...this.elements].forEach(formElement =>{
        formValidation(formElement)
    })
})