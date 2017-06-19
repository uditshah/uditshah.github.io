
function validateForm(form) {	
	var name = form['name'].value;
    var surname = form['surname'].value;
    var email = form['email'].value;        
    var dob = form['dob'].value;
    var gender = form['gender'].value;                
    var haserros = false;
     $(".error").empty();
        $(".success").empty();

        $(".error").append("<i class='fa fa-2x fa-exclamation-triangle'></i><b>Please correct below errors:</b>")
        if(name.length===0){
            $(".error").append("<li>First Name is required.");
            haserros=true;
        }else if(name.length<5){
            $(".error").append("<li>First Name must be atleast 5 letters.");
            haserros=true;
        }
        
        if(surname.length===0){
            $(".error").append("<li>Last Name is required.")
            haserros=true;
        }else if(surname.length< 8){
            $(".error").append("<li>Last Name must be atleast 8 letters.");
            haserros=true;
        }

        var regEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

        if(email.length===0){
            $(".error").append("<li>Email is required.");
            haserros=true;
        }else if(!regEmail.test(email)){
            $(".error").append("<li>Invalid email address.");
            haserros=true;
        }

		if(dob.length===0){
            $(".error").append("<li>Date of Birth is required.")
            haserros=true;
        }

        if(gender.length===0){
            $(".error").append("<li>Gender is required.")
            haserros=true;
        }

        if(!form['terms'].checked){
            $(".error").append("<li>You must agree to terms & conditions.");
            haserros=true;
        }

        if(haserros){
            $(".error").removeClass("hidden");
            $(".success").addClass("hidden");            
        }
        return !haserros;
}