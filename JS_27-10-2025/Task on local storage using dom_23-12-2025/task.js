const page= document.getElementById("hi");

function checkauth(){
    const token =localStorage.getItem("authToken");
    if(token){
        showHomeScreen();
    }else {
        showlogin()   
     }
}

function showlogin(){
    page.innerHTML ="";

    const  heading =document.createElement("h2")
    heading.innerText="please Login"

    const loginbtn=document.createElement("button");
    loginbtn.innerText="login"
    loginbtn.onclick=function(){
        localStorage.setItem("authToken","token123");
        checkauth()
    }
  page.appendChild(heading)
  page.appendChild(loginbtn);
}

//screen 2- home
function showHomeScreen(){
    page.innerHTML=""

    const text=document.createElement("h2");
    text.innerText="Hello User";

    const logoutbtn=document.createElement("button");
        logoutbtn.innerText='logout'

        logoutbtn.onclick=function (){
            localStorage.removeItem("authToken")
            checkauth()
        }
    page.appendChild(text)
    page.appendChild(logoutbtn)
}

checkauth()
