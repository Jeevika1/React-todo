import React from "react";
import ReactDOM from 'react-dom';

import './index.css';

const TodoItem = props => <li onClick={props.onClick}>{props.item.text}</li>;

class TodoList extends React.Component {
    render() {
        const { items } = this.props;
        return (
            <ul>
                {items.map((item, index) => (
                    <TodoItem
                        item={item}
                        key={index}
                        onClick={this.handleItemClick.bind(this, item)}
                    />
                ))}
            </ul>
        );
    }

    handleItemClick(item, event) {
        if (!item.done) {
            event.persist();
            this.props.onItemClick(item, event);
        }
    }
}

const items = [
    { text: "Buy grocery", done: true},
    { text: "Play guitar", done: false},
    { text: "Romantic dinner", done: false}
];

const App = props => (
    <TodoList 
        items={props.items}
        onItemClick={(item, event) => {
            console.log(item, event);
        }}
    />
);

document.body.innerHTML ="<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App items={items}/>, rootElement);
