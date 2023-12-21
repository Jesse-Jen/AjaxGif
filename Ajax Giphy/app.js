console.log("Let's get this party started!"); 

let form = document.querySelector('form')
let deleteBtn = document.querySelector('#delete')
let submit = document.querySelector('#submitGif')
let gifContainer = document.querySelector('#gifGoesHere')
let searchTerm = document.querySelector('#enterGif')

form.addEventListener('submit', async function(e){
    e.preventDefault()
    let res = await axios.get('http://api.giphy.com/v1/gifs/search',{params: {
        q: searchTerm.value,
        api_key: 'CKKn84SODl8Ei7p6vjoT13kWo26tUvTz'
    }})
    appender(res.data)
    searchTerm.value = ''
})

function appender(res){
   if(res.data.length){
   let index = Math.floor(Math.random() * res.data.length)
   let gifImg = document.createElement('img')
   let newDiv = document.createElement('div')
   gifImg.src = res.data[index].images.original.url
   gifImg.classList.add('imgSize')
    newDiv.append(gifImg)
    gifContainer.append(newDiv)

   }
}

deleteBtn.addEventListener('click',function(e){
    gifContainer.innerText = ''
})
