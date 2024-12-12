"use strict";

console.log('App.js is running');
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Babble helped me change"), /*#__PURE__*/React.createElement("p", null, "This is some info"));
var user = {
  name: 'Amritansha Patnaik',
  age: 21,
  location: 'Bhubaneswar'
};
var userName = "Amritansha Patnaik";
var userAge = 21;
var userLocation = "Bhubaneswar";
var template_two = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name.toUpperCase()), /*#__PURE__*/React.createElement("p", null, "Age : ", user.age), /*#__PURE__*/React.createElement("p", null, "Location : ", user.location));
var appRoot = document.getElementById('app');
ReactDOM.render(template_two, appRoot);
