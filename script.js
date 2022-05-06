window.addEventListener('scroll', onScroll)

/*=====On Scroll function*/
function onScroll(){
    showNavOnScroll()
    showBackToTopButton()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section){
    /*Linha que representa a metade da tela*/
    const targetLine = scrollY + innerHeight / 2;

    /*topo da seção atual*/
    const sectionTop = section.offsetTop

    /*altura da seção atual*/
    const sectionHeight = section.offsetHeight
    
    /*variável com valor booleano indicando se o topo da seção passou a metade da tela*/   
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop
    
    /*posição do final da seção(logo início de outra seção)*/
    const sectionEndsAt = sectionTop + sectionHeight
    
    /*variável com valor bool indicando se o final da seção atual passou da metade da tela*/
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
    
    /*variável com valor bool indicando se só a parte de cima da seção passou a linha alvo, mas a parte de baixo ainda não */
    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBoundaries){
        menuElement.classList.add('active')
    }

}
















const backToTop = document.querySelector('#backToTop')
function showBackToTopButton(){
    if(scrollY > 1250){
        backToTop.classList.add('show')
    }else{
        backToTop.classList.remove('show')
    }
}


function showNavOnScroll(){
const nav = document.querySelector('nav')
    if(scrollY > 0){
        nav.classList.add('scroll')
    }else{
        nav.classList.remove('scroll')
    }
}


/*open menu-expanded function*/
function openMenu(){
    document.body.classList.add('menu-expanded')
}


/*close menu-expanded function*/
function closeMenu(){
    document.body.classList.remove('menu-expanded')
}


/*=====BackToTop Button===============*/
const btn = document.querySelector('#backToTop');
function showBtn(){
    if(scrollY > 300){
        console.log('maior que 300')
        btn.classList.add('show')
    }
}



/*=====ScrollReveal===============*/
ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 600
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #sevices header,
    #services .card,
    #about,
    #about header,
    #about .content`);
    
