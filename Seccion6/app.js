const app = Vue.createApp({
    data(){
        return{
            detailsAreVisible: false,
            friends: [
                { id: 'manuel', 
                name:'Manuel Lorenz', 
                phone: '74993640', 
                email:'mlorenz@gmail.com'
                },
                { id: 'jenni', 
                name:'Jenni Lorenz', 
                phone: '75993640', 
                email:'jlorenz@gmail.com'
                },
            ],
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }

   
});

app.mount('#app')