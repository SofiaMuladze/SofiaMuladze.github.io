
(function () {
emailjs.init("4AyC6t-ChVb2cRpZb");
})();
// listen to the form submission
document
.getElementById("myForm")
.addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_5duzeii";
    const templateID = "template_e66ikzg";

    // send the email here
    emailjs.sendForm(serviceID, templateID, this).then(
        (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("SUCCESS!");
        },
        (error) => {
            console.log("FAILED...", error);
            alert("FAILED...", error);
        }
    );
});
