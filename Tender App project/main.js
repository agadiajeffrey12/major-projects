const setcog = document.querySelector('.setcog')
const setting = document.querySelector('.settings');
const colon = document.querySelector('.theme');
const bdb = document.querySelector('.bdb')
const main = document.querySelector('.main')
console.log(setting, bdb);

function cog() {
    setting.style.transform ='translateX(230%)'; 
    setting.style.transition = 'all 0.3s ease-in-out'
    if (colon.style.visibility = 'visible') {
        colon.style.visibility ='hidden'; 
    }
}
function theme(){
    colon.style.visibility ='visible'; 
    if (setting.style.visibility = 'visible') {
        setting.style.transform ='translateX(400%)'
    }
}

// bdb.addEventListener('click', function(){
//     colon.style.visibility ='hidden'; 
// })

function dark(){
    bdb.style.backgroundColor = '#e6e680'
}

function close(){
    colon.style.visibility ='hidden'; 
}