//Array of topics
var breakfast = ['waffles', 'sunny side up', 'mimosa', 'coffee', 'bacon', 'pancakes', 'bloody mary', 'croissant', 'french toast', 'oatmeal',]
var resultsArr = []

//Display topic buttons
function topics() {
    breakfast.forEach(function (bfItem) {
        var button = document.createElement('button')
        button.innerText = bfItem
        button.setAttribute('onclick', 'topicSearch(this)')
        document.getElementById('topics').appendChild(button)
    })
}
topics()

//On-click topic button, display GIF results
//fetch results GIPHY
function topicSearch(thisbutton) {
    var term = thisbutton.innerText.split(' ')
    term = term.join('+')
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=buZQtISojwONGK37O7pDCyQ2sWkvVdCp&q=${term}&limit=10`)
        .then(function (response) {
            return response.json()
        })
        .then(function (results) {
            //Create array of objects
            results.data.forEach(function (result, index) {
                resultsArr[index] = {
                    //values: still image url, animated image URL, rating, isStill:true
                    rating: result.rating,
                    still: result.images.original_still.url,
                    animated: result.images.original.url,
                    isStill: true,
                }
                //display GIF stills
                document.getElementById('results').innerHTML = ''
                resultsArr.forEach(function (result, index) {
                    var box = document.createElement('div')
                    box.innerHTML = `
                    <h3>Rating: ${result.rating}</h3>  
                    <img src='${result.still}' onclick='toggleGif(${index})'>
                    `
                    document.getElementById('results').appendChild(box)
                })
            })
        }).catch(function (e) {
            console.error(e)
        })

}

//On-click submit button, add topic button
    //push to array
    //call function to display all topics

//On-click GIF result, toggle animation
    //if still change image source to animated URL
    //else change image source to still URL