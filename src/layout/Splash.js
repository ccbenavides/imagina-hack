import React from 'react';
import  splash from '../splash.png' ;
// import costa from '../costa.png';
import Register from './Register';

class Splash extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bandera  : 0
        }
    }
    componentDidMount(){
        let ambito = this; 
        setTimeout(function(){
            ambito.setState({
                bandera : 1
            })
        }, 2000)
    }
    render(){
        return <div>
            { this.state.bandera ? <Register /> :
            <img className="splash-img" src={splash} alt=""/> }
            
        </div>;
    }
}

export default Splash;