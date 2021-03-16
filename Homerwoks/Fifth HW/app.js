const app = Vue.createApp ({
    data(){
        return{
            tasks: [],
            enteredTask: '',
            taskListState: true
        }
        
    },
    methods:{
        addTask(){
            this.tasks.push(this.enteredTask)
        },
        toggleTaskList(){
            this.taskListState = !this.taskListState
        }
    }
})
app.mount('#assignment')