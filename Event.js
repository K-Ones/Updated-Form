var inputs = ["Fname", "Lname", "date", "address", "phone", "email"];

for (var i = 0; i < inputs.length; i++) {
    var input = document.getElementById(inputs[i]);

    input.addEventListener("keyup", function() {
        if (this.value.trim() === "") {
            this.classList.add("error");
            this.classList.remove("success");
        } else {
            this.classList.remove("error");
            this.classList.add("success");
        }
    });

    input.addEventListener("blur", function() {
        if (this.value.trim() === "") {
            this.classList.add("error");
            this.classList.remove("success");
        } else {
            this.classList.remove("error");
            this.classList.add("success");
        }
    });
}

document.getElementById("KyleForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var valid = true;

    for (var i = 0; i < inputs.length; i++) {
        var input = document.getElementById(inputs[i]);
        if (input.value.trim() === "") {
            input.classList.add("error");
            input.classList.remove("success");
            valid = false;
        }
    }

    if (valid) {
        alert("Form submitted successfully!");
        this.reset();
        for (var i = 0; i < inputs.length; i++) {
            document.getElementById(inputs[i]).classList.remove("success");
        }
    } else {
        alert("Please fill in all fields.");
    }
});
