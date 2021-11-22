import React, { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import NextBtn from './NextBtn';

const SectionTwo = (props) => {
    // console.log('xrrrr', props.location.state);

    let Location = useLocation();
    console.log('params', Location);
    const [Q1, setQ1] = useState({
        Question1: "Did you have an investment?",

    }

    );

    const [Q2, setQ2] = useState({
        Question2: "how much was the investment?",
    });

    const handleChange = e => {
        const { name, value } = e.target;

        setQ1({
            ...Q1,
            [name]: value
        })

        setQ2({
            ...Q2,
            [name]: value
        })


    };

    console.log('from section 2', Q1);
    console.log('propspropspropspropspropspropspropsprops', props);

    return (
        <div>


            <div className="firstQ">
                {Q1.Question1}
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Q1Answer" id="Q1Option1" value="yes"
                        onChange={handleChange} />
                    <label class="form-check-label" htmlFor="Q1Option1">
                        A. yes
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Q1Answer" id="Q1Option2" value="no"
                        onChange={handleChange} />

                    <label class="form-check-label" htmlFor="Q1Option2">
                        B. no
                    </label>
                </div>

            </div>


            <div className="firstQ">
                {Q2.Question2}
                <div class="form-check">

                    <input type="number" name="Q1Answer" id="Q1Option1" min="1"
                        onChange={handleChange} />

                </div>


            </div>
            <Link to="/result">
                <NextBtn />
            </Link>
        </div>
    );
};

export default SectionTwo;