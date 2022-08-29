let plus = document.getElementById('plus');
let fals = document.getElementById('fals')
let minus = document.getElementById('min')
let plum = document.getElementById('laugh');
let fall = document.getElementById('sad')
let min = document.getElementById('happy')
let pimps = document.getElementById('pimps');
let lips = document.getElementById('lips');
let jap = document.getElementById('jap')


plus.addEventListener('click', function(){
    fals.style.display='block';
    minus.style.display='block';
    plus.style.display='none';
    if(fals.style.display='block'){

    }
    
})

minus.addEventListener('click', function(){
    fals.style.display='none';
     minus.style.display='none';
    plus.style.display='block';
})


laugh.addEventListener('click', function(){
    sad.style.display='block';
    min.style.display='block';
    laugh.style.display='none';
})

min.addEventListener('click', function(){
    fall.style.display='none';
     min.style.display='none';
    plum.style.display='block';
})

pimps.addEventListener('click', function(){
    jap.style.display='block';
    lips.style.display='block';
    pimps.style.display='none';
})

lips.addEventListener('click', function(){
    lips.style.display='none';
     jap.style.display='none';
    pimps.style.display='block';
})

let so = document.getElementById('so')
let i = document.getElementById('i')
let cry = document.getElementById('cry')

so.addEventListener('click', function(){
    i.style.display='block';
    cry.style.display='block';
    so.style.display='none';
})

i.addEventListener('click', function(){
    i.style.display='none';
     cry.style.display='none';
    so.style.display='block';
})

let men = document.getElementById('men')
let boy = document.getElementById('boy')
let girl = document.getElementById('girl')

men.addEventListener('click', function(){
    boy.style.display='block';
    girl.style.display='block';
    men.style.display='none';
})

boy.addEventListener('click', function(){
    boy.style.display='none';
     girl.style.display='none';
    men.style.display='block';
})

let bad = document.getElementById('bad')
let good = document.getElementById('good')
let love = document.getElementById('love')

bad.addEventListener('click', function(){
    good.style.display='block';
    love.style.display='block';
    bad.style.display='none';
})

good.addEventListener('click', function(){
    good.style.display='none';
     love.style.display='none';
    bad.style.display='block';
})