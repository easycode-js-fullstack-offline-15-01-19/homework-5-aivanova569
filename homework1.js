// -------------------------- Home work --------------------------
// ----------------------- Ivanova Anastasiia --------------------
// ------------------------------ 1 ------------------------------
// ----------------------------- 1.1 -----------------------------
let aHead = document.head;
console.log(aHead);

// ----------------------------- 1.2 -----------------------------
let aBody = document.body;
console.log(aBody);


// ----------------------------- 1.3 -----------------------------
for (let i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}

// ----------------------------- 1.4 -----------------------------
let aDiv = document.body.firstElementChild;
console.log(aDiv);

if (document.body.firstElementChild.children) {
    let children = document.body.firstElementChild.children;
  
    for (let i = 1; i < children.length - 1; ++i) {
      console.log(children[i]);
    }
}

