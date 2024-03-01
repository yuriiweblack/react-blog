import React from "react";
import { Link } from "react-router-dom";

const Missing = () =>{
    return(
        <main className="missing">
            <div className="missing__container">
                <h2 className="about__missing">Not found!</h2>
                <p className="missing__text">This blog is about React project!</p>
                <Link className="missing-link" to="/">Visit on out page</Link>
            </div>
        </main>
    )
}

export default Missing;