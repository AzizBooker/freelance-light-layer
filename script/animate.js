console.log('Hello')

gsap.defaults({
  duration: 1,
});

const timeline=gsap.timeline({delay: 1})

timeline.from('#logo',{
    duration: 1.5,
    opacity: 0,
    y: -50,
}).from('.title-contanier-1-text ',{
    opacity:0,
    y:30
}).from('.floatTL',{
    duration:1.2,
    opacity:0,
    scale:1.1,
}).from(".title-contanier-2",{
    opacity:0
})
