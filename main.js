/*========================Toggle Icon navbar========================*/
let nemuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classlist.toggle('fa-xmark');
    navbar.classlist.toggle('active')
}


/*========================Sticky Navbar========================*/
let header=document.querySelector('header');
header.classlist.toggle('sticky',window.scrollv > 100);
/*========================Remove toggle icon and navbar========================*/
menuIcon.classlist.remove('fa-xmark');
navbar.classlist.remove('active');

/*========================Scroll reveal========================*/
ScrollReveal({
    distance:'80px',
    duration: 2000,
    delay: 200,
});
