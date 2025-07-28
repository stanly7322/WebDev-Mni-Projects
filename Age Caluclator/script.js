let currDate= document.getElementById("currDate");
var today = new Date();
currDate.innerText=`Today's Date is : ${today.toLocaleDateString('as-IN')}`;

let DOB = document.querySelector("#DOB");
const displayAge= document.getElementById("displayAge");
const age= document.getElementById("age");


function caluclateAge() {
    var userAge = 0;
    console.log(DOB.value);
    
    let birthDate = new Date(DOB.value);
    console.log(birthDate);

    if (isNaN(birthDate.getDate())) {
        alert("Enter Proper Date of Birth!");
        displayAge.style.visibility = "hidden";
        return;
    }

    userAge = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
                
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        userAge--;
    }
                
    displayAge.style.visibility = "visible";
    age.innerText = `You are ${userAge} years old.`;
    return;
}