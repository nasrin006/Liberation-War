const contactForm = document.getElementById("contactForm");
console.log(contactForm);

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputName = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;
    let errorMessage = "";

    if (inputName === "") {
      isValid = false;
      errorMessage += "Name is required.\n";
    }

    if (email === "") {
      isValid = false;
      errorMessage += "Email is required.\n";
    } else {
      const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!pattern.test(email)) {
        isValid = false;
        errorMessage += "Please enter a valid email address.\n";
      }
    }

    if (message === "") {
      isValid = false;
      errorMessage += "Message cannot be empty.\n";
    }

    if (isValid) {
      alert("Form Submitted Successfully!");
      contactForm.reset();
    } else {
      alert(errorMessage);
    }
  });
}


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