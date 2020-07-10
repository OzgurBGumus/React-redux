import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//COMPONENTS
import MoviesList from '../MoviesList';

class MoviesPage extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Movies Page</h2>
                <MoviesList movies={this.props.movies}/>
            </div>
        );
    }
}

MoviesPage.propTypes = {
    movies:PropTypes.array.isRequired
};

const mapStateToProps = state =>{
    return{
        movies:state.movies
    }
}

export default connect(mapStateToProps)(MoviesPage);