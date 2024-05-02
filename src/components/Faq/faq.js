import React from 'react'

import PropTypes from 'prop-types'

import Question1 from './question1'
import './faq.css'

const FAQ = (props) => {
  return (
    <div className="faq-faq">
      <div className="faqContainer">
        <div className="faq-faq1">
          <div className="faq-container">
            <span className="overline">
              <span>FAQ</span>
              <br></br>
            </span>
            <h2 className="faq-text3 heading2">{props.heading}</h2>
            <span className="faq-text4 bodyLarge">
              <span>
                Here are some of the most common questions that we get.
              </span>
              <br></br>
            </span>
          </div>
          <div className="faq-container1">
            <Question1
              answer="Our website uses advanced algorithms that analyze the soil condition and recommend the most suitable crops based on various factors."
              question="How does the website determine which crops to suggest?"
            ></Question1>
            <Question1
              answer="Yes, our recommendations are based on scientific data and research to ensure the best possible outcomes for your farming needs."
              question="Can I trust the suggested crop recommendations?"
            ></Question1>
            <Question1
              answer="Yes, our website is completely free to use for all farmers looking for crop suggestions based on soil conditions."
              question="Is the website free to use?"
            ></Question1>
            <Question1
              answer="Our soil condition assessments are highly accurate, utilizing cutting-edge technology to provide precise recommendations for crop selection."
              question="How accurate are the soil condition assessments?"
            ></Question1>
            <Question1
              answer="Yes, you can save and access your soil condition data on our platform to track changes over time and make informed decisions about crop selection."
              question="Can I save and access my soil condition data for future reference?"
            ></Question1>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ.defaultProps = {
  heading: 'Common questions',
}

FAQ.propTypes = {
  heading: PropTypes.string,
}

export default FAQ
