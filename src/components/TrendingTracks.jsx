import React from "react";
import { BsArrowRight } from "react-icons/bs";

import song1 from "../assets/song1.jpg";
import song2 from "../assets/song2.jpg";
import song3 from "../assets/song3.jpg";

function TrendingTracks() {
  return (
    <div className="trending__tracks">
      <div className="trending__info">
        <div>
          <h3>Trending Tracks</h3>
          <span>Today</span>
        </div>
        <div className="icon">
          <BsArrowRight />
        </div>
      </div>
      <div className="trend">
        <div className="trend__info">
          <img src={song1} alt="" />
          <div>
            <h4>My ordinary life</h4>
            <span>TLV</span>
          </div>
        </div>
        <div className="trend__meta">
          <span>3.49M plays</span>
          <span>232K likes</span>
        </div>
      </div>
      <div className="trend">
        <div className="trend__info">
          <img src={song2} alt="" />
          <div>
            <h4>Binding Lights</h4>
            <span>The weekend</span>
          </div>
        </div>
        <div className="trend__meta">
          <span>41.44B plays</span>
          <span>512K likes</span>
        </div>
      </div>
      <div className="trend">
        <div className="trend__info">
          <img src={song3} alt="" />
          <div>
            <h4>Ghost</h4>
            <span>Confetti</span>
          </div>
        </div>
        <div className="trend__meta">
          <span>15.41M plays</span>
          <span>411K likes</span>
        </div>
      </div>
    </div>
  );
}

export default TrendingTracks;
