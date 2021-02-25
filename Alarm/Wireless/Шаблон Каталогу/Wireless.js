let call = document.querySelector('.call')
let list = document.querySelector('.list');
let mainSections = document.querySelectorAll('.list > li > span');
let subList = document.querySelectorAll('.list li ul');
let catalogButton = document.querySelector('.catalogbtn');
let body = document.querySelector('body')
let header = document.querySelector('.adapt_header')
let headerNumbers = document.querySelector('.header_numbers')
let liOfMainList = document.querySelectorAll('.list > li')
let firstSectionOfList = document.querySelector('.list > li')
let special = document.querySelectorAll('.special')
let allTags = document.querySelectorAll( 'body *' )




function innerTextInPre() {
	let allPreInDoc = document.querySelectorAll('pre');
	for (let i = 0; i < allPreInDoc.length; i++){
		allPreInDoc[i].innerText = '';
	}
}	

function changeSectionOnSubsection() {	
		for(let i = 0; i < mainSections.length; i++) {
			mainSections[i].onclick = function() {
				subList[i].style.display = 'inline-block'
				subList[i].style.position = 'absolute'
				subList[i].style.top = '0'
				subList[i].style.backgroundColor = '#1F3C4A'
				subList[i].style.left = '0'
				subList[i].style.fontSize = '5vw'
				subList[i].style.width = '100%'
				subList[i].style.boxShadow = '5px 5px 5px 0 rgb(0,0,0,0.5)'
			}
		}
 }


function bodyClick() {
	
	for (let i = 0; i < allTags.length; i++) {
		if ((allTags[i].className == 'adapt_header') || (allTags[i].className == 'main_form') || (allTags[i].className == 'steps')){
			console.log('TEST')
			allTags[i].onclick = function() {
				for (let i = 0; i < subList.length; i++) {
					

				if (subList[i].style.display == 'inline-block') {
					subList[i].style.display = 'none'		
				}	
			}
		}
	}
}
}


function test() {
	for (let i = 0; i < liOfMainList.length; i++) {
		liOfMainList[i].onclick = function(event) {

				for (let i = 0; i < subList.length; i++) {
					x = event.currentTarget.id

					if (subList[i].closest('li').id == x) {
						continue
					}
					if (subList[i].style.display == 'inline-block') {
						subList[i].style.display = 'none'		
					}
					}
		}
	}
}








if (window.matchMedia("(max-width: 600px)").matches){
	innerTextInPre();
	changeSectionOnSubsection();
	test();
	bodyClick();
}
