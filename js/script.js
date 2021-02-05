// GLOBAL VARIABLES
const emailsQuantity = 10;

// VUE
new Vue({
    el: "#root",
    data: {
        emailsSelf: [],
        emailsArrow: [],
    }, 
    mounted: function() {
        // const emailsQuantity = 10; 

        // using self
        const self = this;

        for(let i = 0; i < emailsQuantity; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(function(resp){
                    self.emailsSelf.push(resp.data.response)
                })
        }

        // using arrow functions
        for(let i = 0; i < emailsQuantity; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(resp => this.emailsArrow.push(resp.data.response))
        }
    },
})

// BONUS: JQUERY
$(document).ready(function() {
    let emailsJQuery = "";
    
    for(let i = 0; i < emailsQuantity; i++) {

        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/random/mail",
            method: "GET",
            success: function(data) {
                emailsJQuery += `<li>${data.response}</li>`
            },
            error: function(request, status, error) {
                document.querySelector(".email-list.jquery").innerHTML = `Request: ${request}, status: ${status}, error: ${error}`;
            }
        })
        
    }
    
    setTimeout(() => {
        document.querySelector(".email-list.jquery").innerHTML = emailsJQuery; 
    }, 1000) 
})

// BONUS: VANILLA
var emailsVanilla = "";

for(let i = 0; i < emailsQuantity; i++) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            emailsVanilla += `<li>${JSON.parse(xhttp.responseText).response}</li>`;
        }
    }
    xhttp.open("GET", "https://flynn.boolean.careers/exercises/api/random/mail", true);
    xhttp.send();
}

setTimeout(() => {
    document.querySelector(".email-list.vanilla").innerHTML = emailsVanilla;
}, 1000)