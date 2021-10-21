import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export class Movieitem extends React.Component {
    render() {/*Component Render Method To display MovieItem*/
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>{/*Print a Card Head with the JSON Data named Title*/}
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200px" height="200px"></img>{/*Print an Image with the JSON Data named Poster*/}
                            <footer className="blockquote-footer">
                                <p>{this.props.movie.Year}</p>{/*Print a Footer element with the JSON Data named Year*/}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
