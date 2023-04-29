export function hideElements(...elements) {
	elements.forEach(element => element.classList.add('hidden'))
}

export function showElements(...elements) {
	elements.forEach(element => element.classList.remove('hidden'))
}