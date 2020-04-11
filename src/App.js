import React, { Component } from 'react';
import ListItem from './ListItems';
import Dialog from './dialog';
import './css/main.css';

class TodoList extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            list: [{
                id: 0,
                name: 'new todo list 1',
                status: 0
            }, {
                id: 1,
                name: 'new todo list 2',
                status: 0
            }, {
                id: 2,
                name: 'new todo list 3',
                status : 0
            }],
            finished: 0
        };
    }
    
    addTask (newitem) {
        var allTask = this.state.list;
        allTask.push(newitem);
        this.setState({
            list: allTask
        });
    }
    updateFinished (todoItem) {
        var sum = 0;
        this.state.list.forEach( (item) => {
            if (item.id === todoItem.id) {
                item.status = todoItem.status;
            }
            if (item.status === 1) {
                sum++;
            }
        });
        this.setState({
            finished: sum
        });
    }
    updateTotal (todoItem) {
        var obj = [], sum = 0;
        this.state.list.forEach((item) => {
            if (item.id !== todoItem.id) {
                obj.push(item);
                if (item.status === 1 ) {
                    sum++;
                }
            }
        });
        this.setState({
            list: obj,
            finished: sum
        });
    }

    render () {
        return (
            <div className="container">
                <h1>TodoList</h1>
                <ul>
                    { this.state.list.map ((item, index) =>
                        <ListItem 
                            item={item}  
                            finishedChange={this.updateFinished.bind(this)} 
                            totalChange={this.updateTotal.bind(this)}
                            key={index}
                        />
                    )}
                    <li>{this.state.finished} Finished/ {this.state.list.length} Total</li>
                </ul>
                <Dialog addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/>
            </div>
        );
    }
}

export default TodoList;