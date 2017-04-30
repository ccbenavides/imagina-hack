import React from 'react';

class Star extends React.Component{
    render(){
        return <div className="star">
                <span className="estrella_llena">&#9733;</span>
                <span className="estrella_vacia">&#9734;</span>

                <span className="estrella_vacia">&#9734;</span>
            </div>;

    }

}

export default Star;