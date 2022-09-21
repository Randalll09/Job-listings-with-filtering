import { useState } from 'react';
import BackGround from './BackGround';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BackGround />
    </div>
  );
}

export default App;
