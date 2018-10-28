import React, { Component } from 'react';
import Header from '../Components/Header';
import Form from '../Components/Form';
import Footer from '../Components/Footer';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Form />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;
