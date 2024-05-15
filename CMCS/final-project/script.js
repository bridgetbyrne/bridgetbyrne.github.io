 
 // light/dakr mode
 
function toggleSwitch(button) {
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
        document.body.style.backgroundColor = '#828953'; 
    } else {
        document.body.style.backgroundColor = '#BCB88A'; 
    }

}
