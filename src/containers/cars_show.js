import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions'
import { fetchCar } from '../actions'
import { deleteCar } from '../actions'

class CarsShow extends Component {

  handleClick = () => {
    this.props.deleteCar(this.props.history, this.props.car);
  }

  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.garage, this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    return(
      <div>
        <h3>{this.props.car.brand} - {this.props.car.model}</h3>
        <h4>{this.props.car.owner} ({this.props.car.plate})</h4>
        <Link to="/">
          Back to home
        </Link>
        <button className="delete" onClick={this.handleClick}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
          Delete
        </button>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10)
  const car = state.cars.find(c => c.id === id );
  return {
    car: car,
    garage: state.garage
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
