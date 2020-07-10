import React from 'react';

class NewsForm extends React.Component{
    /*constructor(){
        super();
        this.addButton = this.addButton.bind(this);
    }*/
    addButton = ()=>{
        this.props.addNews();
    }
    render(){
        return(
            <div>
                <button onClick={this.addButton}>add</button>
            </div>
        )
    }
}

export default NewsForm;