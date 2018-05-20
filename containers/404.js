import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
    render() {
        return (
            <section className="main">
                <div className="block-404">
                    <div className="image-404">
                        <img src="/hugo/images/robot.png" />
                    </div>
                    <div className="error-block">
                        <h1>404</h1>
                        <h3>Looks like you're lost</h3>
                        <p className="error-message">
                            The page you are looking for is not available!
                        </p>
                        <p className="go-home">
                            <Link to="/">GO TO HOME →</Link>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
