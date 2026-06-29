// Login user

const loginInp = document.querySelector("#loginInp");
const loginPass = document.querySelector("#loginPass");
const login = document.querySelector("#login");

const loginUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const name = loginInp.value.trim();
  const pass = loginPass.value.trim();

  if (!user) {
    alert("User does not exists");
    return false;
  }

  if (name === "" || pass === "") {
    alert("Please fill all the fields");
    return false;
  }

  if (user.name === name && user.pass === pass) {
    return true;
  } else {
    alert("Invalid Credentials");
    return false;
  }
};

if (login) {
  login.addEventListener("submit", (e) => {
    e.preventDefault();

    const res = loginUser();

    if (res) {
      login.reset();
      window.location.href = "dashboard.html";
    } else {
        login.reset();
    }
  });
}

// Sign Up user

const signInp = document.querySelector("#signInp");
const signPass = document.querySelector("#signPass");
const signUp = document.querySelector("#signUp");

const userSignUp = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const name = signInp.value.trim();
  const pass = signPass.value.trim();

  if (name === "" || pass === "") {
    alert("Please fill the fields");
    return false;
  }

  if (user && user.name === name) {
    alert("Username already exists!!!");
    return false;
  }

  localStorage.setItem(
    "user",
    JSON.stringify({
      name,
      pass,
    }),
  );

  return true;
};

if (signUp) {
  signUp.addEventListener("submit", (e) => {
    e.preventDefault();

    const res = userSignUp();

    if (res) {
      alert("User Created Successfully!!");
      window.location.href = "index.html";
    }
  });
}
