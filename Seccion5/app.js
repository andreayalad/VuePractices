const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

const app2 = Vue.createApp({
  data(){
    return{
      favoriteMeal: 'Pizza'
    }
  }
});

app2.mount('#app2');

//JUST JS

const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
};

const handler ={
  set(target, key, value){
    if(key === 'message'){
      target.longMessage = value + 'World!'
    }
    target.message = value
  }
};

const proxy = new Proxy(data, handler)

proxy.message = 'Hi!'

console.log(proxy.longMessage)























































































































