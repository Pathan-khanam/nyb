function validateEmail(){
    const email=document.getElementById("email").value.trim();
    const result=document.getElementById('result')

if(email===""){
    result.textContent="⚠️ Please enter an email address!"
    result.style.color="#ff9900"
    return;
}

    const pattern=/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if(pattern.test(email)){
        result.textContent="✅ Valid Email Address";
        result.style.color="lightgreen";
    }else{
        result.textContent="❌ Invalid Email Format";
        result.style.color='red';
    }
}
