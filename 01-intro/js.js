function Person(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Your Age: {props.age}</p>
    </div>
  );
}

ReactDOM.render(<Person name="dan" age='29' />,
                document.querySelector('#p1'));

ReactDOM.render(<Person name="julia" age='21' />,
                document.querySelector('#p2'));

var app = (
  <div>
    <Person name="dan" age='29' />
    <Person name="julia" age='21' />
  </div>
);

ReactDOM.render(app,
                document.querySelector('#app'));
