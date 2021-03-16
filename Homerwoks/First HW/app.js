const app = Vue.createApp({
    data() {
        return{
            userName: 'Andrea Ayala',
            age: 21,
            someImg : 'https://miro.medium.com/max/3920/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg'
        }
    },
    methods: {
        ageInFiveYears(){
            return(
                this.age + 5
            )
        },

        favNumber(){
            return(
                Math.random()
            )
        }
    }
})
app.mount('#assignment')