console.log("Hello Bhomeshwar");

let string;

let wordIndex = 0;

let typeSpeed;

let isDeleting = false;

let printable = "";

let writable = document.getElementById("writable")

let myArray = JSON.parse(writable.getAttribute("data-array"));

function hello(){

    string = myArray[wordIndex];

    if(!isDeleting)
    {
        typeSpeed = 200;
        printable = string.substring(0, printable.length+1);
    }
    else
    {
        typeSpeed = 100;
        printable = string.substring(0, printable.length-1);
    }

    writable.innerHTML = `<span id="text">${printable}</span>`;

    if(!isDeleting && printable == string)
    {
        typeSpeed = 1000;
        isDeleting = true;
        document.getElementById("text").classList.add("blinking")
    }

    else if(isDeleting && printable == "")
    {
        typeSpeed = 1000;
        isDeleting = false;
        wordIndex++;
        document.getElementById("text").classList.add("blinking")
    }

    if(!isDeleting && wordIndex == myArray.length)
    {
        wordIndex = 0;
    }

    setTimeout(() => hello() ,typeSpeed)

}

hello();