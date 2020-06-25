
import React, { Component } from 'react'
import AddItem from './AddItem'
import ListItem from './ListItem'
import './styles.css'


class TodoList extends Component {
    constructor(props){
        super(props)

        this.state = {
            tasks: [],
            input: ''
        }
    }

    handleInput = (e) =>{
        //e.target.value. dont do this: this.state.input = e.target.value
        //do this:
        this.setState({
            inputText: e.target.value
        })
    }

    addTaskItem = () =>{
        //get current value of our inputText and
        let input = this.state.inputText
        //current array 
        let tasks = this.state.tasks
        //push
        tasks.push(input);

        this.setState({
            tasks: tasks,
            inputText: ""
        }, () =>{
            console.log(this.state.tasks)
        })

        // console.log(this.state.tasks)
        // this.setState({}, )
    }


    render() {

        // let {tasks, inputText} = this.state;
        let taskList = this.state.tasks.map((task, index) =>{
            return <ListItem key={index} taskItem={task} />
        })
        console.log("taskList", taskList)

        return (
            <div className = "todo-form">


            <br/>

            <AddItem inputText={this.state.inputText} inputChange={this.handleInput} addItem={this.addTaskItem} />
            <br/>
            <ul>
                {taskList}
            </ul>

            </div>
        )
    }
}

export default TodoList

