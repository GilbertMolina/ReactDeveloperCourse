const appRoot = document.getElementById('app');

let visibility = false;

const onToggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility toggle</h1>
      <button onClick={onToggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
        </button>
      {visibility && <p>Hey. These are some details you can see now!</p>}
    </div>
  );
  ReactDOM.render(jsx, appRoot);
}

render();