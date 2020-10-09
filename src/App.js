import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Card from "./components/Card"
function App() {
  return (
    <div>
   <Header />
   <div id="movies" >
   <Card img = "movie1.jpg" title="Sinbad: Beyond the Veil of Mist" description='The sailor is "persuaded" by a Princess to help her rescue her kingdom from something fishy.'/>
   <Card img = "movie2.jpg" title="The Illusionist" description="A French illusionist finds himself out of work and travels to Scotland, where he meets a young woman. Their ensuing adventure changes both their lives forever."/>
   <Card img = "movie3.jpg" title="Happy Halloween, Scooby-Doo" description="Scooby-Doo and the team gather again to solve the mystery of gigantic proportions and save Crystal Cove."/>
   <Card img = "movie4.jpg" title="Batman: Death in the Family" description="In this very first interactive animated DC movie, you get to decide the direction Jason Todd's fate."/>
   <Card img = "movie5.jpg" title="Tom & Jerry: Back to Oz" description="With the Wicked Witch of the West now vanquished from Oz, Tom and Jerry along with Dorothy are back in Kansas!"/>
   <Card img = "movie6.jpg" title="Dragons: Rescue Riders: Hunt for the Golden Dragon"/>
   <Card img = "movie7.jpg" title="Surf's Up 2: WaveMania" description="An animated comedy that features WWE Superstars, providing their own voices while matching up against talking animals."/>
   <Card img = "movie8.jpg" title="Thumbelina" description="This retelling of the Hans Christian Andersen classic fairy tale has the digit-sized heroine evading the clutches of various toads, moles, and beetles before she can proceed with her courtship with her dream lover, Prince Cornelius."/>

   </div>
   </div>
  );
}

export default App;
