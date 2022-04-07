import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return
<p> this is my first React project</p>
        
    }
}
ReactDOM.render(App,document.getElementById("body"))