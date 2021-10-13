let indexs = 0;

let info = document.querySelectorAll('.info');

setTimeout(() => {
    info[indexs].classList.add('active')
}, 200);


let isSliding = false;

slide = () => {
    if (isSliding) return 

    isSliding = true

    let currDesign = document.querySelector('.info.active')

    currDesign.classList.remove('active')

    indexs = indexs + 1 > info.length -1 ? 0 : indexs + 1
    info[indexs].classList.add('active')



    let imageSlide = document.querySelectorAll('.slide')

    let slider = document.querySelector('.slider')

    let reverseItems = Array.from(imageSlide).slice().reverse()

    left = reverseItems[0].offsetLeft + 'px'
    height = reverseItems[0].offsetHeight + 'px'
    width = reverseItems[0].offsetWidth + 'px'
    zIndex = reverseItems[0].style.zIndex


    reverseItems.forEach((el, index) => {
        if(index < imageSlide.length - 1) {
            el.style.left = reverseItems[index + 1].offsetLeft + 'px'
            el.style.height = reverseItems[index + 1].offsetHeight + 'px'
            el.style.width = reverseItems[index + 1].offsetWidth + 'px'
            el.style.zIndex = reverseItems[index + 1].style.zIndex
            el.style.transform = 'unset'
            el.style.opacity = 1
        }

        if (index === imageSlide.length -1) {
            el.style.transform = 'scale(1.5)'
            el.style.opacity = '0'

            let cln = el.cloneNode(true)

            
        setTimeout(() => {

            el.remove()

            cln.style.transform = 'scale(0)'
            cln.style.left = left
            cln.style.height = height
            cln.style.width = width
            cln.style.opacity = '0'
            cln.style.zIndex = '0'
            cln.style.animation = 'unset'

            slider.appendChild(cln)


            isSliding = false
        }, 1000)
        }
    })
}





let slideControl = document.querySelector('.slide-control')

slideControl.onclick = () => {
    slide()
}


openNav = () => {
    let nav = document.querySelector('.nav-overlay')

    nav.classList.toggle('active')

    let hamb = document.querySelector('.hamburger')

    hamb.classList.toggle('active')
}
