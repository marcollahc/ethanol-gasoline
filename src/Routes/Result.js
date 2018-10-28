import React, { Component } from 'react';
import Header from '../Components/Header';
import Calculated from '../Components/Calculated';
import Footer from '../Components/Footer';

class Result extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Calculated />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Result;
