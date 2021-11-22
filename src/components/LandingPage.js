import React from 'react';
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <Link to="/section1">
                <button type="button" class="btn btn-primary">
                    generate business plan
                </button>

            </Link>


            {/* <Link to="/demo">
                <button type="button" class="btn btn-primary">
                    generate
                </button>

            </Link> */}

        </div>
    );
};

export default LandingPage;