import * as React from "react";
import * as ReactDOM from "react-dom";
import logo from './logo.png';

import { Hello } from "./components/Hello";

ReactDOM.render(
    <div><img src={logo}/><Hello compiler="TypeScript" framework="React" /></div>,
    document.getElementById("example")
);
