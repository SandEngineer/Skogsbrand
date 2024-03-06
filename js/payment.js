// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
"use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Fetches form data, saves it to session, redirects to confirmation page
  function submitForm() {

    // Get form data
    const date = document.getElementById("userDate").value;
    const tickets = document.getElementById("userTickets").value;
    const name = document.getElementById("userName").value;
    const lastname = document.getElementById("userLastname").value;
    const email = document.getElementById("userEmail").value;
    const phone = document.getElementById("userPhone").value;

    // Get selected payment option
    const paymentOption = document.querySelector(
      'input[name="paymentOption"]:checked'
    ).value;

    // Create a JavaScript object with the form data
    const formData = {
      date: date,
      tickets: tickets,
      name: name,
      lastname: lastname,
      email: email,
      phone: phone,
      paymentOption: paymentOption,
    };

    // Convert the object to a JSON string
    const jsonData = JSON.stringify(formData);

    // Save the JSON data to localStorage (you can also use sessionStorage)
    localStorage.setItem("formData", jsonData);

    // Redirect to another page (replace 'display.html' with your desired filename)
    window.location.href = "confirmation.html";
  }

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        // If validation is successful, run the submit & redirect func
        else {
            submitForm();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
