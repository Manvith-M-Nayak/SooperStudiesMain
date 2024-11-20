import React from 'react';
import HeaderWithSidebar from '../Sidebar';

function Events() {
  return(
    <div>
        <HeaderWithSidebar />
        <div className="container">
          <div className="event-box">
            <h1>Maaya PESU ECC</h1>
            <p>
            Maaya is the flagship fest of PES University, ECC, 
            known for its electrifying energy, incredible events, 
            and unforgettable experiences. As one of the best college 
            fests in the region, Maaya brings together talent, creativity, 
            and culture in a grand celebration. From mesmerizing performances 
            by top DJs to exciting competitions and activities, Maaya is where 
            memories are made and moments are cherished. Don't miss the magic!
            </p>
          </div>
          <div className='event-box'>
            <h1>Hacknight 7.0</h1>
            <p>
            Gear up for HackNight 7.0, an electrifying all-night hackathon where 
            innovation meets adrenaline! Dive into a night of coding, creativity, 
            and collaboration with like-minded tech enthusiasts. Experience the thrill 
            of solving real-world problems, showcasing your skills, and turning ideas 
            into reality—all under the vibrant energy of the night. With exciting 
            challenges, amazing prizes, and unforgettable moments, HackNight 7.0 
            promises to be a hackathon experience like no other!
            </p>
          </div>
          <div className='event-box'>
            <h1>Treasure Hunt</h1>
            <p>
            Embark on an exhilarating adventure with Treasure Hunt! Dive 
            into a world of mystery, clues, and challenges designed to give 
            you an unforgettable experience. Solve puzzles, uncover hidden 
            secrets, and chase the thrill as you navigate through an exciting 
            journey. It’s more than just a hunt—it’s an experience of discovery
            , teamwork, and fun!
            </p>
          </div>
        </div>
    </div>
  );
}

export default Events;