// import { render } from "@testing-library/react";
import React from 'react';


class CreateCard extends React.Component {

    state = {
        input: ""
    }

    handleInput = (event) => {
        event.persist();
        this.setState({
            input: event.target.value
        });
    }

    handleNewCard = (event) => {
        event.preventDefault();
        this.props.createNewCard(this.state.input);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleNewCard} className='new-card-form'>
                    <h4>Create card</h4>
                    <input onChange={this.handleInput} className='new-card-input' type='text' value={this.state.input} />
                    <input className='new-card-input' type='Submit' value='Create card' />

                </form>
            </div>
        );
    }


}


export default CreateCard;