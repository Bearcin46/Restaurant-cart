import Body from "./Components/Body";
import { GlobalContentProvider } from "./Components/GlobalContent";
import Header from "./Components/Header";

function App() {
  return (
    <GlobalContentProvider>
      <div>
        <Header />
        <Body />
      </div>
    </GlobalContentProvider>
  );
}

export default App;
