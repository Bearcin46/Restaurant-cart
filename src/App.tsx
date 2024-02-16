import Body from "./Components/Body";
import { useState } from "react";
import Header from "./Components/Header";
// interface Prop {
//   counts: number;
//   handleClick: () => void;
//   handleDec: () => void;
//   handleCart: () => void;
// }

function App() {
  const [count, setcount] = useState(0);
  const [cartClose, setCartClose] = useState(true);
  const handleIncrement = () => {
    setcount(count + 1);
  };
  const handleDecrement = () => {
    setcount(count - 1);
    if (count == 0) {
      setcount(0);
    }
  };
  const cartOpen = () => {
    setCartClose(!cartClose);
  };

  return (
    <div>
      <Header counts={count} handleCart={cartOpen} />
      <Body
        handleClick={handleIncrement}
        menu={!cartClose}
        handleDec={handleDecrement}
      />
    </div>
  );
}

export default App;
