import React from "react";
import { Provider } from "react-redux";
import Main from "./Main";
import store from "./store/index";
import { NativeBaseProvider } from "native-base";
export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Main />
      </NativeBaseProvider>
    </Provider>
  );
}
