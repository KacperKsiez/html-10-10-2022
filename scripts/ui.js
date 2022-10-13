class UIController {
	constructor() {
		this.mainHeaderNavBtn = document.querySelector('.main-header__navBtn');
		this.mainHeaderNav = document.querySelector('.main-header__nav');
		this.fullsite = document.querySelector('.fullsite');
		this.header = document.querySelector('.main-header');
		this.authors = document.querySelectorAll('.content__author');
	}
	mainHeaderMenuSwitch() {
		document.querySelector('.main-header__navBtn').addEventListener('click', () => {
			this.mainHeaderNav.classList.toggle('main-header__nav--hidden');
			this.mainHeaderNavBtn.classList.toggle('main-header__navBtn--clicked');
		});
	}
	authorsIntersectionObserver() {
		const obs = new IntersectionObserver(
			(authors) => {
				const images = document.querySelectorAll('.content__author-image');
				authors.forEach((author) => {
					if (author.isIntersecting) {
						images.forEach((image, num) => {
							image.classList.add('content__author-image--fadeIn');
							image.classList.add(`delay${num}`);
						});
					}
				});
			},
			{
				rootMargin: '-120px',
			}
		);
		this.authors.forEach((author) => {
			obs.observe(author);
		});
	}
	productsIntersectionObserver() {
		const obj = new IntersectionObserver();
	}
}

let uictrl = new UIController();
uictrl.mainHeaderMenuSwitch();
uictrl.authorsIntersectionObserver();
