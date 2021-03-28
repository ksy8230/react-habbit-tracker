import React, { PureComponent } from 'react';

export type IHabit = {
    name:string, 
    count:number, 
    id: number
}

interface State{
    data: IHabit;
    // count?: IHabit["count"];
    onIncrement:(data: IHabit) => void
    onDecrement:(data: IHabit) => void
    onDelete:(data: IHabit) => void
  }

class Habbit extends PureComponent<State> {
    state = {
        count:0,
    };
    
    handleIncreament = () => {
        this.props.onIncrement(this.props.data)
    };
    
    handleDecreament = () => {
        this.props.onDecrement(this.props.data)
    };
    handleDelete = () => {
        this.props.onDelete(this.props.data)
    };
    
    render() {
        console.log('Habbit render!')
        const { name, count, id } = this.props.data;
        return (
            <li className="habbit" key={id}>
                <span className="habbit-name">{name}</span>
                <span className="habbit-count">{count}</span>
                <button className="habbit-button habit-increase" onClick={this.handleIncreament}><i className="fas fa-plus-square"></i></button>
                <button className="habbit-button habit-decrease" onClick={this.handleDecreament}><i className="fas fa-minus"></i></button>
                <button className="habbit-button habit-delete" onClick={this.handleDelete}><i className="fas fa-trash-alt"></i></button>
            </li>
        );
    }
}

export default Habbit;