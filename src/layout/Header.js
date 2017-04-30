import React from 'react';

class Header extends React.Component {
    render(){
        return <div className="header">
            <h3 className="title">Reto Ece</h3>
            <div className="hanburger">  
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>;
    }
}

export default Header;