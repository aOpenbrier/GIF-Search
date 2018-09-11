//Array of topics
var breakfast = ['waffles', 'sunny side up', 'mimosa', 'coffee', 'bacon', 'pancakes', 'bloody mary','croissant','french toast', 'oatmeal', ]
var resultsArr = []

//Display topic buttons
function topics () {
    breakfast.forEach(function (food){
        var button = document.createElement('button')
        button.innerText = food
        button.setAttribute('onclick', 'topicSearch(this)')
        document.getElementById('topics').appendChild(button)
    })
}
topics()

//On-click topic button, display GIF results
    //fetch results GIPHY
    function topicSearch (thisbutton) {
        console.log(thisbutton.innerText)
        var term = thisbutton.innerText.split(' ')
        term = term.join('+')
        console.log(term)
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=buZQtISojwONGK37O7pDCyQ2sWkvVdCp&q=${term}&limit=10`)
        .then(function (response) {
            return response.json()
        })
        .then(function (results) {
            console.log(results)
            //Create array of objects
            results.data.forEach(function (result, index){
                resultsArr[index] = {
                    //values: still image url, animated image URL, rating, isStill:true
                    rating: result.rating,
                    still: result.images.original_still.url,
                    animated: result.images.original.url,
                    isStill: true,
                }
            console.log(resultsArr)
            })
        }).catch(function (e) {
            console.error(e)
        })
        //display GIF stills
    }

//On-click submit button, add topic button
    //push to array
    //call function to display all topics

//On-click GIF result, toggle animation
    //if still change image source to animated URL
    //else change image source to still URL