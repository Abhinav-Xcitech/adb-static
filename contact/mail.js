(function () {
  "use strict";

  let forms = document.querySelectorAll(".career_form");
  console.log(forms);

  forms.forEach(function (e) {
    e.addEventListener("submit", function (event) {
      event.preventDefault();
      
      let thisForm = this;

      let action = thisForm.getAttribute("action");


      if (!action) {
        displayError(thisForm, "The form action property is not set!");
        return;
      }
      //thisForm.querySelector('.loading').classList.add('d-block');
      //thisForm.querySelector('.error-message').classList.remove('d-block');
      //thisForm.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData(thisForm);

      php_email_form_submit(thisForm, action, formData);
    });
  });

  function php_email_form_submit(thisForm, action, formData) {
      console.log('-------------------------------')
      console.log(formData);
    $.ajax({
      url: action,
      type: "POST",
      data: formData,
    //   dataType: "json",
      cache: false,
    //   contentType: "application/json; charset=utf-8",
      processData: false,
      success: function (data) {
        thisForm.querySelector(".loading").classList.remove("d-block");
        if (data.trim() == "OK") {
          thisForm.querySelector(".sent-message").classList.add("d-block");
          thisForm.reset();
        } else {
          throw new Error(
            data
              ? data
              : "Form submission failed and no error message returned from: " +
                action
          );
        }
      },
    });
  }

  function displayError(thisForm, error) {
    thisForm.querySelector(".loading").classList.remove("d-block");
    thisForm.querySelector(".error-message").innerHTML = error;
    thisForm.querySelector(".error-message").classList.add("d-block");
  }
})();
