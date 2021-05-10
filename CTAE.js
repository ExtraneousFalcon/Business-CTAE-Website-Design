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
    let t = toggler.childNodes[1];
    t.addEventListener('click', ()=>{
        let child = toggler.childNodes[3];
        let unicode = t.childNodes[0];
        if(child.style.display==='block'){
            child.style.display = 'none';
            unicode.innerHTML="&#9654";

        }else{
            child.style.display = 'block';
            unicode.innerHTML="&#9660";
        }
    })
}

/* Nav toggler */

const navToggler = document.querySelector('.nav-toggler');


navToggler.addEventListener('click', ()=>{
    if(navBar.classList.contains('hidden')){
        navBar.classList.remove('hidden');
        navBar.classList.add('visible');
        navToggler.style.float = "right";
        navToggler.innerHTML = "&#9664";
        for(let page of pages){
            page.style["grid-column-start"] = "2";
            page.style["margin-left"]="2vw";

        }

    }else{
        navBar.classList.remove('visible');
        navBar.classList.add('hidden');
        navToggler.style.float = "left";
        navToggler.innerHTML = "&#9654";
        for(let page of pages){
            page.style["grid-column-start"] = "1";
            page.style["margin-left"]="5vw";
        }
    }
})