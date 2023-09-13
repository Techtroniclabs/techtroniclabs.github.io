   /* Initialize Contact Us
    * ------------------------------------------------------ */
  

    function sendMail(){
        // var pt = document.getElementById("projectType").value;
        // var message = document.getElementById("edt_message").value;

        var params = {
            from_name : document.getElementById("edt_name").value,
            from_email : document.getElementById("edt_email").value,
            from_message : document.getElementById("edt_message").value
        }
        
        emailjs.send("service_sibh8dm", "template_mlemozg", params).then(function(res) {
            alert("success!!"+res.status);
        })
    }
