import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './App.css';


import Board from './components/Board/Board';

class App extends Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.header}>
                    <h1>Header</h1>
                </div>
                <div className={styles.board}>
                    <Board />
                </div>
                <div className={styles.footer}>
                    <h1>Footer</h1>
                </div>
                <div className={styles.leftcolumn}>
                    <h1>Menu</h1>
                </div>
            </div>
        );
    }
}

export default App;
