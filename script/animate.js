console.log('Hello')



const timeline=gsap.timeline({duration: 1.5})

timeline.from('#logo',{
    opacity: 0,
    duration:.8,
    y:-30,
    delay: 0
   
}).from(".title-container-text",{
    opacity:0,
    duration: 1.5
}).from('.floatTL',{
    opacity:0,
    duration: .5,
    
})

