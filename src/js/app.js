import locations from './store/locations';

locations.init().then((res) => {
  console.log(res), console.log(locations);
  console.log(locations.getCitiesByCountryCode('ES'));
});
