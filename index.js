function createNode(element){
    return document.createElement(element);
}

function append(parent,el){
    return parent.appendChild(el);
}

var num = 0;
const items = []
let flag = false;
function newItem(id,title,content){
    this.id = id;
    this.title = title;
    this.content = content;

}

const overview = document.getElementById("overviewContainer")

const data = document.getElementById("dataContainer")
const addButton = document.getElementById("addButton")
const removeButton = document.getElementById("removeButton")
const noteList = document.querySelectorAll(".tinyNote")


addButton.addEventListener("click",createNote)
removeButton.addEventListener("click",removeNote)
const title = document.querySelector(".title")
const contentBody = document.querySelector(".contentBody")




let theTitle = (e) =>{
    //console.log(e.target.value)
    return e.target.value
    //console.log(title1)
    
    
}
let theContent = (e)=>{
    return e.target.value
}

function createNote(e){
    
    e.preventDefault()
    e.stopPropagation()
    if(items.length != 0){
        data.removeChild(data.childNodes[0])
        data.removeChild(data.childNodes[0])
        
    }
    
    console.log("i clicked")
    let title = createNode("input")
    let body = createNode("textarea")
    
    title.type="text"
    title.setAttribute("value","")
    title.placeholder = " Title"
    title.focus()
    console.log(title)
    title.className = "title"
    body.placeholder = "Type here"
    body.className = "contentBody"
    body.setAttribute("value","")
    body.focus()
    
    append(data,title)
    append(data,body)
    
    let item = new newItem(++num,"","")
    let tinyNote = createNode("div")
    tinyNote.className = "tinyNote"
    tinyNote.setAttribute("id",item.id)
    tinyNote.setAttribute("onclick","updateNotes(this.id)")

    //console.log(item.id)
    overview.insertBefore(tinyNote,overview.childNodes[0])
    // console.log(item)
    document.querySelector(".title").addEventListener("input",(e)=>{
       
        item.title = e.target.value
        //console.log(item.id)
        document.getElementById(item.id).innerText = e.target.value
    })
    document.querySelector(".contentBody").addEventListener("input",(e) =>{
        item.content = e.target.value
    })

    items.unshift(item)
    // console.log(item)
    
    
    //console.log(item)

    // var newItem = {
    //     id : num+1,
    //     title : theTitle(),
    //     body : theContent(),
        
    // }
   
    
    
}





function updateNotes(id){
    data.removeChild(data.childNodes[0])
    data.removeChild(data.childNodes[0])

    let title = createNode("input")
    let body = createNode("textarea")
    // let body = createNode("div")
    title.type="text"
    title.setAttribute("value","")
    title.placeholder = " Title"
    title.focus()
    console.log(title)
    title.className = "title1"
    body.placeholder = "Type here"
    body.className = "contentBody1"
    body.setAttribute("value","")
    // body.focus()
    // body.setAttribute("contenteditable","true")
    append(data,title)
    append(data,body)
    let newId = parseInt(id)
    console.log(newId)
    items.forEach((item)=>{
        if(item.id === newId){
            console.log(data.childNodes[0].id)
            document.querySelector(".title1").setAttribute("id",newId)
            
            document.querySelector(".title1").value = item.title
            document.querySelector(".contentBody1").value = item.content
            
            document.querySelector(".title1").addEventListener("input",(e)=>{
       
                item.title = e.target.value
                //console.log(item.id)
                document.getElementById(item.id).innerText = e.target.value
            })
            document.querySelector(".contentBody1").addEventListener("input",(e) =>{
                item.content = e.target.value
            })
            
        }
    })
}

function removeNote(e){
    console.log('i get removed')
    let getId = data.childNodes[0].id
    let remove = document.getElementById(getId)
    let i ;
    console.log(getId)
    overview.removeChild(remove)
    items.forEach((item,index)=>{
        console.log("inside")
        console.log(item.id)
        if(item.id === parseInt(getId)){
            i = index;
            console.log(index)
            items.splice(index,1)
            console.log(items)
            

        }

    })
    let itemData = items[i]
    console.log(itemData)
    document.querySelector(".title1").value = itemData.title
    document.querySelector(".contentBody1").value = itemData.content
    document.querySelector(".title1").addEventListener("input",(e)=>{
       
        itemData.title = e.target.value
        //console.log(item.id)
        document.getElementById(itemData.id).innerText = e.target.value
    })
    document.querySelector(".contentBody1").addEventListener("input",(e) =>{
        itemData.content = e.target.value
    })
    


}