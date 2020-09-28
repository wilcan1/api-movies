import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-light shadow-lg navbar-light mb-5">
                    <ul className="navbar-nav">                   
                        <img src={"https://img.icons8.com/nolan/42/movie.png"} />                                       
                        <h1 className="ml-3">SQLOW</h1>                                              
                    </ul>
                </nav>
            </div>
        )
    }
}
