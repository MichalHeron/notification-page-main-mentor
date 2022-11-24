const mark = document.querySelector('.notcard__mark')
const postsActive = document.querySelectorAll('.notcard__post')

const noreadAmoount = document.querySelector('.noreadAmount')

const activeRemover = () => {
	postsActive.forEach(post => {
		if (post.classList.contains('active')) {
			post.classList.remove('active')
		}
	})
}
const noreadChecker = () => {
	let amount = 0
	postsActive.forEach(post => {
		if (post.classList.contains('active')) {
			amount++
		}
	})
	console.log(amount)
	noreadAmoount.innerHTML = amount
}

const readed = e => {
	if (
		(e.target.classList.contains('notcard__userName') ||
			e.target.classList.contains('notcard__recentPost') ||
			e.target.classList.contains('notcard__groupName')) &&
		e.target.parentElement.parentElement.parentElement.classList.contains('active')
	) {
		e.target.parentElement.parentElement.parentElement.classList.toggle('active')
	}
	if (e.target.classList.contains('notcard__text') || e.target.classList.contains('notcard__message')) {
		console.log(e.target.parentElement.parentElement)
		e.target.parentElement.parentElement.classList.toggle('active')
	}
	if (e.target.classList.contains('notcard__textBox')) {
		e.target.parentElement.classList.toggle('active')
	}
	if (e.target.classList.contains('notcard__post')) e.target.classList.toggle('active')
}

mark.addEventListener('click', activeRemover)
window.addEventListener('click', noreadChecker)

postsActive.forEach(post => {
	post.addEventListener('click', readed)
})
