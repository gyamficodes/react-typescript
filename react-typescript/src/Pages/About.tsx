import React from 'react';

interface AboutProps {
  name: string;
  ages: number;
}

const About: React.FC<AboutProps> = ({ name, ages }) => {
  return (
    <>
      <h1>This is the About page</h1>
      <p>Name: {name}</p>
      <p>Age: {ages}</p>
    </>
  );
};

export default About;
