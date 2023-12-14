import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <>
        <h1 id="heading">Allen Varughese</h1>
        <h2>Sematics project</h2>
        <br />
        <p class="para">Project to change and make minor changes and submit</p>
        <h3> Things we are learning in this session:</h3>
        <ul>
          <li>
            <i>javascript</i>
          </li>
          <li> react</li>
        </ul>
        <div>
          <h4> for reference: pls use the below lings</h4>
          <a href="https://www.google.com"> google Link </a>
          Go to Google
        </div>
        <br />
        <div>
          <b> keywords used in javascript</b>
        </div>
      </>
    </>
  );
}

export default App;
