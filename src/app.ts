import axios from "axios";

const apiKey = "AIzaSyBvTvWLa90CBmEww57yaZwhUvpTtz2b1T8";
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("address")! as HTMLInputElement;

interface Response {
  results: {
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  }[];
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value) {
    axios
      .get<Response>(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
          input.value
        )}&key=${apiKey}`
      )
      .then((response) => {
        const location = response.data.results[0].geometry.location;
        const map = new google.maps.Map(
          document.getElementById("map")! as HTMLDivElement,
          {
            center: {
              lat: location.lat,
              lng: location.lng,
            },
            zoom: 16,
          }
        );

        const marker = new google.maps.Marker({
          position: location,
          map: map,
        });
      })
      .catch((err: Error) => alert(err));
  }
});
