import React from 'react';
import ToDoCard from '../components/ToDoCard';
import CreateCard from '../components/CreateCard';
import ToDoCardContainer from './ToDoCardContainer';
import { render } from '@testing-library/react';


class MainContainer extends React.Component {
    createNewCard = (input) => {
        fetch('http://localhost:3000/cards', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'Application/json'
            },
            body: JSON.stringify({
                title: input
            })
        }) // pulls from data localhost
            .then(resp => resp.json())
            .then(newCard => {
                this.setState({
                    cards: [...this.state.cards, newCard]
                })
            })
    }

    render() {
        return (
            <div className='main-container'>
                <CreateCard createNewCard={this.createNewCard} />
            </div>
        );
    }
}

export default MainContainer;