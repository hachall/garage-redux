// TODO: add and export your own actions

export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const CAR_CREATED = 'CAR_CREATED';
export const CAR_DELETED = 'CAR_DELETED';

export function fetchCars(garage) {

  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
      .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  }
}

export function fetchCar(garage, id) {

  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars/${id}`)
      .then(response => response.json());

  return {
    type: FETCH_CAR,
    payload: promise
  }
}


export function createCar(body, garage, callback) {
const request = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback)

  return {
    type: CAR_CREATED,
    payload: request
  };
}

export function deleteCar(history, car) {
const request = fetch(`https://wagon-garage-api.herokuapp.com/cars/${car.id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify(body)
  }).then(response => response.json())
    .then(() => history.push(""));


  return {
    type: CAR_DELETED,
    payload: car
  };
}
