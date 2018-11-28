import axios from "axios";

export function getCounterTimeApi() {
  return axios({
    method: "get",
    url: "https://fake-api-4.firebaseio.com/colorsCounterTime/.json"
  });
}
