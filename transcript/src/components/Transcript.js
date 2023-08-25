import React from 'react';
import Header from './Header';
import Card from './Card';
import Container from './Container';
import '../transcript.css'

function Transcript () {
    return (
        <div className='Transcript'>
            <Header />
            <Card />
            <Container />
        </div>
    );
}

export default Transcript;