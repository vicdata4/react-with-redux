import React, { Component } from 'react';
import { connect } from 'react-redux';


class SongList extends Component {
    render() {
        return <div>SonList</div>;
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return state;
};


export default connect(mapStateToProps)(SongList);