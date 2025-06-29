const testimonials = document.querySelector(".testimonials")
const testimonialSlide = document.querySelectorAll(".testimonial-slide")
const nextBtn = document.querySelector(".nextBtn")
const prevBtn = document.querySelector(".prevBtn")
const sliderPagination = document.querySelector(".slider-pagination")

let currentIndex = 0;
let totalIndex = testimonialSlide.length 
let leap = []




function updateSlide(){
     const offset = -currentIndex * 100
     testimonials.style.transform = `translateX(${offset}%)`
      leap.forEach((index,say) => {
        if(index === currentIndex){
            say.classList.add("active")
        }else{
            say.classList.remove("active")
        }
      })
     

    
      
}


function updateDots(test){
    test = currentIndex
    updateSlide()
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


nextBtn.addEventListener("click",nextSlide)
prevBtn.addEventListener("click",prevSlide)

updateSlide()
createdots()