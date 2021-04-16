// DOM Elements (Nodes)

// getElementById()
//document is referring to the HTML page
// const title = document.getElementById('title');
// // querySelector()

// const containerDiv = document.querySelector('.container');
// console.log(containerDiv);//at the moment, this should not work

// // title using querySelector?
// const title = document.querySelector('#title');
// console.log(title);

//Grab all elements and print to the console
// const paraOne = document.getElementById('#one');
// console.log(paraOne);

// const paraTwo = document.querySelector('#two');
// console.log(paraTwo);

// const containerTwoList = document.getElementsByClassName('.container-2');//HTML collection
// console.log(containerTwoList);

// const containerTwoList2 = document.querySelectorAll('.container-2'); // NodeList
// console.log(containerTwoList2)

// const containerTwoArray = Array.from(containerTwoList2);
// console.log(containerTwoArray)

// for (let i = 0; i < containerTwoArray.length; i++) {
//     let element = containerTwoArray[i];
//     console.log(element);
// }

const pOne = document.querySelector('#one');
console.log(pOne);
console.log(pOne.textContent);
pOne.textContent = 'Goodbye';
console.log(pOne.textContent);

const pTwo = document.querySelector('#two');
console.log(pTwo);
console.log(pTwo.textContent);
pOne.textContent = ('Mclaren 720s');
console.log(pTwo.textContent);

// Creating some elements
const newDiv = document.createElement('div');
console.log(newDiv);

newDiv.textContent = 'Porsche 911';
// Append something to the page
//1. Grab an existing element off the page
//2. Append the new element to the page
const body = document.querySelector('body');
body.append(newDiv);

// const soccerImage = document.querySelector('.image');
// soccerImage.src = "https://media.istockphoto.com/photos/feet-of-soccer-player-tread-on-soccer-ball-for-kickoff-in-the-stadium-picture-id992892836?k=6&m=992892836&s=612x612&w=0&h=CkqH_pw1zVZFdac7Z0x8dYt1FbBYROKJtHSFy-6PjgU="
// console.log(soccerImage);

function makeNewImg() {
//Creating new image element
    const mclaren = document.createElement('img');
    console.log(mclaren);

    mclaren.src = "https://img.drivemag.net/media/default/0001/95/mclaren-720-s-track-pack-2321-default-large.jpeg"
    const bodyimg = document.querySelector('body');
    body.append(mclaren);
}
makeNewImg();

function makeNewImg2() {
    const buick = document.createElement('img');
    console.log(buick);
    
    buick.src = "https://img.hmn.com/900x0/stories/2016/12/3.jpg"
    const bodyimg = document.querySelector('body');
    body.append(buick);
    }
    makeNewImg2();
    
    
    function makeNewImg3() {
        const porsche = document.createElement('img');
        console.log(porsche);
        
        porsche.src = "https://i.pinimg.com/736x/63/7a/5b/637a5b5ce66f1b27e6cfb7562f78ec56.jpg"
        const bodyimg = document.querySelector('body');
        body.append(porsche);
        }
        makeNewImg3();

// function changeText(ref, newText) {
//     console.log(ref);
//     console.log(ref.textContent);
//     ref.textContent = newText;
//     console.log(ref.textContent);
// }

// const addElement = (elementName, content, target) => {
//     const element = document.createElement(elementName)
//     element.textContent = content
//     target.appendChild(element)
//   }
//   addElement('p', 'this was added by my addElement function 🙂', document.body)

function imgStyle() {
document.getElementsByClassName(".img").style.alignItems = "flex-start";
    const image = document.querySelector(".img");
    image.style.alignItems = "flex-start";
}