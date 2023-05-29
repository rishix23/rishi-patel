import React from "react";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const REDIRECT_URI = process.env.NODE_ENV === "production" ? "https://rishipatel.netlify.app/about/callback" : "http://localhost:3000/about/callback";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=user-top-read`;

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

    await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeFrame}&limit=5`, topTracksParameters)
      .then((response) => response.json())
      .then((data) => {
        setTopTracks(data.items);
      });
  }

  return (
    <>
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
            <h4 className="text-xl font-semibold mb-2 lg:mb-0">Top Tracks</h4>
            <div className="flex flex-wrap gap-2">
              <button className="btn-custom" onClick={(e) => getTopTracks("short_term", e)}>
                Most Recent
              </button>
              <button className="btn-custom" onClick={(e) => getTopTracks("medium_term", e)}>
                1 Year
              </button>
              <button className="btn-custom" onClick={(e) => getTopTracks("long_term", e)}>
                All time
              </button>
            </div>
          </div>
          <div className="flex gap-6 h-auto">
            {topTracks.length > 0 &&
              topTracks.map((track) => (
                <div key={track.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-56 h-auto flex flex-col items-center justify-center">
                  <img src={track.album.images[0].url} alt="" className="h-56 object-contain" />
                  <div className="p-4 text-center">
                    <h5 className="text-gray-900 font-bold text-base uppercase overflow-hidden overflow-ellipsis max-w-xs h-12 w-40">{track.name}</h5>
                    <p className="text-gray-600 font-medium text-sm h-6">{track.artists[0].name}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Spotify;
