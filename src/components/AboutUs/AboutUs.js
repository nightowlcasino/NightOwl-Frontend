import "../BodyContent/BodyContent.css";

export default function AboutUs() {
  return (
    <div id="page-content-wrapper" style={{ position: "relative" }}>
      <div id="home-page-hot-wrapper">
        <div id="home-page-hot">
          <div id="home-page-hot-border">
            <div
              id="home-page-hot-content-background"
              style={{ backgroundColor: "rgba(24,5,80,1)" }}
            >
              <div id="home-page-inner-wrapper" style={{ marginLeft: "3rem" }}>
                <div>
                  <h1
                    style={{
                      fontWeight: "900",
                      fontSize: "50px",
                      marginBottom: "0",
                    }}
                  >
                    <span style={{ color: "#d70a84" }}>Who</span>{" "}
                    <span style={{ color: "white" }}>are we</span>
                    <span style={{ color: "#d70a84" }}>?</span>
                  </h1>
                  <p style={{ color: "white", width: "50%" }}>
                    Night Owl is the world’s most decentralized casino. We aim
                    to bring the long overdue qualities of transparency, voice,
                    and true privacy to the casino gaming industry, thus
                    providing the ideal platform for users to build and play
                    their favorite games. It is entirely open-source, meaning
                    anyone can check the code, granting full transparency into
                    the random number generator (RNG) and house advantage for
                    ALL games.
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
          bottom: "0",
          width: "100%",
          height: "60%",
        }}
      >
        <div id="home-page-hot-wrapper">
          <div id="home-page-hot">
            <div id="home-page-hot-border">
              <div id="home-page-hot-content-background">
                <div
                  id="home-page-inner-wrapper"
                  style={{ flexDirection: "column", alignItems: "self-end" }}
                >
                  <h1
                    style={{
                      fontWeight: "900",
                      fontSize: "50px",
                      marginBottom: "0",
                      marginRight: "3rem",
                    }}
                  >
                    <span style={{ color: "#d70a84" }}>Our</span>{" "}
                    <span style={{ color: "white" }}>mission</span>
                    <span style={{ color: "#d70a84" }}>?</span>
                  </h1>
                  <p
                    style={{
                      color: "white",
                      width: "50%",
                      marginRight: "3rem",
                      textAlign: "right",
                    }}
                  >
                    Night Owl will improve upon the traditional methods of the
                    casino industry to make the industry as fair as it can be.
                    The platform removes the central authority and allows
                    everyday people to bet or become ‘the house,’ earning
                    passive returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="page-content-wrapper"
          style={{
            position: "absolute",
            bottom: "0",
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
                      marginLeft: "3rem",
                      alignItems: "center",
                    }}
                  >
                    <h1
                      style={{
                        fontWeight: "900",
                        fontSize: "50px",
                        marginBottom: "0",
                      }}
                    >
                      <span style={{ color: "white" }}>Why we</span>{" "}
                      <span style={{ color: "#d70a84" }}>love ERGO</span>{" "}
                      <span style={{ color: "white" }}>?</span>
                    </h1>
                    <p
                      style={{
                        color: "white",
                        width: "50%",
                        textAlign: "center",
                      }}
                    >
                      Night Owl was built on the Ergo blockchain due to its
                      smart contract versatility, eUTXO benefits, security, and,
                      most importantly, its ideology. Ergo, like Night Owl,
                      conducted no premine, ICO, no presales, or team
                      allocations, meaning that it’s as fair as it gets.
                    </p>
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
