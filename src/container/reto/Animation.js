import React from 'react';
import principito from '../../5_principito.png';
import rosa from '../../5_rosa.png';

class Animation extends React.Component {
    render(){
        return <div>
            <div className="backAnimation">
                <img src={rosa} alt=""/>
                <div className="backPrincipito" id="principito" style={{ right : "21px" }}>
                    <img src={principito} alt=""/>
                
                </div>
            </div>
        </div>
    }
}

export default Animation;