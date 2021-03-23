import React, { Component } from 'react';
import Habbit from './habbit';

class Habbits extends Component {
    state = {
        habits: [
            {id: +new Date(), name: 'English Reading', count:0},
            {id: +new Date(), name: 'English Runnung', count:0},
            {id: +new Date(), name: 'English Speaking', count:0},
        ]
    }
    render() {
        return (
            <ul>
                {
                    this.state.habits.map(item => <Habbit data={item} />)
                }
            </ul>
        );
    }
}

export default Habbits;