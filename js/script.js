const totop = document.querySelector('#ToTop');

totop.addEventListener('click',() =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.onscroll = function(){scroller()}

function scroller(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        totop.style.display = "block";
    }else{
        totop.style.display = "none";
    }
}