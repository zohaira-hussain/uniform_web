$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// -------------------------------------Jawascript of Feedback page-------------------------------------
    function feedbackvalidation(){
        var email = document.getElementById('femail').value
        var feedback = document.getElementById('ffeedback').value
        if(email == "" || feedback == ""){
            alert('Field can not be Empty!')
        }
        else{
            alert('Feedback Submited!')
        }
    }

// -------------------------------------End Jawascript of Feedback page-------------------------------------

// -------------------------------------Jawascript of Contact Us page--------------------------------------

    function formvalidate(){
        var name = document.getElementById('cname').value;
        var email = document.getElementById('cemail').value;
        var number = document.getElementById('cnumber').value;
        var comment = document.getElementById('ccomment').value;

        if(name == "" || email == "" || number == "" || comment == ""){
            alert('Field can not be Empty!');
        }
        else{
            alert('Thank your for contacting us!')
        }
       
    
    }

// ------------------------------------- End Jawascript of Contact Us page--------------------------------------

AOS.init();

// -----------------------------------------Searchbar works---------------------------------------

function searchthis()
{
    var s = document.getElementById('myinp').value;
    if(s == "Home" || s == "home" || s== "HOME")
    {
        window.location.href="index.html";
    }
    else if(s == "About" || s=="about" || s=="ABOUT")
    {
        window.location.href="aboutus.html";
    }
    else if(s == "Contact" || s=="contact" || s=="CONTACT")
    {
        window.location.href="contactus.html";
    }
    else if(s == "Feedback" || s=="feedback" || s=="FEEDBACK")
    {
        window.location.href="feedback.html";
    }
    else if(s == "Belts" || s=="belts" || s=="BELTS" || s=="belt")
    {
        window.location.href="products/belts/1st.html";
    }
    else if(s == "Frocks" || s=="frocks" || s=="FROCKS" || s=="frock")
    {
        window.location.href="products/frocks/1st.html";
    }
    else if(s == "Logos" || s=="logos" || s=="LOGOS" || s=="logo")
    {
        window.location.href="products/logos/1st.html";
    }
    else if(s == "Pents" || s=="pents" || s=="PENTS" || s=="pent")
    {
        window.location.href="products/pents/1st.html";
    }
    else if(s == "Pt shoes" || s=="pt shoes" || s=="PT SHOES")
    {
        window.location.href="products/PT shoes/1st.html";
    }
    else if(s == "Pt shorts" || s=="pt shorts" || s=="PT SHORTS" || s=="shorts")
    {
        window.location.href="products/PT shorts/1st.html";
    }
    else if(s == "Pt tshirts" || s=="pt tshirts" || s=="PT TSHIRTS" || s=="pt t-shirts" || s=="t-shirts")
    {
        window.location.href="products/PT t-shirts/1st.html";
    }
    else if(s == "Pt track-pents" || s=="pt track-pents" || s=="PT TRACKS-PENTS" || s=="track-pents")
    {
        window.location.href="products/PT track-pents/1st.html";
    }
    else if(s == "Shirt" || s == "Shirts" || s == "shirts" || s == "SHIRTS" || s =="shirt" || s == "SHIRT")
    {
        window.location.href="products/shirts/1st.html"
    }
    else if(s == "Shoes" || s=="shoes" || s=="SHOES")
    {
        window.location.href="products/shoes/1st.html";
    }
    else if(s == "Skirts" || s=="skirts" || s=="SKIRTS" || s=="skirt")
    {
        window.location.href="products/skirts/1st.html";
    }
    else if(s == "Socks" || s=="socks" || s=="SOCKS")
    {
        window.location.href="products/socks/1st.html";
    }
    else if(s == "Ties" || s=="ties" || s=="TIES" || s=="pent")
    {
        window.location.href="products/ties/1st.html";
    }
    else
    {
        alert('Sorry, Result not found!');
    }
}

function addtocart()
{
    var total = document.getElementById('total_cart_amt').innerText;
    localStorage.setItem("Cartprice",total);
    alert("Added Item to Local Storage");
}