// TODO: add and export your own actions

export const FETCH_CARS = 'FETCH_CARS';
export const CAR_CREATED = 'CAR_CREATED';

export function fetchCars(garage) {

  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
      .then(response => response.json());
  console.log(promise)

  return {
    type: FETCH_CARS,
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
