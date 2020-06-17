
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



addButton.addEventListener("click",createNote)
removeButton.addEventListener("click",removeNote)
const title = document.querySelector(".title")
const contentBody = document.querySelector(".contentBody")


function createNote(e){
    
    e.preventDefault()
    e.stopPropagation()
    if(items.length != 0){
        data.removeChild(data.childNodes[0])
        data.removeChild(data.childNodes[0])
        
    }
    
    //Creating 2 nodes inside data-container node
    noteCreator("title","contentBody")
    
    let item = new newItem(++num,"","")
    let tinyNote = createNode("div")
    tinyNote.className = "tinyNote"
    tinyNote.setAttribute("id",item.id)
    tinyNote.setAttribute("onclick","updateNotes(this.id)")
    if(overview.hasChildNodes()){
        overview.childNodes[0].classList.remove("highlight1")
    }
    
    overview.insertBefore(tinyNote,overview.childNodes[0])
    overview.childNodes[0].classList.add("highlight1")
    document.querySelector(".title").addEventListener("input",(e)=>{
        item.title = e.target.value
        document.getElementById(item.id).innerText = e.target.value
    })
    document.querySelector(".contentBody").addEventListener("input",(e) =>{
        item.content = e.target.value
    })
    items.unshift(item)

}





function updateNotes(id){
    data.removeChild(data.childNodes[0])
    data.removeChild(data.childNodes[0])

    removeHighlight()

    // (function(){
    //     let noteList = document.querySelectorAll(".tinyNote")
    //     console.log("i m IIFE")
    //     noteList.forEach((note)=>{
    //         note.classList.remove("highlight")
    //     })
    // })()
    
    document.getElementById(id).classList.add("highlight")
    noteCreator("title1","contentBody1")

    let newId = parseInt(id)
    console.log(newId)
    items.forEach((item)=>{
        if(item.id === newId){
            document.querySelector(".title1").setAttribute("id",newId)
            document.querySelector(".title1").value = item.title
            document.querySelector(".contentBody1").value = item.content
            
            document.querySelector(".title1").addEventListener("input",(e)=>{
                item.title = e.target.value
                document.getElementById(item.id).innerText = e.target.value
            })
            document.querySelector(".contentBody1").addEventListener("input",(e) =>{
                item.content = e.target.value
            })
            
        }
    })
}


function removeNote(e){
    if(items.length == 0){
        
        return
    }
    let getId = data.childNodes[0].id
    let remove = document.getElementById(getId)
    let i ;
    overview.removeChild(remove)
    items.forEach((item,index)=>{
        if(item.id === parseInt(getId)){
            i = index;
            items.splice(index,1)
            
        }

    })
    if(items.length === 0){
        data.removeChild(data.childNodes[0])
        data.removeChild(data.childNodes[0])
    }
    
    else if(i === items.length){
        let itemData = items[i-1]
        document.querySelector(".title1").value = itemData.title
        document.querySelector(".contentBody1").value = itemData.content
        document.querySelector(".title1").addEventListener("input",(e)=>{
        
            itemData.title = e.target.value
            document.getElementById(itemData.id).innerText = e.target.value
        })
        document.querySelector(".contentBody1").addEventListener("input",(e) =>{
            itemData.content = e.target.value
        })

    }
    else{
        console.log(" i am in middle")
        let itemData = items[i]
        console.log(itemData)
        document.querySelector(".title1").value = itemData.title
        document.querySelector(".contentBody1").value = itemData.content
        document.querySelector(".title1").addEventListener("input",(e)=>{
        
            itemData.title = e.target.value
            document.getElementById(itemData.id).innerText = e.target.value
        })
        document.querySelector(".contentBody1").addEventListener("input",(e) =>{
            itemData.content = e.target.value
        })
    }
    
    


}

function removeHighlight(){
    let noteList = document.querySelectorAll(".tinyNote")
    console.log(noteList)
    noteList.forEach((note)=>{
        note.classList.remove("highlight")
    })
}