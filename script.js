const successBtnEl = document.querySelector('.btn--success')
const infoBtnEl = document.querySelector('.btn--info')
const warningBtnEl = document.querySelector('.btn--warning')
const errorBtnEl = document.querySelector('.btn--error')

const successEl = document.querySelector('.notification--success')
const infoEl = document.querySelector('.notification--info')
const warningEl = document.querySelector('.notification--warning')
const errorEl = document.querySelector('.notification--error')

const barEl = document.querySelector('.bar')

const fadeTime = 8000;

document.addEventListener('click', (event) => {
    if(event.target === successBtnEl){
        animateIn(successEl)
    }

    if(event.target === infoBtnEl){
        animateIn(infoEl)
    }

    if(event.target === warningBtnEl){
        animateIn(warningEl)
    }

    if(event.target === errorBtnEl){
        animateIn(errorEl)    }
})

function animateIn(element){
    element.style.display = 'block'
    element.style.animation = `slidein 1.5s`
    element.append(barEl)
    barEl.style.display = `block`
    barEl.style.animation = `barFade ${fadeTime / 1000}s`
    setTimeout(() => {
        barEl.style.display = `none`
        animateOut(element)
    }, fadeTime);
}

function animateOut(element){
    element.style.animation = `slideout 1.5s`
    setTimeout(() => {
        element.style.display = 'none'
        barEl.style.display = `block`
    }, 500);
}