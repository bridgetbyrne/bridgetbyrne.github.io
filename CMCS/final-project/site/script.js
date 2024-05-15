 
 // light/dark mode
 
function toggleSwitch(button) {
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
        document.body.style.backgroundColor = '#828953'; 
    } else {
        document.body.style.backgroundColor = '#BCB88A'; 
    }

}


//form to collect tips 
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var email = document.getElementById('email').value;
    var tip = document.getElementById('tip').value;

    if (name.trim() === "" || email.trim() === "") {
        alert('Please fill in all fields.');
        return;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
   
});
