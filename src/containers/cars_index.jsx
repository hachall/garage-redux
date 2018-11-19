import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCars } from '../actions'
import { Link } from 'react-router-dom'

class CarsIndex extends Component {

  componentWillMount() {
    this.props.fetchCars(this.props.garage)
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="car-card" >
            <h3>{car.brand} - {car.model}</h3>
            <h4>{car.owner} ({car.plate})</h4>
          </div>
        </Link>
      )
    });

  }

  render() {
    return (
      <div>
        <h1>Welcome to {this.props.garage}</h1>
        <div className="cars-list">
          {this.renderCars()}
        </div>
      <Link className="btn btn-primary btn-cta" to="/cars/new">
        Add a car
      </Link>
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
