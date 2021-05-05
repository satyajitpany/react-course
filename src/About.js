import React from 'react'
class About extends React.Component {
    // constructor()
    // {
    //    super();
    // }
    
    componentDidMount()
    {
        console.warn("Props",this.props.name);
        //console.warn("Did Mount");
    }
    componentDidUpdate()
    {
        console.warn("Props in Update",this.props.name);
       // alert("Name updated");
       
    }
    render() {
        //console.warn("render");
        return (
            <div>
                <h1>About Section</h1>
                <h4>{this.props.name}</h4>
            </div>)
    }
}
export default About;

// LIFE CYCLE METHOD

// constructor(){}
// componentDidMount(){}
// componentDidUpdate(){}
// componentWillUnmount(){}
