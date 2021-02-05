new Vue({
    el: "#root",
    data: {
        emailsSelf: [],
        emailsArrow: [],
    }, 
    mounted: function() {
        const emailsQuantity = 10; 

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

