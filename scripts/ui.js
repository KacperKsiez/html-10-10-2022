class UIController {
	constructor() {
		this.mainHeaderNavBtn = document.querySelector('.main-header__navBtn');
		this.mainHeaderNav = document.querySelector('.main-header__nav');
		this.fullsite = document.querySelector('.fullsite');
		this.header = document.querySelector('.main-header');
	}
	mainHeaderMenuSwitch() {
		document.querySelector('.main-header__navBtn').addEventListener('click', () => {
			this.mainHeaderNav.classList.toggle('main-header__nav--hidden');
			this.mainHeaderNavBtn.classList.toggle('main-header__navBtn--clicked');
		});
	}
}

let uictrl = new UIController();
uictrl.mainHeaderMenuSwitch();
