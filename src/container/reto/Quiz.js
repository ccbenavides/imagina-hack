import React from 'react';
import Question from './Question';

class Quiz extends React.Component {
  


    render(){
        return <div>
            
            { <Question data={this.props.data[this.props.indice]}  onClick={this.props.onClick}/> }
        </div>;
    }
}

export default Quiz;

/*{data.map( (e,i) => <Question key={i + "_xxxd"}  data={e}/>)} */