import "../BodyContent/BodyContent.css";
import { useMatomo } from '@datapunt/matomo-tracker-react'
import React from "react";

export default function AboutUs() {

  // Track page view
  const { trackPageView, trackEvent } = useMatomo()

  // Track page view
  React.useEffect(() => {
    trackPageView()
  }, [])
      

  return (
    <div
      id="page-content-wrapper"
      style={{
        position: "relative",
      }}
    >
      <div id="home-page-hot-wrapper">
        <div id="home-page-hot">
          <div id="home-page-hot-border">
            <div
              id="home-page-hot-content-background"
              style={{ backgroundColor: "rgba(24,5,80,1)" }}
            >
              <div id="home-page-inner-wrapper" style={{}}>
                <div style={{ paddingLeft: "3rem", textAlign: "center" }}>
                  <h1
                    style={{
                      fontWeight: "900",
                      fontSize: "50px",
                      marginBottom: "10px",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ color: "#d70a84" }}>Who</span>{" "}
                    <span style={{ color: "white" }}>are we</span>
                    <span style={{ color: "#d70a84" }}>?</span>
                  </h1>
                  <p
                    className="answer-text"
                    style={{
                      color: "white",
                      width: "90%",
                      display: "inline-block",
                      textAlign: "left",
                    }}
                  >
                    Night Owl is the world’s most decentralized casino. We aim
                    to bring the long overdue qualities of transparency, voice,
                    and true privacy to the casino gaming industry, thus
                    providing the ideal platform for users to build and play
                    their favorite games. It is entirely open-source, meaning
                    anyone can check the code, granting full transparency into
                    the random number generator (RNG) and house advantage for
                    ALL games.
                    <br />
                    <br />
                    Please read our Litepaper for more information:{" "}
                    <a href="https://medium.com/@NightOwlCasino/litepaper-7c360b2cff7">
                      <span
                        style={{ textDecoration: "none", color: "#d70a84" }}
                      >
                        Night Owl Litepaper.
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="page-content-wrapper"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "60%",
        }}
      >
        <div id="home-page-hot-wrapper">
          <div id="home-page-hot">
            <div id="home-page-hot-border">
              <div id="home-page-hot-content-background">
                <div id="home-page-inner-wrapper">
                  <div style={{ paddingLeft: "3rem", textAlign: "center" }}>
                    <h1
                      style={{
                        fontWeight: "900",
                        fontSize: "50px",
                        marginBottom: "10px",
                        textAlign: "center",
                      }}
                    >
                      <span style={{ color: "#d70a84" }}>Our</span>{" "}
                      <span style={{ color: "white" }}>mission</span>
                      <span style={{ color: "#d70a84" }}>?</span>
                    </h1>
                    <p
                      className="answer-text"
                      style={{
                        color: "white",
                        width: "90%",
                        display: "inline-block",
                        textAlign: "left",
                      }}
                    >
                      Night Owl will improve upon the traditional methods of the
                      casino industry to make the industry as fair as it can be.
                      The platform removes the central authority and allows
                      everyday people to bet or become ‘the house’, earning
                      passive returns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="page-content-wrapper"
          style={{
            position: "absolute",
            bottom: 10,
            width: "100%",
            height: "50%",
            
          }}
        >
          <div id="home-page-hot-wrapper">
            <div id="home-page-hot">
              <div id="home-page-hot-border">
                <div id="home-page-hot-content-background">
                  <div id="home-page-inner-wrapper">
                    <div style={{  textAlign: "center" }}>
                      <h1
                        style={{
                          fontWeight: "900",
                          fontSize: "50px",
                          marginBottom: "15px",
                          textAlign: "center",
                        }}
                      >
                        <span style={{ color: "white" }}>
                          Why do we use the
                        </span>{" "}
                        <span style={{ color: "#d70a84" }}>Ergo</span>{" "}
                        <span style={{ color: "white" }}>platform?</span>
                      </h1>
                      <p
                        className="answer-text"
                        style={{
                          color: "white",
                          width: "82%",
                          display: "inline-block",
                          textAlign: "left",
                          paddingBottom: "90px",
                        }}
                      >
                        Night Owl was built on the Ergo blockchain due to its
                        smart contract versatility, eUTXO benefits, security,
                        and, most importantly, its ideology. Ergo, like Night
                        Owl, conducted no premine, ICO, no presales, or team
                        allocations, meaning that it’s as fair as it gets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="page-content-wrapper"
            style={{
              position: "absolute",
              bottom: -130,
              width: "100%",
              height: "50%",
            }}
          >
            <div id="home-page-hot-wrapper">
              <div id="home-page-hot">
                <div id="home-page-hot-border">
                  <div id="home-page-hot-content-background">
                    <div id="home-page-inner-wrapper">
                      <div style={{ paddingLeft: "3rem", textAlign: "center" }}>
                        <h1
                          style={{
                            fontWeight: "900",
                            fontSize: "50px",
                            marginBottom: "20px",
                            textAlign: "center",
                          }}
                        >
                          <span style={{ color: "white" }}>
                            What is Night Owl’s
                          </span>{" "}
                          <span style={{ color: "#d70a84" }}>currency</span>{" "}
                          <span style={{ color: "white" }}>?</span>
                        </h1>
                        <p
                          className="answer-text"
                          style={{
                            color: "white",
                            width: "90%",
                            display: "inline-block",
                            textAlign: "left",
                            paddingBottom: "100px",
                          }}
                        >
                          Night Owl’s token, OWL, is stable, meaning that there
                          is no risk associated with the loss of value of the
                          token. This will be done by pegging Night Owl’s token,
                          the OWL, to stablecoins (SigUSD to start).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="page-content-wrapper"
              style={{
                position: "absolute",
                bottom: -180,
                width: "100%",
                height: "50%",
              }}
            >
              <div id="home-page-hot-wrapper">
                <div id="home-page-hot">
                  <div id="home-page-hot-border">
                    <div id="home-page-hot-content-background">
                      <div
                        id="home-page-inner-wrapper"
                        style={{
                          flexDirection: "column",
                        }}
                      >
                        <div
                          style={{ paddingLeft: "3rem", textAlign: "center" }}
                        >
                          <h1
                            style={{
                              fontWeight: "900",
                              fontSize: "50px",
                              marginBottom: "20px",
                              textAlign: "center",
                            }}
                          >
                            <span style={{ color: "#d70a84" }}>Who</span>{" "}
                            <span style={{ color: "white" }}>
                              is building Night Owl?
                            </span>
                          </h1>
                          <p
                            className="answer-text"
                            style={{
                              color: "white",
                              width: "90%",
                              display: "inline-block",
                              textAlign: "left",
                              paddingBottom: "30px",
                            }}
                          >
                            The Night Owl team comprises community members who
                            contribute to the open-source project on Github.
                          </p>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
