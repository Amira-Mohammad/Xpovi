import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import NextBtn from './NextBtn';

const SectionOne = (props) => {
    const [questionData, setQuestionData] = useState(
        {
            Question1:
            {
                questionText: "Is your business model B2C or B2B or both?",
                answer: ""
            },
            Question2:
            {
                questionText: "Do you target all age brackets?",
                answer: ""
            },
            Question3:
            {
                questionText: "Do you target all industries?",
                answer: ""
            }

        }


    );

    console.log('xeeeeeeeeeee', props);

    const handleChange = e => {
        const { name, value } = e.target;

        setQuestionData({
            ...questionData,
            [name]: {
                ...questionData[name],
                answer: value
            }
        })


    };


    return (
        <div>
            <div className="firstQ">
                {questionData.Question1.questionText}
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Question1" id="Q1Option1" value="B2C"
                        onChange={handleChange} />
                    <label class="form-check-label" htmlFor="Q1Option1">
                        A. B2C
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Question1" id="Q1Option2" value="B2B"
                        onChange={handleChange} />

                    <label class="form-check-label" htmlFor="Q1Option2">
                        B. B2B
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Question1" id="Q1Option3" value="both"
                        onChange={handleChange} />
                    <label class="form-check-label" htmlFor="Q1Option3">
                        C. both
                    </label>
                </div>
            </div>



            {questionData.Question1.answer === "B2B" || questionData.Question1.answer === "both" ?
                <div className="secondQ">
                    {questionData.Question2.questionText}
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="Question2" id="Q2Option1" value="yes"
                            onChange={handleChange} />
                        <label class="form-check-label" htmlFor="Q2Option1">
                            A. yes
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="Question2" id="Q2Option2" value="no"
                            onChange={handleChange} />

                        <label class="form-check-label" htmlFor="Q2Option2">
                            B. no
                        </label>
                    </div>

                </div> :

                null
            }


            {
                questionData.Question1.answer === "B2C" || questionData.Question1.answer === "both" ?
                    <div className="thirdQ">
                        {questionData.Question3.questionText}
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="Question3" id="Q3Option1" value="yes"
                                onChange={handleChange} />
                            <label class="form-check-label" htmlFor="Q3Option1">
                                A. yes
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="Question3" id="Q3Option2" value="no"
                                onChange={handleChange} />

                            <label class="form-check-label" htmlFor="Q3Option2">
                                B. no
                            </label>
                        </div>

                    </div> : null
            }






            <Link to={{
                pathname: "/section2",
                // state: { Q1, Q2, Q3 }
            }}>
                <NextBtn />
            </Link>



        </div>
    );
};

export default SectionOne;