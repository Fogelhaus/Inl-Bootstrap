$(function () {

    $("form input").change(function () {
        if ($(this).attr("id") == "email") {
            validateEmail();
        }

        else if ($(this).attr("id") === "password") {
            validatePassword();
        }
        else if ($(this).attr("id") == "firstName") {
            validateFirstName();

        }
        else if ($(this).attr("id") == "lastName") {
            validateLastName();

        }

        else if ($(this).attr("id") === "address") {
            validateAddress();
        }
        else if ($(this).attr("id") === "city") {
            validateCity();
        }
        else if ($(this).attr("id") === "zip") {
            validateZip();
        }
        else if ($(this).attr("id") === "country") {
            validateCountry();
        }

        else if ($(this).attr("type") === "checkbox") {
            validateTerms();
        }
    });


    $("form input").on('keyup', function () {
        if ($(this).attr("id") == "email") {
            validateEmail();
        }


        else if ($(this).attr("id") == "firstName") {
            validateFirstName();

        }
        else if ($(this).attr("id") == "lastName") {
            validateLastName();

        }
        else if ($(this).attr("id") === "password") {
            validatePassword();
      
        }
        else if ($(this).attr("id") === "address") {
            validateAddress();
        }
        else if ($(this).attr("id") === "city") {
            validateCity();
        }
        else if ($(this).attr("id") === "zip") {
            validateZip();
        }
        else if ($(this).attr("id") === "country") {
            validateCountry();
        }
        else if ($(this).attr("type") === "checkbox") {
            validateTerms();

        }

    });






    $("form input").blur(function () {
        if ($(this).attr("id") == "email") {
            validateEmail();
        }


        else if ($(this).attr("id") == "firstName") {
            validateFirstName();

        }
        else if ($(this).attr("id") == "lastName") {
            validateLastName();

        }
        else if ($(this).attr("id") === "password") {
            validatePassword();
            validateConfirmPassword();
        }
        else if ($(this).attr("id") === "address") {
            validateAddress();
        }
        else if ($(this).attr("id") === "city") {
            validateCity();
        }
        else if ($(this).attr("id") === "zip") {
            validateZip();
        }
        else if ($(this).attr("id") === "country") {
            validateCountry();
        }
        else if ($(this).attr("type") === "checkbox") {
            validateTerms();

        }
    });


    function validateEmail() {

        let email = $("#email");
        let emailLength = email.val();
        if (emailLength.length > 1) {
            $("#email").addClass('is-valid');
            $("#email").removeClass('is-invalid');

            return true

        } else {
            $("#email").addClass('is-invalid');
            $("#email").removeClass('is-valid');
            return false

        }
    }

    var password = $("#password");
    function validatePassword() {

        var passwordValue = password.val();

        let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/;
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/.test(passwordValue)) {

            password.addClass('is-valid');
            password.removeClass('is-invalid');
            return true
        } else {
            password.addClass('is-invalid');
            password.removeClass('is-valid');
            return false
        }

    }

    function validateFirstName() {
        let firstName = $("#firstName");
        let firstNameLength = firstName.val();
        if (firstNameLength.length > 1) {
            $("#firstName").addClass('is-valid');
            $("#firstName").removeClass('is-invalid');

            return true

        } else {
            $("#firstName").addClass('is-invalid');
            $("#firstName").removeClass('is-valid');
            return false

        }
    }
    function validateLastName() {
        let lastName = $("#lastName");
        let lastNameLength = lastName.val();
        if (lastNameLength.length > 1) {
            $("#lastName").addClass('is-valid');
            $("#lastName").removeClass('is-invalid');
            return true
        } else {
            $("#lastName").addClass('is-invalid');
            $("#lastName").removeClass('is-valid');
            return false

        }
    }
    function validateAddress() {
        let address = $("#address");
        let addressLength = address.val();
        if (addressLength.length > 1) {
            $("#address").addClass('is-valid');
            $("#address").removeClass('is-invalid');
            return true
        } else {
            $("#address").addClass('is-invalid');
            $("#address").removeClass('is-valid');
            return false

        }
    }

  function validateCity() {
        let city = $("#city");
        let cityLength = city.val();
        if (cityLength.length > 1) {
            $("#city").addClass('is-valid');
            $("#city").removeClass('is-invalid');
            return true
        } else {
            $("#city").addClass('is-invalid');
            $("#city").removeClass('is-valid');
            return false

        }
    }
    function validateZip() {
        let zip = $("#zip");
        let zipLength = zip.val();
        if (zipLength.length > 1) {
            zip.addClass('is-valid');
            zip.removeClass('is-invalid');
            return true
        } else {
            zip.addClass('is-invalid');
            zip.removeClass('is-valid');
            return false

        }
    }
    function validateCountry() {
        let country = $("#country");
        let countryLength = country.val();
        if (countryLength.length > 1) {
            country.addClass('is-valid');
            country.removeClass('is-invalid');
            return true
        } else {
            country.addClass('is-invalid');
            country.removeClass('is-valid');
            return false

        }
    }



    function validateTerms() {
        if ($("#terms").is(":checked")) {
            $("#terms").addClass('is-valid');
            $("#terms").removeClass('is-invalid');

            return true
        } else {
            $("#terms").addClass('is-invalid');
            $("#terms").removeClass('is-valid');

            return false
        }
    }





    $('#submit').on("click", function () {
        validateEmail();
        validateFirstName();
        validateLastName();
        validatePassword();
        validateAddress();
        validateCity();
        validateZip();
        validateCountry();
        validateTerms();



        if ( validateEmail() && validateFirstName() && validateLastName() && validatePassword() && validateAddress() && validateCity() &&   validateZip() &&  validateCountry() && validateTerms()) {
            window.location.replace("profile.html");
        }

    });




   
    $('#login').on("click", function () {
        
        window.location.replace("profile.html");
    })
});