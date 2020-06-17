function createNode(element){
    return document.createElement(element);
}

function append(parent,el){
    return parent.appendChild(el);
}

function noteCreator(cls1,cls2){
    console.log("i am note")
    let title = createNode("input")
    let body = createNode("textarea")
    
    title.type="text"
    title.setAttribute("value","")
    title.placeholder = " Title"
    title.focus()
    console.log(title)
    title.className = `${cls1}`
    body.placeholder = "Type here"
    body.className = `${cls2}`
    body.setAttribute("value","")
    body.focus()
    
    append(data,title)
    append(data,body)

}
