
'use strict';
import {User, Subscriber} from "./User.js";
import { onEvent, getElement, select, print } from "./utils.js";

const center = select('.center');
const input = select('.input');
const post = select('.post');
const info = select('.info');
const appending = select('.appending');
const image = select('.image');
const profile = select('.pro-pic');
const popMessage = select('.pop-up');
const data = select('.data');

function date() {

const today = new Date();
return `${today.toDateString().substring(4,15)}`;
}




function getImgData() {
    window.URL = window.URL || window.webkitURL;
    let file = image.files[0];
    let url = URL.createObjectURL(file)
    return url;
}


function newDivs() {
    
            let newDiv = document.createElement("div");
            appending.prepend(newDiv);
            newDiv.classList.add('blog');
            
            let anotherdiv = document.createElement("div");
            newDiv.appendChild(anotherdiv);
            anotherdiv.classList.add('heading');
            
            anotherdiv.innerHTML = `<div class="heading">
            <div><img src="./assets/img/nature.jpg" alt="" class="pro-pic"></div>
            <h3 class = "user">PREET</h3></div>`;
           


            let date1 = document.createElement("div");
            anotherdiv.appendChild(date1);
            date1.innerText = `${date()}`;
            date1.classList.add('date')

            let words = document.createElement("p");
            newDiv.appendChild(words);
            words.classList.add('words');
            words.style.color = '#000';
            words.innerText = `${input.value}`;

            let picture = document.createElement("img");
            newDiv.appendChild(picture);
            picture.classList.add('picture');
            picture.style.display = "block";
            picture.src = getImgData();
            input.value = '';

 }
function validation() {
    if (input.value !== '' || image.files.length > 0) {
        info.innerText = '';
        newDivs();

    } else if (input.value === '') {
        info.innerText = 'Please Input Details';
   
}}


onEvent('click', post, function () {
    event.preventDefault();
  validation();
});

onEvent('click', profile,function() {
    print('hello');
    data.style.display = 'grid';
       data.style.visibility = 'visible';
data.innerText = `${subscriber.getInfo()}`;

})

const subscriber = new Subscriber (175588,'Preet','Preet213','bawa@gmail.com','562','45th');


