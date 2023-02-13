    //showing my js is linked to html
    console.log("am linked test")

   //linking button with id - getting the element 
    let button =document.getElementById('calculate')


    //listening for click on button
    button.addEventListener('click',(e)=> { 

    //stopping browser from refreshing 
    e.preventDefault()

    // creating new variable, assigning it to element to get the value
    let height = document.getElementById("height").value 

    // creating another variable, assigning element to get another value
    let weight = document.getElementById("weight").value 

    // checking values are being assigned 
    console.log(height,weight)

    // new variable called squareHeight - which is height squared 
    let squareHeight=height*height

    // checking height squared works 
    console.log(squareHeight)

    //new variable called bmi, calculating weight/squared height
    let bmi=weight/squareHeight

    //check the calculation works
    console.log(bmi)

    //new variable and assigning it result from html page
    let result = document.getElementById("result")

    //showing the user the result, changing result in html
    result.innerHTML="Your BMI is:    "  + bmi
})


    
