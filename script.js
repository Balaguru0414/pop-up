'use strict';

// >>>>>>>>>>>>>>>> set variables >>>>>>>>>>>>>>>>

const modal = document.querySelector('.modal') ;

const btncloseModal = document.querySelector('.close-modal') ;

const overlay = document.querySelector('.overlay') ;

const btnShowModal = document.querySelectorAll('.show-modal');

console.log(btnShowModal);

// >>>>>>>>>>>>>>>> functions >>>>>>>>>>>>>>>>

//         click Event

const openModal = function () {	
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
}

const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
}

//          key press Event

const key = function (e) {										     		// const key = function (e) {
	// console.log(e.key);										     		// 		console.log(e.key);
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {	 	//*		if (e.key === 'Escape') {  *** changed ***
			closeModal();										     		// 			closeModal();
	}															     		// 		}
	else if(e.key === '1' || e.key === '2' || e.key === '3' ) {	     		// 		else if(e.key === '1' || e.key === '2' || e.key === '3' ) {
	openModal();												     		// 		openModal();
 }																     		// 	 }
}																     		// 	}

// >>>>>>>>>>>>>>>> pop-up show - click buttons >>>>>>>>>>>>>>>>

for(let i = 0 ; i < btnShowModal.length ; i++) {
	btnShowModal[i].addEventListener('click',openModal);
}

// >>>>>>>>>>>>>>>> pop-up close - click (-- X button & overlay --) >>>>>>>>>>>>>>>>

btncloseModal.addEventListener('click',closeModal); 

overlay.addEventListener('click',closeModal);

// >>>>>>>>>>>>>>>> Key press >>>>>>>>>>>>>>>>

document.addEventListener('keydown',key);