import React, { Component } from 'react';

type NavType = {
    count: number
}

class Nav extends Component<NavType> {
    render() {
        const {count} = this.props;
        return (
            <nav>
                <p>Habit Tracker</p>
                <span className="habbit-count">{count}</span>
            </nav>
        );
    }
}

export default Nav;