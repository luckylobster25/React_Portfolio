import React from 'react';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img
        src={require(`../../assets/profile/myprofilepicture-small.JPEG`)}
        alt='chue profile'
        className="profile-picture"
      />
        </div>
        <p>
        Hello, my name is Chue Chang and I am a full-stack Javascript developer. I am a student of the University of Minnesota coding bootcamp. My main programing language is Javascript. I have background in Python as well. 
        </p>
        <p>
        As of 2022, I am looking forward to any opportunities that come my way. I plan to collaborate with my fellow classsmates to create unique projects and applications. I am very open to many things.  
        </p>
      </div>
    </section>
  );
}

export default About;
