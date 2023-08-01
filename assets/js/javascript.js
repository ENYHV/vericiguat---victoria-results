function link4() {
    var someTabTriggerEl = document.querySelector('#primary_efficacy_endpoint_tab'); var tab = new bootstrap.Tab(someTabTriggerEl); tab.show(); window.scrollTo(0,0);
}

function link6() {
    var someTabTriggerEl = document.querySelector('#safety_tab'); var tab = new bootstrap.Tab(someTabTriggerEl); tab.show(); window.scrollTo(0,0);
}

function changeIcon(anchor) {
    var icon = anchor.querySelector("i");
    icon.classList.toggle('fa');
    icon.classList.toggle('fa-times');

    anchor.querySelector("span").textContent = icon.classList.contains('fa');
}

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 50); 
        return false; 
    }); 
});


