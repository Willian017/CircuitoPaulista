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
    if (slideIndex > slides.length) 
        slideIndex = 1;

    dots[num].className = dots[num].className.replace(" active", "");
    dots[num].className += " active"; 
    slides[num].style.display = "block";  
}

function nextSlide() {
    showSlides2();
}

function prevSlide() {
    let slides = document.getElementsByClassName("mySlides");
    slideIndex = slideIndex - 2;
    if (slideIndex < 0)
        slideIndex = slides.length - 1;
    showSlides2();
}

function showSlides2() {
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
    setTimeout(showSlides, 8000);
}