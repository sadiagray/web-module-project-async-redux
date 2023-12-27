import React from "react";
import { connect } from "react-redux";
import Joke from "./Jokes";

const JokesList = props => {
    const { jokes } = props;

    return(<div id='jokesList'>
        {
            jokes.map(joke => {
                return(<Joke joke={joke}/>);
            })
        }
    </div>);
}
const mapStateToProps = state => {
    return {
        jokes: state.jokes
    }
}

export default connect(mapStateToProps)(JokesList);