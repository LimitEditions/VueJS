const Todolist = {
    data() {
        return {
            title: '',
            tasks: [],
        };
    },

    methods: {
        add() {
            this.tasks.push({
                id: Date.now(),
                title: this.title,
            })
            this.title = '';
        },
        del(id){
            this.tasks = this.tasks.filter((el) => el.id !==id)
        }
    },

    template:
        `<div>
            <input v-model="title" type="text">
            <button @click="add">Add</button>
            <ul>
                <li v-for="task in tasks" :key="task.id">{{ task.title }}<button @click="del(task.id)">Del</button>
                </li>
            </ul>
        </div>`

}