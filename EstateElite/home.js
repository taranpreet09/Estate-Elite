function toggleAnswer(element) {
    var answer = element.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}

function showQuestions(category) {
    var contents = document.getElementsByClassName('faq-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    document.getElementById(category).style.display = 'block';
}

// -------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    var loginModal = document.getElementById("loginModal");
    var signInButton = document.querySelector(".sign-in-button");
    var closeLoginBtn = document.querySelector(".close-btn");

    var signupModal = document.getElementById("signupPopup");
    var signupButton = document.getElementById('signupButton');
    var closeSignupBtn = document.querySelector('.close-signup');

    signInButton.onclick = function() {
        loginModal.classList.add("show");
        loginModal.style.display = "block";
    }
    closeLoginBtn.onclick = function() {
        loginModal.classList.remove("show");
        setTimeout(function() {
            loginModal.style.display = "none";
        }, 500); 
    }

    signupButton.onclick = function() {
        signupModal.classList.add("show");
        signupModal.style.display = "block";
        loginModal.classList.remove("show"); // Hide the login modal
        setTimeout(function() {
            loginModal.style.display = "none";
        }, 500); 
    }

    closeSignupBtn.onclick = function() {
        signupModal.classList.remove("show");
        setTimeout(function() {
            signupModal.style.display = "none";
        }, 500); 
    }
    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.classList.remove("show");
            setTimeout(function() {
                loginModal.style.display = "none";
            }, 500);
        }
        if (event.target == signupModal) {
            signupModal.classList.remove("show");
            setTimeout(function() {
                signupModal.style.display = "none";
            }, 500);
        }
    }
});


// ------------------------------------------------------------------------------------
function changeSearch(category, placeholder) {

    document.getElementById('searchBox').placeholder = placeholder;

    let items = document.querySelectorAll('.menu-item');
    items.forEach(item => item.classList.remove('active'));

    event.target.classList.add('active');
}

function executeSearch() {
    let category = document.querySelector('.menu-item.active').textContent;
    let query = document.getElementById('searchBox').value;
    alert('Searching for ' + category + ': ' + query);
}


// --------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('mainbtn');
    if (button) {
        button.onclick = function() {
            // Your logic to navigate to the React app
            window.location.href = "http://localhost:3001"; // Adjust the URL as needed
        };
    } else {
        console.error("Button not found");
    }
});

console.log("Script loaded");
const button = document.getElementById('mainbtn');
if (button) {
    console.log("Button found");
    button.onclick = function() {
       
    };
} else {
    console.log("Button not found");
}


// /----------------------------------------------------------------------------/

