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

    for(let i = 0; i < emailsQuantity; i++) {

        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/random/mail",
            method: "GET",
            success: function(data) {
                document.querySelector(".email-list.jquery").innerHTML += `<li>${data.response}</li>`
            },
            error: function(request, status, error) {
                document.querySelector(".email-list.jquery").innerHTML = `Request: ${request}, status: ${status}, error: ${error}`;
            }
        })
        
    }
    
})

// BONUS: VANILLA
for(let i = 0; i < emailsQuantity; i++) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            document.querySelector(".email-list.vanilla").innerHTML += `<li>${JSON.parse(xhttp.responseText).response}</li>`;
        }
    }
    xhttp.open("GET", "https://flynn.boolean.careers/exercises/api/random/mail", true);
    xhttp.send();
}
