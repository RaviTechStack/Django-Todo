let add = document.querySelector(".addtodo")
let updt = document.querySelectorAll(".updt")
let add_view = document.querySelector(".todo-input")
let cancel = document.querySelector(".cancel")

add.addEventListener("click", ()=>{
    add_view.style.transform = "translateY(0%)"
})
// updt.addEventListener("click", ()=>{
//     add_view.style.transform = "translateY(0%)"
// })
cancel.addEventListener("click", ()=>{
    add_view.style.transform = "translateY(-100%)"
})

let complete_btn = document.querySelectorAll(".green")

complete_btn.forEach((btn, index)=>{
    btn.addEventListener("click", (e)=>{
        let full_btn = e.target
        let btn_text = full_btn.innerText

        if(btn_text == "complete"){
            full_btn.innerText = "completed"
        }
        else{
            full_btn.innerText = "complete"
        }

        localStorage.setItem("btnText", full_btn.innerText)
    })
})

let isStored = localStorage.getItem("btnText")

if(isStored){
    complete_btn.forEach(btn=>{
        btn.innerText = isStored
    })
}

const Search = () =>{
    let input = document.querySelector("#search").value.toUpperCase()
    let tbdy = document.querySelector("tbody")
    let tr = tbdy.querySelectorAll("tr")

    for(var i=0; i<tr.length; i++){
        let td = tr[i].querySelectorAll("td")[1]
        let check = td.textContent || td.innerHTML
        if(check.toUpperCase().indexOf(input)> -1){
            tr[i].style.display = ""
        }
        else{
            tr[i].style.display = "none"
        }
    }
}

let inpt = document.querySelector("#add-todo")

const update = (id)=>{
    add_view.style.transform = "translateY(0%)"
    let option = {
        method : 'PUT',
        body : JSON.stringify({
            todoContent : "changed"
        }),
        header : "application/json"
    }
    fetch(`retreive/${id}`).then((respon)=>{
        return respon.json()
    }).then(value =>{
        inpt.value = value.content
    }).catch(err =>{
        console.log("error in here")
    })
}

const show = ()=>{
    fetch("response.json").then((res)=>{
        return res.json()
    }).then((val)=>{
        console.log(val)
    }).catch(err=> "error")
}

document.querySelector(".submit-todo").addEventListener("click", (e)=>{
    e.preventDefault
    Tadd()
})
const Tadd = ()=>{
    fetch(`addtod`, {
        method : 'POST',
        body : JSON.stringify({
            todoContent : document.getElementById("add-todo").value

        }),
        headers : {
            "Content-Type" : "apllication/json"
        },

    })
}