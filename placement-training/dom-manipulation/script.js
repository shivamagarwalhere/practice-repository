// // document.getElementById('shivam').innerHTML = "Shivam"

// // const listItems = document.getElementsByClassName('list-group-item');
// // for (let i = 0; i < listItems.length; i++){
// //     listItems[i].innerHTML = `Task ${i+1}`;
// // }

// //create a div
// // let newDiv = document.createElement('div');
// // newDiv.className = 'hello';
// // newDiv.setAttribute('title', 'Hello Div');
// // const newDivText = document.createTextNode('HelloO SHivam');
// // console.log(newDivText);
// // newDiv.appendChild(newDivText);

// // let container = document.querySelector('header .container');
// // let h1 = document.querySelector('header h1');

// // console.log(newDiv);

// // newDiv.style.fontsize = '30px';

// // container.insertBefore(newDiv, h1);

// var button = document.getElementById('button');
// button.addEventListener('click', runEvent);
// button.addEventListener('mouseenter', runEvent);
// button.addEventListener('mouseleave', runEvent);

// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type);
// }
 let form = document.getElementById('addForm')
let itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem)

//add a item
function addItem(e){
    e.preventDefault();

    //Get Input Value
    let newItem = document.getElementById('item');

    //Create a new li element
    let li = document.createElement('li');

    //add a class
    
}