const navBar = document.querySelector('.nav-bar');
const homePage = document.querySelector('.home-page');
const pageNames = ['home','broadcast','cs','engineering','graphic','physical','banking'];
const pages = document.querySelectorAll('.pages');

homePage.style.display = 'block';


/* Links each button to corresponding webpage */
for(let name of pageNames){
    let element = document.querySelector('.'+name);
    element.addEventListener('click',()=>{
        for(let page of pages){
            page.style.display = 'none';
        }
        let target = document.querySelector('.'+name+'-page');
        target.style.display='block';
    })
}


/* Toggling Feature */
const togglers = document.querySelectorAll('.toggler');

for(let toggler of togglers){
    toggler.addEventListener('click', ()=>{
        let child = toggler.childNodes[1];
        if(child.style.display==='block'){
            child.style.display='none';
        }else{
            child.style.display = 'block';
        }
    })
}

/* Nav toggler */

const navToggler = document.querySelector('.nav-toggler');

navToggler.addEventListener('click', ()=>{
    if(navBar.style.display==='none'){
        navBar.style.display='block';
        navToggler.innerHTML="Hide";

    }else{
        navBar.style.display='none';
        navToggler.innerHTML="Show";

    }
})