window.addEventListener('load', ()=> {
  tiggleNav();
})

function tiggleNav(){
  const btnNav = document.querySelector('.entry-page-nav_btn');

  btnNav.addEventListener('click', ()=>{
    btnNav.classList.toggle('active');
    btnNav.classList.toggle('not-active');
  })
}