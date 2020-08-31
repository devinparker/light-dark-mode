const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Swtich Theme function dynamicall
function switchTheme(event) {
    if  (event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');   
    }
    
}

// Event Listen
toggleSwitch.addEventListener('change', switchTheme)