function sendMail(contactForm) {
    emailjs.send("gmail", "mathijs", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.og("SUCCESS", response);
        },
        function(error){ 
            console.log("FAILED", error);
        });
        return false;
}