const app = Vue.createApp({
  data() {
    return {
      counter: 20,
      name: ' ',
      confirmedName: " "
    };
  },
  methods :{
    confirmedInput(){
      this.confirmedName = this.name;
    },
    submitForm(){
      alert('Submitted!');
    },
    add(num) {
      this.counter = this.counter +num;
    },
    reduce(num) {
      this.counter = this.counter -num;
    },
    setName(event){
      this.name = event.target.value;
    }, 

    resetInput(){
      this.name =' '
    },
    outputFullName(){
      if (this.name ===''){
        return '';
      }
      return `${this.name} Ayala` 
    }
  }
});

app.mount('#events');
