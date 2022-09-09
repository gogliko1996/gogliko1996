
{
    const nav1 = ["services","projects", "news", "contact","register"];
    let innav1=["services.html","projects.html", "news.html", "contact.html","register.html"];
    let navsigdze1 = nav1.length;
    let text1 = "<ul>";
    for(let i = 0; i<navsigdze1; i++){
        text1 +=`<li><a href="#${innav1[i]}">${nav1[i]}</a></li>`;
        }

        text1 += "</ul>";
     document.getElementById("nav1").innerHTML  = text1;
}
// .............................slider...................................
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayHoverPause:focus,
    autoplayTimeout:2000,
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