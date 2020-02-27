import React, { Component } from 'react';
import './App.css';
import Main from './containers/main'
import { connect } from 'react-redux'
import { changeFunder } from './actions/index'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Main {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedFunder: state.selectedFunder
  }
}



const mapDispatchToProps = (dispatch) => {
  return { changeFunder: (funder) => dispatch(changeFunder(funder)) }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
