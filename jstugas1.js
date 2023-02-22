const spans = document.querySelectorAll ('h3 span')
spans.forEach(span => span.addEventListener('mouseover',function(e){
    span.classList.add('animated','rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout',function(e){
    span.classList.remove('animated','rubberBand')
}))

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.biodata',
    triggerHook: 0
})
.setTween(t1)
.addTo(controller)