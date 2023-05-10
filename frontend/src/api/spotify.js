import { useState, useEffect } from "react";
import styles from "./about.module.css";
import Cookies from "js-cookie";
import React from "react";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const REDIRECT_URI = process.env.NODE_ENV === "production" ? "https://rishipatel.netlify.app/about/callback" : "http://localhost:3000/about/callback";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=user-top-read`;

const Spotify = () => {
  const [accessToken, setAccessToken] = useState("");
  const [topTracks, setTopTracks] = useState([]);

  // check if the token has expired
  const isTokenExpired = () => {
    const hasBeenOneHour = new Date() - new Date(Cookies.get("accessTokenDate")) >= 3600000;
    if (hasBeenOneHour) {
      Cookies.set("accessToken", "");
      Cookies.set("accessTokenDate", "");
      return true;
    } else {
      return false;
    }
  };

  // get access token from URL hash if available
  useEffect(() => {
    const hashParams = window.location.hash.substr(1);
    const hashParamsObject = Object.fromEntries(new URLSearchParams(hashParams));
    const storedAccessToken = Cookies.get("accessToken");

    if (hashParamsObject.access_token) {
      setAccessToken(hashParamsObject.access_token);
      Cookies.set("accessToken", hashParamsObject.access_token);
      Cookies.set("accessTokenDate", new Date());
      window.location.hash = "";
    } else if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    } else {
      window.location.href = AUTH_URL;
    }
  }, []);

  // gets top tracks for initial page load (short term)
  useEffect(() => {
    if (accessToken && topTracks.length === 0) {
      getTopTracks("short_term");
    }
  }, [accessToken]);

  // gets top tracks from medium/long term frames
  async function getTopTracks(timeFrame) {
    const topTracksParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeFrame}&limit=5`, topTracksParameters)
      .then((response) => response.json())
      .then((data) => {
        setTopTracks(data.items);
      });
  }

  return (
    <>
      <div className={styles.topTracksSection}>
        <h4>Top Tracks</h4>
        <button onClick={(e) => getTopTracks("short_term", e)}>Most Recent</button>
        <button onClick={(e) => getTopTracks("medium_term", e)}>1 Year</button>
        <button onClick={(e) => getTopTracks("long_term", e)}>All time</button>
        <div className={styles.topTracksBox}>
          {topTracks.length > 0 &&
            topTracks.map((track) => (
              <div
                key={track.id}
                className={styles.topTrack}>
                <img
                  className={styles.topTrackImage}
                  src={track.album.images[1].url}
                  alt=""
                />
                <div className={styles.topTrackName}>
                  {track.album.name} by {track.artists[0].name}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default Spotify;
