import React from "react";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-site">
          <div className="left-container">
            <div className="first-container">
              <div className="social-media">
                <a href="https://www.linkedin.com/in/gulfam-ahmad-86998124a/"><i class="uil uil-linkedin"></i></a>
              </div>
              <div className="social-media">
                <a href="https://www.instagram.com/gulfam.ahmad.566/"><i class="uil uil-instagram"></i></a>
              </div>
              <div className="social-media">
                <a href="https://github.com/GulfamAhmad2"><i class="uil uil-github-alt"></i></a>
              </div>
            </div>
            <div className="second-container">
              <h1 className="title">GOBLINS</h1>
              <h3 className="heading">
                The Goblin is the fastest character in the game.
              </h3>
              <p className="paragraph">
                Their first target is resource buildings making them the ideal
                troop to deploy if your primary concern from a raid is
                collecting resources. They deal double damage to resource
                buildings (gold mines, elixir collectors and storages for each).{" "}
                <button className="more-btn">More info</button>
              </p>
              <div className="button">
                <button className="btn-1">COMPARE</button>
                <button className="btn-2">
                  <div className="play-icon">
                    <i class="uil uil-caret-right"></i>
                  </div>
                  <span className="btn-text">Play video</span>
                </button>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="image">
              <img src="./img/main.png"></img>
            </div>
            <div className="ability">
              <div className="left-side">
                <div className="speed-ability">
                  <span>Movement speed</span>
                  <span>32</span>
                </div>
                <div className="attack">
                  <span>Attack speed</span>
                  <span>1s</span>
                </div>
              </div>
              <div className="right-side">
                <div className="space">
                  <span>Housing space</span>
                  <span>1</span>
                </div>
                <div>
                  <button className="btn-3">
                    <span>More Stats</span>
                    <i class="uil uil-caret-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="previous">
            <h2>previous troop</h2>
            <span className="clan-name">devil</span>
          </div>
          <div className="next">
            <h2>next troop</h2>
            <span className="clan-name">bomber</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
