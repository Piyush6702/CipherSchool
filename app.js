// get all the labels first
let labels=document.querySelectorAll(".form-items label")


// now iterate through each label 
labels.forEach(label =>{
    label.innerHTML=label.innerText.
    split('')
    .map((letter,idx)=>
        `<span style="transition-delay:${idx*60}ms">${letter}</span>`
    )
    .join('')
})