// var t1= gsap.timeline()

// t1.to("#box1",{
//     x:1300,
//     duration: 1.5,
//     rotate: 360,
//     scale: 0.5,
// })

// t1.to("#box2",{
//     x:1300,
//     duration: 1.5,
//     rotate: 360,
//     scale: 0.5,
// })

// t1.to("#box3",{
//     x:1300,
//     duration: 1.5,
//     rotate: 360,
//     scale: 0.5,

// })


var t1 =gsap.timeline()
t1.from('#nav h3',{
    y: -50,
    opacity: 0,
    delay: 0.5,
    duration: 0.8,
    stagger: 0.3,
})


t1.from('#main h1',{
    x: -500,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
})

t1.from('img',{
    x: 100,
    rotate: 45,
    opacity:0,
    duration:0.6,
    stagger: 0.5,

})