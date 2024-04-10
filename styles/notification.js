function validate(){
    var name = document.getElementById("Name").value;
    var email = document.getElementById("EmailId").value;
    var subject = document.getElementById("Subject").value;
    var message = document.getElementById("Message").value;

    if (name === "" || email === "" || subject=== "" || message === "") {
        alert("Please fill all the fields.");
        return false;
    } 
    else {
        alert("Thanks for sending message..Have a nice day😀")
        return true;
    }
}

