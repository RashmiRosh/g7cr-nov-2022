import { App } from "./App/App";
import { render } from "react-dom";

const appElement = App()
const placeholder = document.getElementById('root')

render(appElement, placeholder)
