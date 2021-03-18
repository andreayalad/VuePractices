const app = Vue.createApp({
    data(){
        return{
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

   
});
app.component('friend-contact', {
    template: `
    <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">
      {{detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{friend.phone}}</li>
      <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
  </li>
  ` ,
    data() {
        return{
            friend:
                { id: 'manuel', 
                name:'Manuel Lorenz', 
                phone: '74993640', 
                email:'mlorenz@gmail.com'
                },
            detailsAreVisible: false
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible
        }
    },

});

app.mount('#app');

//A COMPONENT IT'S BASICALY LIKE A COSTUME HTML ELEMENT 
//A VUE COMPONENT IT'S BASICALY LIKE ANOTHER VUE APP BUT AN APP THAT WILL BE CONNECTED TO THE MAIN APP