hamburger = $(".hamburger");
$(".hamburger").click(function(event){
    console.log("salom")
    $(".menu").toggleClass(" open");
    $(this).toggleClass(" opened");
})
window.addEventListener('load', function(){
    const preloader = document.querySelector('#preloader');
    preloader.className += 'hidden';
});