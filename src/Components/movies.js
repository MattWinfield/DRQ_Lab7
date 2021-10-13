import React, { Component } from 'react';
import { Movieitem } from './movieitem';

export class Movies extends React.Component {
    render() {/*Component Render Method To display Movies*/
        return this.props.movies.map((movie) => {
            return <Movieitem movie={movie}></Movieitem>
        })
    }
}
