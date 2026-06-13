const bulb = document.querySelector('.bulb');
const btn = document.querySelector('button');

btn.addEventListener('click', () =>{

    if(bulb.classList.toggle('lightUp')){
        btn.textContent = "Off"
    } else {
        btn.textContent = "On"
    }

})