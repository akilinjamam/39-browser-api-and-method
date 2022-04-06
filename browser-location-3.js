// the browser has a location in the inspect. when you type location in the console. it will show full location at the top of the screeen in a search box. they are divided into lots of parts. u can check every part of the website with this location. 

const refreshPage = () => {
    // location.reload();

    setTimeout(function () {
        console.log('working');
        location.reload();
    }, 3000)

}