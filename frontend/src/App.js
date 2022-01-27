import { Routes, store } from "./config";
import { Provider } from "react-redux";

function App() {
  return (
    // provider digunakan agar semua state redux bersarang agar dapat di akses
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
