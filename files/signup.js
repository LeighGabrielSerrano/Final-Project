document.getElementById("signUp").addEventListener("submit", function(event) {
  event.preventDefault(); 

  let x = true;

  document.querySelectorAll(".error").forEach(e => e.textContent = "");

  const first = document.getElementById("first");
  if (!first.value.trim()) {
    first.nextElementSibling.textContent = "Required";
    x = false;
  }

  const last = document.getElementById("last");
  if (!last.value.trim()) {
    last.nextElementSibling.textContent = "Required";
    x = false;
  }

  const email = document.getElementById("email");
  if (!email.value.trim()) {
    email.nextElementSibling.textContent = "Required";
    x = false;
  }

  const password = document.getElementById("password");
  if (!password.value.trim()) {
    password.nextElementSibling.textContent = "Required";
    x = false;
  }

  const reason = document.getElementById("reason");
  if (!reason.value.trim()) {
    reason.nextElementSibling.textContent = "Required";
    x = false;
  }

  const sex = document.querySelector('input[name="sex"]:checked');
  if (!sex) {
    document.getElementById("sexError").textContent = "Required";
    x = false;
  }

  if (x) {
    localStorage.setItem("first", first.value);
    localStorage.setItem("last", last.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("sex", sex.value);
    localStorage.setItem("reason", reason.value);
    window.location.href = "profpage.html";
  }
});
