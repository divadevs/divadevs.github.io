let button 		= document.querySelector('#button')
let name 		= document.querySelector('#name')
let gender 		= document.querySelector('#gender')
let height 		= document.querySelector('#height')
let mass 		= document.querySelector('#mass')
let birth_year 	= document.querySelector('#birth_year')


function getInfo() {
	updateInfoWithLoading()
	//random person (1-88)
	let randomNumber = Math.floor((Math.random() * 88) + 1)

	let apiUrl	= 'https://swapi.co/api/people/'
	+ randomNumber

	//getInfo on container
	axios.get(apiUrl)
	.then(response =>{
		updateInfo(response.data)
	}).catch(e => {
		updateInfoWithError()
	})
}

function updateInfo(data){
	name.innerText 		= data.name
	gender.innerText 	= `Gender: ${data.gender}`
	height.innerText 	= `Height: ${data.height}`
	mass.innerText 		= `Mass: ${data.mass}`
	birth_year.innerText = `Birth Year: ${data.birth_year}`
}

function updateInfoWithError(){
	name.innerText 		= 'That person is not available.'
	gender.innerText 	= ''
	height.innerText 	= ''
	mass.innerText 		= ''
	birth_year.innerText = ''
}

function updateInfoWithLoading(){
	name.innerHTML 		= '<i class="fa fa-circle-o-notch fa-spin" style="font-size:36px; justify-content:center; display:flex;"></i>'
	gender.innerText 	= ''
	height.innerText 	= ''
	mass.innerText 		= ''
	birth_year.innerText = ''
}

button.addEventListener('click', getInfo)