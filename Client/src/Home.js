import React from 'react';
import {Link} from "react-router-dom";

const Home = (props) => {
  return (
    <section className="star-wars">
      <div className="crawl">
        <h1 className="title">Translation Fixation</h1>
        <p className="intro">Are you a nerd? Are you boring and looking for a little razzle-dazzle to your personality? If you were a spice would you be flour? Have you ever wanted to impress your fellow friends in the Tolkien fandom with your knowledge of the elvish languages but had no idea how? Is Yoda your spirit Jedi but you can’t wrap your head around how he makes his sentences all backwardsy and epic? Is your name Marcus? Sam? Eric? Nate?</p>
        <p className="intro">Well do we have the app for you! Translation Fixation is the new hip app for spitting lines in your favorite fake or weird languages!</p>
        <p className="intro">Just select what language you want to speak to be taken to that language’s translation page, type in your sentence into the provided box (english only to begin with) and your new fangled sentence will pop up below!</p>
        <p className="intro">From Valyrian to Vulcan, Sith to Sindarin you might as well audition to be in the movies after you’re done! We even have languages to fit all fetishes! Love pigs? We’ve got Pig-Latin! Love blind people? We’ve got Braille! Love Gru? We’ve got Minion!</p>
        <p className="intro">So come on over all movie-buffs, out-casts, Marcuses, Sams, Erics, Nates - we’ve got what you need!</p>
        <div className="kraken">
          <Link className="linkHome" to="./languages">Let's Get Kraken!</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;