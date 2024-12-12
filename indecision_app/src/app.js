console.log('App.js is running');

var template = (
  <div>
    <h1>Babble helped me change</h1>
    <p>This is some info</p>
  </div>
);

var user = {
    name: 'Amritansha Patnaik',
    age: 21,
    location: 'Bhubaneswar'
};
var userName = "Amritansha Patnaik";
var userAge = 21;
var userLocation = "Bhubaneswar";
var template_two = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age : {user.age}</p>
        <p>Location : {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template_two, appRoot);