import axios from "axios";

const URL = "http://54.180.194.206:8000/TourSpot";
const header = {
  'Content-type': 'application/json',
  'Accept': '*',
  'Access-Control-Allow-Origin': '*'
}

export default function GetData(){
  var code = localStorage.getItem('activity');
  console.log(code);
  var data = {
    stnId : '131' , activity : code
  }
  console.log(data);
  axios.defaults.headers.post = null
  axios.post(URL, data ,{header}).then((response) => {
  localStorage.setItem('PlaceData', JSON.stringify(response.data.data));
  const hi = JSON.parse(localStorage.getItem('PlaceData'));
  console.log(hi[2].name);
  })
}