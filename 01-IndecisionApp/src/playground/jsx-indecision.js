console.log('App.js is running!');

const user = {
  name: 'Gilbert Molina',
  age: 28,
  location: 'Costa Rica, Cartago'
};

const getUserName = username => <h1>{username || 'Anonymous'}</h1>;
const getAge = (userName, userAge) => (userName && userAge >= 18) && <p>Age: {userAge}</p>;
const getLocation = location => location && <p>Location: {location}</p>;

const template = (
  <div>
    {getUserName(user.name)}
    {getAge(user.name, user.age)}
    {getLocation(user.location)}
  </div>
);

const app = {
  title: 'Indecision App',
  subtitle: 'Learning about ReactJS',
  options: ['Item one', 'Item two', 'Item three', 'Item four', 'Item five']
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const newOption = e.target.elements.option.value;

  if (newOption) {
    app.options.push(newOption);
    e.target.elements.option.value = '';
    RenderApp();
  }
};

const onRemoveAll = () => {
  app.options = [];
  RenderApp();
}

const appRoot = document.getElementById('app');

const getRandomNumber = (x) => Math.floor(Math.random() * x);

const onMakeDecision = () => {
  const randomNumber = getRandomNumber(app.options.length);
  const option = app.options[randomNumber];

  alert(option);
};

const isOptionsEmpty = () => app.options.length === 0;

const RenderApp = () => {
  const templateChallenge = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p><b>{app.subtitle}</b></p>}
      <p>{app.options.length > 0 ? `Here are your ${app.options.length} options:` : 'No options'}</p>
      <button disabled={isOptionsEmpty()} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Clear options</button>
      <ol>
        {
          app.options.map(x => <li key={getRandomNumber(10000)}>{x}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <label>New option: </label>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(templateChallenge, appRoot);
};

RenderApp();