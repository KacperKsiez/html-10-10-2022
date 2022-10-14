((on) => {
	const preloader = document.querySelector('.preloader');
	preloader.style.display = 'flex';
	const preloaderCircle = document.querySelector('.preloader__circle');
	if (on) {
		window.onload = () => {
			preloaderCircle.classList.add('preloader__circle--fadeOut');
			preloaderCircle.classList.remove('preloader__circle--rotate');
			document.body.style.overflow = 'hidden';

			setTimeout(() => {
				preloader.classList.add('preloader--transform');
			}, 450);
			setTimeout(() => {
				preloader.remove();
			}, 1450);
			setTimeout(() => {
				const fullsiteHeader = document.querySelector('.fullsite__text');
				fullsiteHeader.classList.toggle('fullsite__text--lighting');
				document.body.style.overflowY = 'scroll';
			}, 600);
		};
	} else {
		preloader.remove();
	}
})(true);
