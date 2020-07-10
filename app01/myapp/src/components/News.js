import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import NewsForm from './NewsForm';
class News extends React.Component{
    static defaultProps ={
        name:'Taylan'
    };
    render(){
        const elements = this.props.news.map(news=>
            <NewsItem
                    key ={news.id}
                    newsData={news} />
        )
        return(
            <div>
                {elements}
                <NewsForm addNews={this.props.addNews}/>
            </div>
        )
    }
}
News.propTypes = {
    news: PropTypes.array.isRequired,
    name: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired
}
export default News;