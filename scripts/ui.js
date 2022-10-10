class UIController{
    constructor(){
        this.mainHeaderNavBtn = document.querySelector('.main-header__navBtn')
        this.mainHeaderNav = document.querySelector('.main-header__nav')
    }
    mainHeaderMenuSwitch(){
        document.querySelector('.main-header__navBtn').addEventListener('click', ()=>{
            this.mainHeaderNav.classList.toggle('main-header__nav--hidden')
            this.mainHeaderNavBtn.classList.toggle('main-header__navBtn--clicked')
        })
    }
}

let uictrl = new UIController()
uictrl.mainHeaderMenuSwitch()