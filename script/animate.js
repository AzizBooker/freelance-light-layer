console.log('Hello')



const timeline=gsap.timeline({duration: 1.5,delay: 1,})

timeline.from('#logo',{
    opacity: 0,
    duration: 2,
    y:-30,
   
}).from("#title-contanier-1",{
    opacity:0,
}).from("#title-contanier-2",{
    opacity: 0,
}).from('.floatTL',{
    opacity:0,
    
})

