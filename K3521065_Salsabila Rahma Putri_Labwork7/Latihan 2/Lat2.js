var myButton = document.querySelector('button');
const tanda = document.querySelectorAll('mark');

    function highlight() {
        tanda.forEach( (text) => {
                text.classList.toggle('replace')
        })       
    };

myButton.onclick = function(){
    highlight();
}