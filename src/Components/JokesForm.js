import React, { useState } from "react";
import { connect } from "react-redux";
import { getJokes, getRandomJoke, searchSubmitted } from "../Actions/actions";

const JokesForm = props => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      props.getJokes(searchTerm);
      props.searchSubmitted();
      setSearchTerm("");
    }

    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    }

    return (
      <div className="jokeGenerator">
      <form style={{padding:"5px"}} className="searchButton" onSubmit={handleSubmit}>
        <input onChange={handleChange} value={searchTerm}/>
        <button style={{padding:"2px", margin:"2px", borderRadius:"10px"}}>Search</button>
      </form> 
      <button style={{borderRadius:"10px"}} className="randomGenerator" onClick={props.getRandomJoke}>Get Random Joke</button>
      </div>);
}

export default connect(null, { getJokes, getRandomJoke, searchSubmitted })(JokesForm);