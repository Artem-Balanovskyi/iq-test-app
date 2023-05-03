export async function getServerResponse() {
	const responseDataBlock = document.querySelector('.results__response-data')
	const resultsButton = document.querySelector('.results__button-wrap')
	document.querySelector('.results__button-wrap').style.marginBottom = '15px'
	
	let data = await fetchResults()
	let html = ''
	
	for (let [key, value] of Object.entries(data)) {
		let htmlSegment = `<div class="result">
															<hr>
															<p class="key">${key}:</p>
															<p class="value">${isValueObject(value)}</p>
															<hr>
                       			  </div>`
		
		html += htmlSegment
	}
	
	resultsButton.innerHTML = '<p>Ваш результат:</p>'
	document.querySelector('.results__call-us-now').classList.add('hidden')
	
	responseDataBlock.innerHTML = html
}

async function fetchResults() {
	const responseDataBlock = document.querySelector('.results__response-data')
	let url = 'https://swapi.dev/api/people/1'
	
	try {
		
		let response = await fetch(url)
		return await response.json()
		
	} catch (error) {
		responseDataBlock.innerHTML = `
																		Sorry, something goes wrong :(<br>
																		Try again later.<br>
																		${error.name}: ${error.message}
																	`
		
	}
}

function isValueObject(value) {
	let html = ''
	if (typeof value === "object") {
		for (let i = 1; i < value.length; i++) {
			let htmlSegment = `<p class="value">${value[i]}</p>`
			html += htmlSegment
		}
		return html
	}
	return value
}