
const button = document.getElementById("loading-button");

button.addEventListener("click", () => {

  button.disabled = true;


  button.classList.add("button-loader");


  setTimeout(() => {

    button.disabled = false;


    button.classList.remove("button-loader");
  }, 6000);
});
function login() {

  alert("Login button clicked!");
}
function login() {
 
  alert("Login button clicked!");
}




