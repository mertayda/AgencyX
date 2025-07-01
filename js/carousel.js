const testimonials = document.querySelector(".testimonials")
const testimonialSlide = document.querySelectorAll(".testimonial-slide")
const nextBtn = document.querySelector(".nextBtn")
const prevBtn = document.querySelector(".prevBtn")
const sliderPagination = document.querySelector(".slider-pagination")
const  testimonialsContainer = document.querySelector(".testimonials-container")

let currentIndex = 0;
let totalIndex = testimonialSlide.length 
let leap = []
let autoPlay




function updateSlide(){
     const offset = -currentIndex * 100
     testimonials.style.transform = `translateX(${offset}%)`
      leap.forEach((dot,index) => {
          if(index === currentIndex){
            dot.classList.add("active")
          } else{
            dot.classList.remove("active")
          }
      })
          
}


function updateDots(test){
     currentIndex = test
    updateSlide()
    clearInterval()
}


function createdots(){
  for(let i = 0; i<totalIndex  ; i++){
    let points = document.createElement("button")
    points.classList.add("dots")
    leap.push(points)
    sliderPagination.appendChild(points)
    points.addEventListener("click",() => {
       updateDots(i)
    })

  }

 
 
}

function nextSlide(){

        currentIndex = (currentIndex + 1) % totalIndex
        updateSlide()
  
}


function prevSlide(){
    currentIndex = (currentIndex === 0) ? totalIndex - 1 : currentIndex - 1
    updateSlide()
  
}





function start(){
 autoPlay  = setInterval(() => {
   nextSlide()
 },3000)

}


function stopInterval(){

  clearInterval(autoPlay)
}



testimonialsContainer.addEventListener("mouseenter",stopInterval)
testimonialsContainer.addEventListener("mouseleave",start)


nextBtn.addEventListener("click",() => {
  nextSlide()
  stopInterval()
})
prevBtn.addEventListener("click",() => {
  prevSlide()
  stopInterval()
})

updateSlide()
createdots()
start()
