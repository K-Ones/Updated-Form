$(document).ready(function() {
    var inputs = ["#Fname", "#Lname", "#date", "#address", "#phone", "#email"];

    function validateInput(input) {
        var value = $(input).val().trim();
        var errorSpan = $(input).next(".error-message");

        if (value === "") {
            $(input).removeClass("success").addClass("error");
            errorSpan.text("This field is required");
            return false;
        } else {
            $(input).removeClass("error").addClass("success");
            errorSpan.text("");
            return true;
        }
    }

    $.each(inputs, function(index, input) {
        $(input).on("keyup blur", function() {
            validateInput(this);
        });
    });

    $("#KyleForm").submit(function(e) {
        e.preventDefault();
        var isValid = true;

        $.each(inputs, function(index, input) {
            if (!validateInput(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            alert("Form submitted successfully!");
            $(this)[0].reset();
            $(".error-message").text("");
            $("input").removeClass("success error");
        } else {
            alert("Please fill in all fields.");
        }
    });
});
