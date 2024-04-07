import React from "react";
import song1 from "../assets/song1.jpg";
import song2 from "../assets/song2.jpg";
import song3 from "../assets/song3.jpg";

function SongList(){
    return (
        <div className="songslist">
            <div className="songinfo">
                <div className="song">
                    <img src={song1} alt="" />
                    <div>
                        <h4>My ordinary life</h4>
                        <span>TLV</span>
                    </div>
                    <div className="song_meta">
                        <span>3:14</span>
                        <span>232K likes ♥</span>
                    </div>
                </div>
            </div>
            <div className="songinfo">
                <div className="song">
                    <img src={song2} alt="" />
                    <div>
                        <h4>Binding Lights</h4>
                        <span>The weekends</span>
                    </div>
                    <div className="song_meta">
                        <span>2:34</span>
                        <span>202K likes ♥</span>
                    </div>
                </div>
            </div>
            <div className="songinfo">
                <div className="song">
                    <img src={song3} alt="" />
                    <div>
                        <h4>Ghost</h4>
                        <span>Confetti</span>
                    </div>
                    <div className="song_meta">
                        <span>4:04</span>
                        <span>132K likes ♥</span>
                    </div>
                </div>
            </div>
            <div className="songinfo">
                <div className="song">
                    <img src={song3} alt="" />
                    <div>
                        <h4>Ghost</h4>
                        <span>Confetti</span>
                    </div>
                    <div className="song_meta">
                        <span>4:04</span>
                        <span>132K likes ♥</span>
                    </div>
                </div>
                
            </div>
            <div className="songinfo">
                <div className="song">
                    <img src={song3} alt="" />
                    <div>
                        <h4>Ghost</h4>
                        <span>Confetti</span>
                    </div>
                    <div className="song_meta">
                        <span>4:04</span>
                        <span>132K likes ♥</span>
                    </div>
                </div>
                
            </div>
            <div className="songinfo">
                <div className="song">
                    <img src={song3} alt="" />
                    <div>
                        <h4>Ghost</h4>
                        <span>Confetti</span>
                    </div>
                    <div className="song_meta">
                        <span>4:04</span>
                        <span>132K likes ♥</span>
                    </div>
                </div>
            </div>
            <div className="songinfo">
                <div className="song">
                    <img src={song3} alt="" />
                    <div>
                        <h4>Ghost</h4>
                        <span>Confetti</span>
                    </div>
                    <div className="song_meta">
                        <span>4:04</span>
                        <span>132K likes ♥</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SongList;