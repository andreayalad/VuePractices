const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ' ',
      lastName: ' ',
     // fullname: ' '
    };
  },
  watch:{
    counter(value){
      if(value >50){
        this.counter = 0
      }
    }
    // name(value){
    //   if(value === ''){
    //     this.fullname =''
    //   }else{
    //     this.fullname= value + ' ' + this.lastName
    //   }
    // },
    // lastName(value){
    //   if(value === ''){
    //     this.fullname =''
    //   }else{
    //     this.fullname = this.name + ' ' + value
    //   }
    // }
  },
  computed:{
    fullname(){
      if (this.name ==='' || this.lastName === ''){
        return '';
      }
      return this.name + ' ' + this.lastName
    }
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
