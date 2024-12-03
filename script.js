window.onload=function(){
    alert("Bienvenidos a mi pagina web");
};

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
    });
});