import React, { useEffect, useState } from "react";
import "./App.css";
import { FaMoon, FaSun } from "react-icons/fa";
import { createGlobalStyle } from "styled-components";
import Loader from "./components/Loader";
import Connect from "./components/Connect";

// Global styles for dark/light themes
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.background};
    transition: all 0.3s ease-in-out;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const lightTheme = {
  background: "linear-gradient(to bottom, #ffffff, #f0f0f0)", // Light gradient with white shades
  text: "#000000", // Text color for light mode
  link: "#0073b1",
};

const darkTheme = {
  background: "linear-gradient(to bottom, #242424, #343434)", // Dark gradient
  text: "#ffffff", // Text color for dark mode
  link: "#1da1f2",
};

// Main App component
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., fetching data from an API)
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3 seconds (simulating API response)
    }, 2000);
  }, []);

  const toggleTheme = () => setIsDarkTheme((prevTheme) => !prevTheme);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <GlobalStyle theme={theme} />
          {/* Navbar */}
          <nav className="navbar">
            <div className="navbar-left">
              <a
                href="/"
                className="navbar-link"
              >
                Sai Prashanth
              </a>
            </div>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
            >
              {isDarkTheme ? (
                <FaSun className="icon" />
              ) : (
                <FaMoon className="icon" />
              )}
            </button>
          </nav>

          {/* Profile Wrapper */}
          <div className="wrapper">
            <img
              src="https://avatars.githubusercontent.com/u/171444765?v=4"
              alt="Sai Prashanth"
              className="profile-image"
            />
            <h1 className="header">Sai Prashanth</h1>
            <p className="sub-header">Full Stack Developer</p>
            <p
              className="bio"
              id="bio"
            >
              Hi! I'm a passionate web developer with a love for building
              innovative applications and exploring new technologies. I'm always
              learning and excited to work on interesting projects!
            </p>

            {/* <div className="line"></div> */}

            {/* Social Links */}
            <div className="social-links">
              <Connect />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
