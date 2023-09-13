import React from "react";

class Navya extends React.Component{
    constructor(props){
        super(props);
        console.log("constructor called");

        this.state = {
            name: "harshit",
            count: 1,
        };
    }

    componentDidMount() {
        console.log("componentdidmount called");
        //this.setState({name:"divya"});
        setTimeout(() => {
            this.setState({name: "akhila"})
        },1000)
    }

        componentDidUpdate() {
            console.log("componentDidUpdate called");
            setTimeout(() => {
            this.setState({name: "moni"});
            },3000);
        }

        shouldComponentUpdate(nextProps,nextState){
            //return window.confirm("should component update")
           if(nextState.name == "akhila" || nextState.name == "moni") {
            return true;
           } else {
             alert("Not update since name is not akhila")
            return false;
           }
        }

        componentWillUnmount() {
            console.log("componentwillunmount called");
        }
     
      render() {
        console.log("render() called");
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.count}</h1>
                <button onClick={() => {
                    this.setState({count: this.state.count + 1});
                }}> Add By 1</button>
            </div>
        );
    }
}


export default Navya;