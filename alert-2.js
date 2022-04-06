// alert is a pop up. it works when you click and it will show a pop up with one option.
// confirm is also a pop up. when you will click it will show two option as a conditional
// prompt is also a pop up. it will show an input field with two conditional option.


function maComing() {
    console.log('working');
    alert('ma is coming')
}

// const goingPicnic = () => {
//     // alert('picnic e jamu na');
//     // confirm('picnic jamu na');
//     console.log(confirm('picnic jamu na'))
// }

// const goingPicnic = () => {
//     const response = confirm('are you going to picnic');
//     console.log(response);

//     if (response === true) {
//         alert('amk fee ta bkash kore de')
//     } else {
//         alert('dure giya mor beta')
//     }
// }


const goingPicnic = () => {
    const response = prompt('what is your name?');


    if (response) {
        console.log(response)
    }
}