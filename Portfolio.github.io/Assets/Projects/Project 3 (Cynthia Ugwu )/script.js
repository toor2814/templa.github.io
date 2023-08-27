var timeout;
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem", {
        y: 2,
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut,
        stagger: .2,
        
    })
    tl.from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease: Expo.easeInOut
    })

}

var timeout;

function circleChaptahojye(){
    //define scale vlaue 
    var xscale = 1;
    var yscale = 1;

    var xprevious = 0;
    var yprevious = 0;

    window.addEventListener("mousemove", function(dets){
        this.clearTimeout(timeout);
        xscale = gsap.utils.clamp (.8,1.2,dets.clientX - xprevious);
        yscale = gsap.utils.clamp (.8,1.2,dets.clientY - yprevious);

        xprevious = dets.clientX;
        yprevious = dets.clientY

       circleMouseFollower(xscale, yscale);

       timeout = setTimeout(function () {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
       }, 100);
    });
}

function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}

circleMouseFollower();
firstPageAnim();
circleChaptahojye();


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;


    elem.addEventListener("mouseleave", function(dets) { 
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3, 
            duration: .5,
        });
    });

    elem.addEventListener("mousemove", function(dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX; 
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3, 
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8)
        });
    });
});



