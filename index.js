let login = false;

function changeLogin() {
  console.log(login);
  login = !login;
}

var regModal = document.getElementById('registerModal');
var logModal = document.getElementById('loginModal');

// Function to open the modal
function openModal() {
    logModal.style.display='none'
    regModal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    regModal.style.display = 'none';
    logModal.style.display='none'
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};

function displayLoginModal(){
    regModal.style.display = 'none';
    logModal.style.display='block'
}