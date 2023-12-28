import React from "react";
import { connect } from "react-redux";
import Joke from "./Jokes";

const JokesList = props => {
    const { jokes, hasSearched } = props;

    return(
        <div id='jokesList'>
          {
            hasSearched && (jokes.length > 0 ? jokes.map(joke => {
              return(<Joke key={joke.id} joke={joke}/>);
            }) :
            <p>No jokes for that! Please try another!</p>)
          }
        </div>
      );
}

const mapStateToProps = state => {
    return {
      jokes: state.jokes,
      hasSearched: state.hasSearched
    }
  }

export default connect(mapStateToProps)(JokesList);