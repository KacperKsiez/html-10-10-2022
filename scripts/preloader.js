// (() => {
// 	document.body.style.overflow = 'hidden';
// 	window.onload = () => {
// 		const preloader = document.querySelector('.preloader');
// 		const preloaderCircle = document.querySelector('.preloader__circle');

// 		preloaderCircle.classList.add('preloader__circle--fadeOut');
// 		preloaderCircle.classList.remove('preloader__circle--rotate');

// 		setTimeout(() => {
// 			preloader.classList.add('preloader--transform');
// 		}, 450);
// 		setTimeout(() => {
// 			preloader.remove();
// 		}, 1450);
// 		setTimeout(() => {
// 			const fullsiteHeader = document.querySelector('.fullsite__text');
// 			fullsiteHeader.classList.toggle('fullsite__text--lighting');
// 			document.body.style.overflowY = 'scroll';
// 		}, 600);
// 	};
// })();
