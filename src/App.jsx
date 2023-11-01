const App = () => {
  let first = document.getElementById("first").innerHTML;
  let second = document.getElementById("second").innerHTML;
  let third = document.getElementById("third").innerHTML;
  let fourth = document.getElementById("fourth").innerHTML;
  let fifth = document.getElementById("fifth").innerHTML;

  function reverse() {}

  function sum() {
    document.getElementById("result").innerHTML =
      first + second + third + fourth + fifth;
  }

  function transform() {}

  return (
    <div>
      <div>
        <h1>Number Machine</h1>
        <h2>
          Enter five numbers in the spaces provided and transform them as you
          see fit.
        </h2>

        <input type="number" id="first" min={0} max={9} />
        <input type="number" id="second" min={0} max={9} />
        <input type="number" id="third" min={0} max={9} />
        <input type="number" id="fourth" min={0} max={9} />
        <input type="number" id="fifth" min={0} max={9} />

        <button onClick={reverse}>Reverse</button>
        <button onClick={sum}>Sum</button>
        <button onClick={transform}>Transform</button>

        <br />
        <h2 id="result"></h2>
        <br />
      </div>
    </div>
  );
};

export default App;
