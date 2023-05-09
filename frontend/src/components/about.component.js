import { useState, useEffect } from "react";
import styles from "./about.module.css";
import Cookies from "js-cookie";
import React from "react";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const REDIRECT_URI = process.env.NODE_ENV === "production" ? "https://rishipatel.netlify.app/about/callback" : "http://localhost:3000/about/callback";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=user-top-read`;

const About = () => {
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

  // check if the auth code has expired
  const isAuthCodeExpired = () => {
    const hasBeenOneHour = new Date() - new Date(Cookies.get("authCodeDate")) >= 3600000;
    if (hasBeenOneHour) {
      Cookies.set("authCodeDate", "");
      return true;
    } else {
      return false;
    }
  };

  // authorises on page load
  useEffect(() => {
    if ((Cookies.get("code") == null && new URLSearchParams(window.location.search).get("code") == null) || isAuthCodeExpired()) {
      Cookies.set("authCodeDate", new Date());
      window.location.href = AUTH_URL;
    }
  }, []);

  // generates access token if not already stored in local storage or token expires
  useEffect(() => {
    var code = new URLSearchParams(window.location.search).get("code");
    if (!code) {
      code = Cookies.get("code");
    }
    const storedAccessToken = Cookies.get("accessToken");

    if ((code && (storedAccessToken == null || storedAccessToken === "" || storedAccessToken === "undefined")) || (code && isTokenExpired())) {
      Cookies.set("code", code);
      const data = {
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      };

      fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      })
        .then((response) => response.json())
        .then((data) => {
          setAccessToken(data.access_token);
          Cookies.set("accessToken", data.access_token);
          Cookies.set("accessTokenDate", new Date());
        });
    } else if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
  }, [accessToken]);

  // gets top tracks for initial page load (short term)
  useEffect(() => {
    if (accessToken && topTracks.length === 0) {
      getTopTracks("short_term");
    }
  });

  // gets top tracks from medium/long term frames
  async function getTopTracks(timeFrame) {
    const topTracksParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeFrame}&limit=10`, topTracksParameters)
      .then((response) => response.json())
      .then((data) => {
        setTopTracks(data.items);
      });
  }

  const getAge = () => {
    let currentYear = new Date();
    currentYear = currentYear.getFullYear();
    const birthYear = 1998;
    return currentYear - birthYear;
  };

  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutSection}>
          <h3>About</h3>
          <p>
            {getAge()} year old DevSecOps Developer. also a software developer with experience in full-stack development. i have worked on lots of
            projects for work and personal which integrated automation, cloud, scripting, and microservices (like the web page you are on right now ;)
            i have a passion for tech and always trying to sharpen my skills. have a click around...
          </p>

          <h2>Languages</h2>
          <ul className={styles.languagesSection}>
            <li>C#</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Python</li>
            <li>Terraform</li>
            <li>Organise list/layout + add more in different section</li>
          </ul>

          <h2>Hobbies</h2>
          <ul className={styles.hobbiesSection}>
            <li>Gym</li>
            <li>Coding ;)</li>
            <li>Tennis</li>
          </ul>
        </div>
        <h1>Music</h1>
        <div className={styles.topTracksSection}>
          <button onClick={(e) => getTopTracks("short_term", e)}>Short Term</button>
          <button onClick={(e) => getTopTracks("medium_term", e)}>Medium Term</button>
          <button onClick={(e) => getTopTracks("long_term", e)}>Long Term</button>

          <h3>Top Tracks</h3>

          <div className={styles.topTracksBox}>
            {topTracks.length > 0 &&
              topTracks.map((track) => (
                <React.Fragment key={track.id}>
                  <img
                    className={styles.topTracksImage}
                    src={track.album.images[1].url}
                    alt=""
                  />
                  <div className={styles.topTracksName}>
                    {track.album.name} by {track.artists[0].name}
                  </div>
                </React.Fragment>
              ))}
          </div>
          <h2> Movies</h2>
          <p>api integration coming soon...</p>

          <h2>Resume</h2>
          <p>this will be coming soon in a creative way...</p>
        </div>
      </div>
    </>
  );
};

export default About;
