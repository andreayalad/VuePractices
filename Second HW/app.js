const app = Vue.createApp({
    data(){
        return{
            name: " ",
            confirmedValue: " "
        }
    },

    methods:{
        showAlert(){
            alert('You pressed the button!')
        },
        insertText(event){
            this.name = event.target.value
        },
        confirmedText(){
            this.confirmedValue = this.name
        }
    }
})

app.mount('#assignment')
