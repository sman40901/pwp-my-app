import React from 'react';
import '../App.css';
import MainContainer from './MainContainer';
import Nav from './Nav';



function App(){
    return ( //jsx syntax , returns only single element, we cannot return multiple tags
        <div className='App'>
            <Nav/>
            <MainContainer/>
        </div>
    );
}

export default App;