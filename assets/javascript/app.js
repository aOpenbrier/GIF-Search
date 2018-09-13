//Array of topics
var breakfastArr = ['waffles', 'sunny side up', 'mimosa', 'coffee', 'bacon', 'pancakes', 'bloody mary', 'croissant', 'french toast', 'oatmeal',]
var resultsArr = []

//Display topic buttons
function topics() {
    //clear topics section
    document.getElementById('topics').innerHTML = ''
    breakfastArr.forEach(function (bfItem) {
        var button = document.createElement('button')
        button.innerText = bfItem
        button.className='topicButton'
        button.setAttribute('onclick', 'topicSearch(this)')
        document.getElementById('topics').appendChild(button)
    })
}
topics()

//On-click topic button, display GIF results
function topicSearch(thisbutton) {
    //format term to API requirements (use plus sign, no spacees)
    var term = thisbutton.innerText.split(' ')
    term = term.join('+')

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=buZQtISojwONGK37O7pDCyQ2sWkvVdCp&q=${term}&limit=10`)
        .then(function (response) {
            return response.json()
        })
        .then(function (results) {
            //Create array of GIF objects
            results.data.forEach(function (result, index) {
                resultsArr[index] = {
                    rating: result.rating,
                    still: result.images.fixed_width_still.url,
                    animated: result.images.fixed_width.url,
                    isStill: true,
                }
                //display GIF stills
                document.getElementById('results').innerHTML = ''
                resultsArr.forEach(function (result, index) {
                    var box = document.createElement('div')
                    box.innerHTML = `
                    <h3>Rating: ${result.rating}</h3>  
                    <img src='${result.still}' class='gif' id='js-gif${index}' onclick='toggleGif(${index})'>
                    `
                    document.getElementById('results').appendChild(box)
                })
            })
        }).catch(function (e) {
            console.error(e)
        })

}

//On-click submit button, add topic button
function addTopic(){
    event.preventDefault()
    //push to array
    breakfastArr.push(document.getElementById('topicInput').value)
    document.getElementById('topicInput').value = ''
    //call function to display all topics
    topics()
}

//On-click GIF result, toggle animation
function toggleGif(index){
    //if still change image source to animated URL
    if (resultsArr[index].isStill){
        document.getElementById('js-gif' + index).setAttribute('src', resultsArr[index].animated)
        resultsArr[index].isStill = false
    }
    else{   //change image source to still URL
        
        document.getElementById('js-gif' + index).setAttribute('src', resultsArr[index].still)
        resultsArr[index].isStill = true
    }
}