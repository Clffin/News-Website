// const article1 = document.querySelector(".art1-img");

// const t1 = new TimelineMax();

// t1.fromTo(article1,1, {height: "0px"}, {height: '400px'});

// const t2 = new AnimationTimeline();
// t2.currentTime(article1)

//---------------------------------------------------------

// const pbserver = new IntersectionObserver((entries)) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting)
//         {
//             entry.target.classList.add('show');
//         }
//         else
//         {
//             entry.target.classList.remove('show');
//         }
//     });
// }

// const hiddenElements = document.querySelectorAll('.animation');
// hiddenElements.forEach((el) => observer.observe(el));
//------------------------------------------------------------

const paragraphs = document.querySelectorAll(".fly");

document.addEventListener("scroll", function (){
    paragraphs.forEach((paragraph)=> {
        if(isInView(paragraph)){
            paragraph.classList.add("fly--visible");
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
        (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}