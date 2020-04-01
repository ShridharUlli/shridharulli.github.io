
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'null';

if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
    }
}

var switchTheme = function(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme','dark');
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);


new ClipboardJS('.copy-email-link');



const mobileNavIcon = document.querySelector("#mobile-nav-icon");
const mobileNavMenu = document.querySelector("#mobile-nav");
const icon = document.querySelector("#nav-icon");

mobileNavIcon.addEventListener("click", toggleNavBar, false);

function toggleNavBar(){    
    
    if(mobileNavMenu.classList.contains("hidden")){
        mobileNavMenu.classList.remove("hidden");
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        
    }else{
        mobileNavMenu.classList.add("hidden");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
    }
    return false;

}

