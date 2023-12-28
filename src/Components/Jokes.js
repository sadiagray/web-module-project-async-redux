import React from "react";

const Joke = (props)=>{
    const { joke } = props;

    return(<div className='joke'>
        <h3>{joke.setup}</h3>
        <p>...<strong>{joke.punchline}</strong></p>
    </div>);
}

export default Joke;