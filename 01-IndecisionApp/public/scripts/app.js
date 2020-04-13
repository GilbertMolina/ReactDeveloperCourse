'use strict';

console.log('App.js is running!');

var user = {
  name: 'Gilbert Molina',
  age: 28,
  location: 'Costa Rica, Cartago'
};

var getUserName = function getUserName(username) {
  return React.createElement(
    'h1',
    null,
    username || 'Anonymous'
  );
};
var getAge = function getAge(userName, userAge) {
  return userName && userAge >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    userAge
  );
};
var getLocation = function getLocation(location) {
  return location && React.createElement(
    'p',
    null,
    'Location: ',
    location
  );
};

var template = React.createElement(
  'div',
  null,
  getUserName(user.name),
  getAge(user.name, user.age),
  getLocation(user.location)
);

var app = {
  title: 'Indecision App',
  subtitle: 'Learning about ReactJS',
  options: ['Item one', 'Item two', 'Item three', 'Item four', 'Item five']
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var newOption = e.target.elements.option.value;

  if (newOption) {
    app.options.push(newOption);
    e.target.elements.option.value = '';
    RenderApp();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  RenderApp();
};

var appRoot = document.getElementById('app');

var getRandomNumber = function getRandomNumber(x) {
  return Math.floor(Math.random() * x);
};

var onMakeDecision = function onMakeDecision() {
  var randomNumber = getRandomNumber(app.options.length);
  var option = app.options[randomNumber];

  alert(option);
};

var isOptionsEmpty = function isOptionsEmpty() {
  return app.options.length === 0;
};

var RenderApp = function RenderApp() {
  var templateChallenge = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      React.createElement(
        'b',
        null,
        app.subtitle
      )
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your ' + app.options.length + ' options:' : 'No options'
    ),
    React.createElement(
      'button',
      { disabled: isOptionsEmpty(), onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Clear options'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (x) {
        return React.createElement(
          'li',
          { key: getRandomNumber(10000) },
          x
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement(
        'label',
        null,
        'New option: '
      ),
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );

  ReactDOM.render(templateChallenge, appRoot);
};

RenderApp();
