import {Component} from "react";

export class TodoAppComponents extends Component {
    constructor() {
        super();
        this.state = {
            yourName: '',
            nameList: ['jame', 'cornell', 'ken']
        }
    }

    handleChange(value) {
        this.setState({yourName: value})
    }

    handleAddItem() {
        this.setState({
            nameList: [...this.state.nameList, this.state.yourName],
            yourName: ''
        })
    }

    render() {
        return (
            <>
                <div>
                    <h2>Todo List</h2>
                    <input value={this.state.yourName} onChange={(event) => this.handleChange(event.target.value)}/>
                    <button onClick={() => this.handleAddItem()}>Add</button>
                    <ul>
                        {this.state.nameList.map((name, index) => (
                            <li key={index}>
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    }
}
