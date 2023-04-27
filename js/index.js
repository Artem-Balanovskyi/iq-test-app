// Burger Handler

(function () {
	const burgerItem = document.querySelector('.burger');
	const menu = document.querySelector('.header__nav');
	const menuCloseItem = document.querySelector('.header__nav-close');
	const menuLinks = document.querySelectorAll('.header__link');
	burgerItem.addEventListener('click', () => {
		menu.classList.add('header__nav_active');
	});
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header__nav_active');
	})
	for (let i = 0; i < menuLinks.length; i++) {
		menuLinks[i].addEventListener('click', () => {
			menu.classList.remove('header__nav_active');
		})
	}
}());

// Scroll to anchors

(function () {

	const smoothScroll = function (targetEl, duration) {
		const headerElHeight = document.querySelector('.header').clientHeight;
		let target = document.querySelector(targetEl);
		let targetPosition = target.getBoundingClientRect().top - headerElHeight;
		let startPosition = window.scrollY;
		let startTime = null;

		const ease = function (t, b, c, d) {
			t /= d / 2;
			if (t < 1) return c / 2 * t * t + b;
			t--;
			return -c / 2 * (t * (t - 2) - 1) + b;
		};

		const animation = function (currentTime) {
			if (startTime === null) startTime = currentTime;
			const timeElapsed = currentTime - startTime;
			const run = ease(timeElapsed, startPosition, targetPosition, duration);
			window.scrollTo(0, run);
			if (timeElapsed < duration) requestAnimationFrame(animation);
		};
		requestAnimationFrame(animation);

	};

	const scrollTo = function () {
		const links = document.querySelectorAll('.js-scroll');
		links.forEach(each => {
			each.addEventListener('click', function () {
				const currentTarget = this.getAttribute('href');
				smoothScroll(currentTarget, 1000);
			});
		});
	};
	scrollTo();
}());

// Results page timer

function countdown( elementName, minutes, seconds )
{
	let element, endTime, hours, mins, msLeft, time;
	
	function twoDigits( n )
	{
		return (n <= 9 ? "0" + n : n);
	}
	
	function updateTimer()
	{
		msLeft = endTime - (+new Date);
		if ( msLeft < 1000 ) {
			element.innerHTML = "Time is up!";
		} else {
			time = new Date( msLeft );
			hours = time.getUTCHours();
			mins = time.getUTCMinutes();
			element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
			setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
		}
	}
	
	element = document.getElementById( elementName );
	endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
	updateTimer();
}

// countdown( "results__timer", 10, 0 );

// Pass test button

const mainPage = document.querySelector('.main-page')
const testPage = document.querySelector('.tests-page')
const headerBasement = document.querySelector('.header__basement')
let buttonsArray = document.querySelectorAll(".pass-test-button");

buttonsArray.forEach(function(button) {
	button.addEventListener("click", showTestsPage);
});


function showMainPage () {
	console.log('click!')
	testPage.classList.add('hidden')
	mainPage.classList.remove('hidden')
	headerBasement.style.height = '46'
}

function showTestsPage () {
	mainPage.classList.add('hidden')
	headerBasement.style.height = '0'
	testPage.classList.remove('hidden')
}