const App = () => {
  function reverse() {
    let first = parseInt(document.getElementById("first").value);
    let second = parseInt(document.getElementById("second").value);
    let third = parseInt(document.getElementById("third").value);
    let fourth = parseInt(document.getElementById("fourth").value);
    let fifth = parseInt(document.getElementById("fifth").value);

    document.getElementById("result").innerHTML =
      "The reverse of the selected elements is: " +
      fifth +
      fourth +
      third +
      second +
      first;
  }

  function sum() {
    let first = parseInt(document.getElementById("first").value);
    let second = parseInt(document.getElementById("second").value);
    let third = parseInt(document.getElementById("third").value);
    let fourth = parseInt(document.getElementById("fourth").value);
    let fifth = parseInt(document.getElementById("fifth").value);

    document.getElementById("result").innerHTML =
      "The sum of the selected elements is: " +
      parseInt(first + second + third + fourth + fifth);
  }

  function transform() {
    let first = parseInt(document.getElementById("first").value) + 1;
    let second = parseInt(document.getElementById("second").value) + 1;
    let third = parseInt(document.getElementById("third").value) + 1;
    let fourth = parseInt(document.getElementById("fourth").value) + 1;
    let fifth = parseInt(document.getElementById("fifth").value) + 1;

    document.getElementById("result").innerHTML =
      "The transformation of the selected elements results in: " +
      first +
      second +
      third +
      fourth +
      fifth;
  }

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
