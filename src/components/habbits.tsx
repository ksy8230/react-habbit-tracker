import React, { Component } from 'react';
import Habbit, { IHabit } from './habbit';
import HabbitAddForm from './habbitAddForm';
import Nav from './nav';

class Habbits extends Component {
    state = {
        habits: [
            {id: 1, name: 'English Reading', count:0},
            {id: 2, name: 'English Runnung', count:0},
            {id: 3, name: 'English Speaking', count:0},
        ]
    }
    
    handleIncreament = (data:IHabit) => {
        // const habits = [...this.state.habits]; 
        // const index = habits.indexOf(data);
        // habits[index].count++;

        const habits = this.state.habits.map(item => {
            if(item.id === data.id) {
                // ✨ 새로운 오브젝트 만들기
                return { ...data, count: data.count + 1 }
            }
            return item;
        });

        this.setState({ habits: habits });
        
    };
    handleDecreament = (data:IHabit) => {
        const habits = [ ...this.state.habits ];
        const index = habits.indexOf(data);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({ habits: habits })
    };
    handleDelete = (data:IHabit) => {
        const habits = [ ...this.state.habits ];
        const newHabits = habits.filter(v => v.id !== data.id);
        this.setState({ habits: newHabits })
    };
    handleAdd = (data:IHabit["name"]) => {
        const habits = [...this.state.habits, { id:+new Date(), name: data }];
        this.setState({ habits: habits })
    };
    handleReset = ( ) => {
         const habits = this.state.habits.map(item => {
             if(item.count !== 0) {
                 return { ...item, count:0 }
             }
             return item;
         });
        this.setState({ habits: habits })
    };

    componentDidMount() {
        // 컴포넌트가 업데이트될 때마다 무거운 뭔가 함수를 적어준다면
        // 해당 함수가 매번 호출이 되기 때문에 예상치 못한 부담을 브라우저에 줄 수 있다
    }
    
    render() {
        console.log('Habbits render!')
        return (
            <>
                <Nav count={this.state.habits.length} />
                <HabbitAddForm onAdd={this.handleAdd} />
                <ul>
                    {
                        this.state.habits.map(item => <Habbit 
                            data={item} 
                            onIncrement={this.handleIncreament} 
                            onDecrement={this.handleDecreament} 
                            onDelete={this.handleDelete} 
                            />)
                    }
                </ul>
                <button className="habits-reset" onClick={this.handleReset}>Reset All</button>
            </>
        );
    }
}

export default Habbits;