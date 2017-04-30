import React from 'react';
import estrella from '../../estrella.png';
import estrella2 from '../../estrella2.png';

class Grande extends React.Component{
    render(){
        return <div className="grande">
            { this.props.score >= 3  && (<div>
                    <img src={estrella} alt=""/>
                    <img src={estrella} alt=""/>
                    <img src={estrella} alt=""/>
                </div>)}
            { this.props.score === 2  && (<div>
                    <img src={estrella} alt=""/>
                    <img src={estrella} alt=""/>
                    <img src={estrella2} alt=""/>
                </div>)}
            { this.props.score === 1  && (<div>
                    <img src={estrella} alt=""/>
                    <img src={estrella2} alt=""/>
                    <img src={estrella2} alt=""/>
                </div>)}
            { this.props.score === 0  && (<div>
                    <img src={estrella2} alt=""/>
                    <img src={estrella2} alt=""/>
                    <img src={estrella2} alt=""/>
                </div>)}
        </div>;
    }
}

export default Grande;