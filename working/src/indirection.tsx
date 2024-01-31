// @refresh reload
import { render } from "solid-js/web";

function App() {
    return <>
        <div>I am an app</div>
        <div>EDIT THE SOURCE CODE HERE</div>
    </>
}

render(() => <App />, document.getElementById("root"));

const button = document.createElement("button");
button.textContent = "I am a button";
document.body.appendChild(button);