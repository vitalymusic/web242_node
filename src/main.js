import $ from 'jquery';
import SliderPro, { Autoplay, Buttons, Thumbnails } from 'slider-pro-js';
import 'slider-pro-js/build/slider-pro.css';


$(document).ready(()=>{
    $('h3')
    .css({
        color:"red",
        fontSize:"55pt"
    })
    .click(()=>{
        alert("Clicked once")
    })


    // Slider


})


document.addEventListener( 'DOMContentLoaded', () => {
    const mySlider = new SliderPro( '#my-slider', {
        addOns: [ Autoplay, Buttons, Thumbnails ],
        width: '100vw',
        imageScaleMode:'cover'
    });
})