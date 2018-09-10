//Array of topics
var breakfast = ['waffles', 'sunny side up', 'mimosa', 'coffee', 'bacon', 'pancakes', 'bloody mary','croissant','french toast', 'oatmeal', ]

//Display topic buttons
function topics () {
    breakfast.forEach(function (food){
        var button = document.createElement('button')
        button.innerText = food
        document.getElementById('topics').appendChild(button)
    })
}
topics()
//On-click topic button, display GIF results
    //fetch results GIPHY
    //Create array of objects
        //values: still image url, animated image URL, rating, isStill:true

//On-click submit button, add topic button
    //push to array
    //call function to display all topics

//On-click GIF result, toggle animation
    //if still change image source to animated URL
    //else change image source to still URL