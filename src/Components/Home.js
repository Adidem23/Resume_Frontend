import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Resume</h1>
      </header>
      <main>
        <section className="resume-section">
          <h2>Personal Information</h2>
          <p>Name: Your Name</p>
          <p>Email: your@email.com</p>
          <p>Phone: (123) 456-7890</p>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <p>Degree: Your Degree</p>
          <p>School: University of XYZ</p>
          <p>Year: 20XX</p>
        </section>

        <section className="resume-section">
          <h2>Experience</h2>
          <p>Job Title: Your Job Title</p>
          <p>Company: XYZ Corporation</p>
          <p>Year: 20XX - Present</p>
        </section>
      </main>
    </div>
  );
}

export default Home;
