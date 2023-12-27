import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { useEffect } from 'react';

import { getJokes } from './Actions/actions';

import JokesList from './Components/JokesList';
import JokesForm from './Components/JokesForm';

function App(props) {
  const { loading, error, getJokes } = props;

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div className="App">
      <h1>Have a laugh</h1>
      <JokesForm />
      {
        (error !== "") && <h3>{error}</h3>
      }

      {
        loading ? <h3>*gathering punchline*</h3> : <JokesList/>
      }

    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getJokes })(App);