document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  console.log(contactForm);

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputName = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let errorMessage = "";

    if (inputName === "") {
      errorMessage += "Name is required\n";
    }

    if (email === "") {
      errorMessage += "Email is required\n";
    } else {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!pattern.test(email)) {
        errorMessage += "Invalid email\n";
      }
    }

    if (message === "") {
      errorMessage += "Message is required\n";
    }

    if (errorMessage === "") {
      alert("Form Submitted Successfully!");
      contactForm.reset();
    } else {
      alert(errorMessage);
    }
  });
});



const updateDateTime = () => {
  const timeContainer = document.getElementById("dateTime"); 
  if (timeContainer) {
    const now = new Date();
    const localFormate = now.toLocaleString("en-US", {   
    });
    timeContainer.innerHTML = localFormate;
  }
};

setInterval(updateDateTime, 1000);