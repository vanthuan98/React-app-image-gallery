import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';

import img1 from '../src/img/img3.jpg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: img1
        }
    }
    
    onChangeImg = (img) => {
        this.setState({
            img: img
        })
    }

    render() {
        return (
            <div className="app">
                <Header />
                <Hero img={this.state.img} setImg={this.onChangeImg} />
            </div>
        )
    }
}

export default App;
