var slideIndex = 0;
showSlides();

function select(num)
{
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++)
        slides[i].style.display = "none";

    for (i = 0; i < dots.length; i++)
        dots[i].className =  ("dot");

    slideIndex = num;

    dots[num].className = dots[num].className.replace(" active", "");
    slides[num].style.display = "block";  
    dots[num].className += " active";
}
        
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++)
        slides[i].style.display = "none";  
    slideIndex++;

    if (slideIndex > slides.length) 
        slideIndex = 1;    
    for (i = 0; i < dots.length; i++) 
        dots[i].className = dots[i].className.replace(" active", "");
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000);
}