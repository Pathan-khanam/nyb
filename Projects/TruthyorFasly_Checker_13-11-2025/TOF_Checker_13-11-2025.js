function checkValue(){
    const input=document.getElementById("valueInput").value;
    let evaluatedValue;

 //try to safely evaluate the value (convert to real JS type)
 try{
    evaluatedValue=eval(input)
 }catch{
    evaluatedValue=input;//treat as string if invalid expression
 }

 const isTruthy=!!evaluatedValue;
 const outputDiv=document.getElementById('output')

 outputDiv.innerHTML=`<p>Value:<b>${input}</b></p>
                      <p>Evaluated Type: <b>${typeof evaluatedValue}</b></p>
                      <p>!!Value: <b>${isTruthy}</b></p>
                      <p>Status: <b>${isTruthy ? "Truthy ✅️":"Fasly ❌"}</b></p>`;

outputDiv.classList="result" + (isTruthy? "truthy":"fasly");
}