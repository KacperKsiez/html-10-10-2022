class UIController {
	constructor() {
		this.mainHeaderNavBtn = document.querySelector('.main-header__navBtn');
		this.mainHeaderNavList = document.querySelector('.main-header__list');
		this.mainHeaderNav = document.querySelector('.main-header__nav');
		this.fullsite = document.querySelector('.fullsite');
		this.header = document.querySelector('.main-header');
		this.authors = document.querySelectorAll('.content__author');
		this.products = document.querySelectorAll('.content__product');
		this.productsImages = document.querySelectorAll('.content__product-image');
		this.productsTexts = document.querySelectorAll('.content__product-desc');

		this.authorImages = document.querySelectorAll('.content__author-image');

		this.mainHeaderMenuSwitch();
		this.authorsIntersectionObserver();
		this.productsIntersectionObserver();
	}
	mainHeaderMenuSwitch() {
		const switchFn = () => {
			this.mainHeaderNav.classList.toggle('main-header__nav--hidden');
			this.mainHeaderNavBtn.classList.toggle('main-header__navBtn--clicked');
		};

		const listItems = this.mainHeaderNavList.childNodes;

		listItems.forEach((item) => {
			item.addEventListener('click', switchFn);
		});

		this.mainHeaderNavBtn.addEventListener('click', switchFn);
	}
	authorsIntersectionObserver() {
		this.authorImages.forEach((image) => {
			image.classList.toggle('content__author--nojs');
		});
		const obs = new IntersectionObserver(
			(authors) => {
				authors.forEach((author) => {
					if (author.isIntersecting) {
						this.authorImages.forEach((image, num) => {
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
}

let uictrl = new UIController();
