import React, { Component } from 'react';

interface State{
    data: {name:string, count:number, id: number};
  }

class Habbit extends Component<State> {
    state = {
        count:0,
    };
    
    handleIncreament = (event: React.SyntheticEvent) => {
        this.setState({ count: this.state.count + 1 })
    };
    handleDecreament = (event: React.SyntheticEvent) => {
        const count = this.state.count - 1;
        this.setState({ count: count < 0 ? 0 : count })
    };
    render() {
        const { name, count, id } = this.props.data;
        return (
            <li className="habbit" key={id}>
                <span className="habbit-name">{name}</span>
                <span className="habbit-count">{count}</span>

                <button className="habbit-button habit-increase" onClick={this.handleIncreament}><i className="fas fa-plus-square"></i></button>
                <button className="habbit-button habit-decrease" onClick={this.handleDecreament}><i className="fas fa-minus"></i></button>
                <button className="habbit-button habit-delete"><i className="fas fa-trash-alt"></i></button>
            </li>
        );
    }
}

export default Habbit;