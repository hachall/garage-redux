import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCars } from '../actions'

class CarsIndex extends Component {

  // componentWillMount() {
  //   this.props.fetchCars()
  // }

  renderCars() {
    return this.props.cars.map((car) => {
      <div className="car-card">
        <h3>{car.brand} - {car.model}</h3>
        <h4>{car.owner} ({car.late})</h4>
      </div>
    });

  }

  render() {
    return(
      <div>
        <h1>Welcome to {this.props.garage}</h1>
        <div className="cars-list">
          {this.renderCars()}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { fetchCars }, dispatch)
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
