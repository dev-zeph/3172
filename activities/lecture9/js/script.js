
function focusStyle(event){
    event.target.style.backgroundColor = 'lightyellow';
    event.target.style.border = '2px solid orange';

}
function blurStyle(event){
    event.target.style.backgroundColor = '';
    event.target.style.border = '';
}

document.addEventListener('DOMContentLoaded',function(){

    const inputIds = ['firstName','lastName','email'];

    inputIds.forEach(function(inputId){
        const inputElement = document.getElementById(inputId);

        inputElement.addEventListener('focus', focusStyle);

        inputElement.addEventListener('blur', blurStyle);
    })

});