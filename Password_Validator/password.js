function validatePassword()
{
  var password1 = document.getElementById("password1");
  var password2 = document.getElementById("password2");
  if (password1.value.length > 7){
    if (password1.value != password2.value) {
      alert("The passwords do not match!");
    } else {
      alert("Good job, the passwords match!");
    }
  } else {
    alert("Your password is not longer than 7 characters!");
  }
};
