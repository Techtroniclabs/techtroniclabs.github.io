/* Initialize Contact Us
 * ------------------------------------------------------ */

function sendMail() {

     var fullname = document.getElementById("fullName").value;
     var email = document.getElementById("email_id").value;
     var project_type = document.getElementById("project_type").value;
     var message = document.getElementById("message").value;

     var params = {
          from_name: fullname,
          email_id: email,
          message: message,
          project_type: project_type
     }

     if ((fullname == null || fullname == "")) {
          document.getElementById("fullName").focus;
     } else if((email == null || email == "")){
          document.getElementById("email_id").focus;
     } else if((message == null || message == "")){
          document.getElementById("message").focus;
     }else{
          emailjs.send("service_otavxiq", "template_mlemozg", params).then(function (res) { });
          alert("Thankyou for contacting, we will get back to you soon!");
     }

}
