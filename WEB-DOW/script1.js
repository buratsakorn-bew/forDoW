let dowName = document.querySelector('#name');
inputName();
function inputName(){
    let name = prompt('I have something to tell you ,please enter your Name')
    document.getElementById("name").innerHTML = name
    return name
    }
