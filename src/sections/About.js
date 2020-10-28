import React from 'react';
import { string } from 'prop-types';

const About = props => {
  const { aboutData } = props
  return (
    <section className="about">
      <h2><i className="fa fa-user"></i> Profile</h2>
      <p>{aboutData}</p>
    </section>
  );
};

About.propTypes = {
  aboutData: string.isRequired
}

export default About;
