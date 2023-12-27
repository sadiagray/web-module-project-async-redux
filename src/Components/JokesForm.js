import React, { useState } from "react";
import { connect } from "react-redux";
import { getJokes } from "../Actions/actions";

const JokesForm = props => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      props.getJokes(searchTerm);
    }

    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    }

    return (<form onSubmit={handleSubmit}>
        <input onChange={handleChange}/>
        <button>Search</button>
      </form>);
}

export default connect(null, { getJokes })(JokesForm);