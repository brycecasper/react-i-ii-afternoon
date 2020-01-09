import React, {Component} from 'react';
import {data} from '../data'

class Usercard extends Component {
    constructor(){
        super();
        this.state = {
            users: data,
            index: 0
        }
        this.previousButton = this.previousButton.bind(this);
        this.nextButton = this.nextButton.bind(this);
    }

    previousButton(){
        if(this.state.index < 1){
            this.state.index = 25;
        }
        this.setState({index: this.state.index -= 1})
    }

    nextButton(){
        if(this.state.index > 23){
            this.setState({index: 0}
                )
            } else{
                this.setState({index: this.state.index += 1})
                }
    }

    render(){
        return(
            <div className='usercard'>
                <div className='display'>
                    <p className='id'>{this.state.users[this.state.index].id}/25</p>
                    <p className='name'>{this.state.users[this.state.index].name.first} {this.state.users[this.state.index].name.last}</p>
                    <p className='titles'>From: <span className='span'>{this.state.users[this.state.index].country}, {this.state.users[this.state.index].city}</span></p>
                    <p className='titles'>Job Title: <span className='span'>{this.state.users[this.state.index].title}</span></p>
                    <p className='titles'>Employer: <span className='span'>{this.state.users[this.state.index].employer}</span></p>
                    <p className='titlesMovie'>Favorite Movies:</p>
                    <p className='movies'>1. {this.state.users[this.state.index].favoriteMovies[0]}</p>
                    <p className='movies'>2. {this.state.users[this.state.index].favoriteMovies[1]}</p>
                    <p className='movies'>3. {this.state.users[this.state.index].favoriteMovies[2]}</p>
                </div>
                <div>
                    <button 
                        className='previousButton'
                        onClick={e => {this.previousButton(e)}}
                        > {'<'} Previous
                    </button>
                    <button 
                        className='nextButton'
                        onClick={e => {this.nextButton(e)}}
                        >Next {'>'}
                    </button>
                </div>
            </div>
        )
    }
}

export default Usercard;