// const User = (props) => {
//     return(
//         <div>
//           <h1>{props.name}</h1>
//           <p>{props.description}</p>
//         </div>
//     );
// };

// export default User;

//state
import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            planet : "earth",
        }
        console.log("Hey Ia m from constructor");
    }

    componentDidMount(){
        this.setState({planet:"Jupiter"});
    }


    // componentDidMount(){
    // //     console.log("Hey I am from componentDidMount");
    // this.setState({planet:"Mars"});
    // } 
    
    //Updating
    // static getDerivedStateFromprops(prop,state){
    //     console.log("im from get derived from props");
    //     return null;
    // }

    shouldComponentUpdate(nextProp,nextState){
        console.log("From shouldComponentupdate");
        console.log({
            nextProp,
            nextState,
        });
        return true;
    }

    getSnapshotBeforeUpdate(prevProp,prevState){
        console.log("From tSnapshotBeforeUpdate");
        console.log({prevProp,prevState});
        return true;
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    render(){
        console.log("Hey I am from render");
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <h4>{this.state.planet}</h4>
            </div>
        );
    }
}

export default User;