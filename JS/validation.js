var uploadField = document.getElementById("imgBtn");

uploadField.onchange = function() {
    if(this.files[0].size > 1000000){
       alert("File is too big!");
       this.value = "";
    };
};

function validateInput(){
    var uname = document.getElementById('uname').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;

    if( /[^a-zA-Z0-9]/.test(uname) ) {
       alert('Username is not alphanumeric');
    }



    else if( /[^a-zA-Z0-9]/.test(fname) ) {
       alert('First name is not alphanumeric');
    }



    else if( /[^a-zA-Z0-9]/.test(lname) ) {
       alert('Last name is not alphanumeric');
    }

    else{
        alert("User added");
    }





}

