// -------------------------- Home work --------------------------
// ----------------------- Ivanova Anastasiia --------------------

// ------------------------------ 2 ------------------------------
// ----------------------------- 2.1 -----------------------------

function isParent(parent, child) {
    return parent === child.parentElement ? true : false; 
}

// ----------------------------- 2.2 -----------------------------
let links = Array.from(document.querySelectorAll('body a')).filter(link => !link.closest('ul'));

// ----------------------------- 2.3 -----------------------------
let ulPrev = document.querySelector('ul').previousElementSibling;
let ulNext = document.querySelector('ul').nextElementSibling;

// ----------------------------- 2.4 -----------------------------
let aLi = Array.from(document.querySelectorAll('body li'));

console.log(aLi.length);

// or
// let aLi = document.getElementsByTagName('ul')[0].getElementsByTagName('li');

// ------------------------------ 3 ------------------------------
// ----------------------------- 3.1 -----------------------------
let par = document.querySelector('p');

console.log(par.textContent);

// ----------------------------- 3.2 -----------------------------
function typeInf(node) {
    let inf = {};

    inf.type = node.nodeType;
    inf.name = node.tagName;
    inf.childrenNumber = node.children.length ? node.children.length : 0;
    return inf;
}

// ----------------------------- 3.3 -----------------------------
function getTextFromUl() {
    let arr = [];
    let ul = document.getElementsByTagName('li');
  
    for (let i = 0; i < ul.length; i++) {
      arr.push(ul[i].textContent);
    }
    return arr;
}

// ----------------------------- 3.4 -----------------------------
let paragraph = document.querySelector('p');
let parChild = paragraph.childNodes;

for (let i = 0; i < parChild.length; i++) {
   if (parChild[i].nodeType === 3) {
    parChild[i].data = '-text-';
   }
};

// ------------------------------ 4 ------------------------------
// ----------------------------- 4.1 -----------------------------
let list = document.querySelector('ul');
list.classList.add('list');

// ----------------------------- 4.2 -----------------------------
let link = document.querySelector('ul').nextElementSibling;
link.setAttribute('id', 'link');

// ----------------------------- 4.3 -----------------------------
let item = list.getElementsByTagName ('li');
for (let i = 0; i < item.length; i++) {
    if (i % 2 === 0) {
        item[i].setAttribute('class', 'item');
    }
}

// ----------------------------- 4.4 -----------------------------
let cLink = document.querySelectorAll('a');

for (let i = 0; i < cLink.length; i++) {
    cLink[i].setAttribute('class', 'custom-link');
};

// ------------------------------ 5 ------------------------------
// ----------------------------- 5.1 -----------------------------
let newItem = document.querySelector('ul');

for (let i = 0; i < 3; i++) {
  let newli = document.createElement('li');
  newli.setAttribute('class', 'new-item');
  newli.textContent = 'item' + (newItem.children.length + 1);
  newItem.appendChild(newli);
};

// ----------------------------- 5.2 -----------------------------
let strong = document.getElementsByTagName('ul')[0].getElementsByTagName('a');
for (let i = 0; i < strong.length; i++) {
    let createUl = document.createElement('strong');
    strong[i].appendChild(createUl);
}
console.log(strong);

// ----------------------------- 5.3 -----------------------------
let img = document.createElement('img');
document.body.insertBefore(img, document.body.firstChild);
document.body.firstChild.setAttribute('src', 'img.jpg');
document.body.firstChild.setAttribute('alt', 'image');

// ----------------------------- 5.4 -----------------------------
let green = document.getElementsByTagName('mark')[0];
green.innerHTML += " green";
green.classList.add('green');

// ----------------------------- 5.5 -----------------------------
let arrLi = document.querySelector('ul').children;
let newArrLi = [];

for (let i = 0; i < arrLi.length; i++) {
  newArrLi.push(arrLi[i].textContent);
};

newArrLi.sort(function (a, b) {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    }
  });
  
for (let i = 0; i < arrLi.length; i++) {
  arrLi[i].innerHTML = newArrLi[i];
};
