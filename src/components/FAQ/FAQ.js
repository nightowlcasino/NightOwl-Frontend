import { useEffect, useState, Fragment } from "react";
import FAQItem from "./FAQItem";
import useCollapse from "react-collapsed";
import "./FAQ.css";

const faqItemStyle = {
  width: "100%",
  zIndex: 1,
};

export default function FAQ() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div
      id="page-content-wrapper"
      style={{ position: "relative", maxHeight: 10000, marginBottom: 40 }}
    >
      <div id="home-page-hot-wrapper" style={{ flex: "none" }}>
        <div id="home-page-hot">
          <div id="home-page-hot-border">
            <div
              id="home-page-hot-content-background"
              style={{ backgroundColor: "rgba(24,5,80,1)" }}
            >
              <div id="home-page-inner-wrapper">
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    marginBottom: 20,
                  }}
                >
                  <h1
                    style={{
                      fontWeight: "900",
                      fontSize: "50px",
                      marginBottom: "0",
                    }}
                  >
                    <span style={{ color: "white" }}>F</span>
                    <span style={{ color: "#d70a84" }}>A</span>
                    <span style={{ color: "white" }}>Q</span>
                  </h1>
                  <p style={{ color: "white", fontSize: "20px", padding: 8 }}>
                    Frequently asked questions regarding the Night Owl project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            windowSize.innerWidth > 700 ? "repeat(2, 1fr)" : "repeat(1, 1fr)",
          gridGap: 4,
        }}
      >
        <div style={faqItemStyle}>
          <FAQItem
            title="What is Night Owl?"
            description={
              "Night Owl aims to bring the long overdue qualities of transparency, voice, and true privacy to casino gaming, providing the ideal platform for users to build and play their favorite games. Using Night Owl, you can either play the games or provide liquidity to a pool to gain passive returns, essentially acting as the ‘house’ of the casino.  To learn more, please read our litepaper."
            }
          />
        </div>
        <div style={faqItemStyle}>
          <FAQItem
            title="What blockchain is Night Owl on?"
            description={
              "Night Owl decided to build on Ergo blockchain due to the rich, smart contract capabilities, security, and most importantly, the ideology. Ergo conducted no premine, presales, ICO, or team allocation during its inception, meaning it’s as fair as it gets. Following the Ergo Manifesto, Night Owl will uphold these beliefs and carry them onto our platform. This allows Night Owl to become the world’s fairest and most decentralized casino! "
            }
          />
        </div>
        <div style={faqItemStyle}>
          <FAQItem
            title="Is Night Owl open-source?"
            description={
              "Yes! Night Owl is fully open-source. We encourage you to dive into Night Owl’s GitHub repositories to learn as much as you can about how the platform is built."
            }
          />
        </div>
        <div style={faqItemStyle}>
          <FAQItem
            title="What token does Night Owl use? "
            description={
              "Night Owl has its own token, OWL, which is pegged to stablecoins (SigUSD to start). The pegging to a stable asset allows for OWL itself to be stable. This will enable investors providing liquidity to the pool to gain passive returns over time. 100 OWL = 1 SigUSD."
            }
          />
        </div>
        <div style={faqItemStyle}>
          <FAQItem
            title="What is the OWL token allocation?"
            description="Night Owl has no token allocation (including to the team). Liquidity providers will provide liquidity for returns. Night Owl team and marketing initiatives get paid on fees. This prevents the ever-present ‘rug pull’ that dominates the crypto space. We were built on Ergo ideologies, and this option brings the most security and utility to the user’s funds."
          />
        </div>
        <div style={faqItemStyle}>
          <FAQItem
            title="How can I get the OWL token?"
            description="You can obtain OWL on Night Owl’s swap page. All you must do is connect your wallet and submit a transaction exchanging SigUSD for OWL. "
          />
        </div>
        <div style={faqItemStyle}>
          <FAQItem
            title="How are house profits split?"
            description="House profits are split 75% to the liquidity providers and 25% towards the Night Owl platform developments."
          />
        </div>
        <div style={faqItemStyle}>
          <FAQItem
            title="Where can I see the house advantage of all listed games?"
            description="You can check the house advantage per game by clicking on the information button on each game page. The house advantage will be on the top left of this informational pop-up."
          />
        </div>
        <div style={faqItemStyle}>
          <FAQItemRNG
            title="What RNG methods are used on Night Owl?"
            description="Currently, we use two methods. One method utilizes Ergo Oracle Pools, pulling a Drand (drand.love) random number to obtain a result in ~30 seconds. The second method uses Verifiable Delay Functions (VDF), which requires running a number of sequential steps. More information is available in our Github repo: "
            link="https://github.com/nightowlcasino/vdf"
          />
        </div>
        <div style={faqItemStyle}>
          <FAQItem
            title="How do I list a game on Night Owl?"
            description="Our 'Game Listing' page is under development. Please get in touch with a community member if you are interested in integrating your game onto the Night Owl platform."
          />
        </div>
      </div>
    </div>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function FAQItemRNG({ title, description, link }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [linkColor, setLinkColor] = useState("#d70a84");

  return (
    <Fragment>
      {/* <Box> */}
      <div id="home-page-hot-wrapper" style={{ flex: "none", zIndex: -1 }}>
        <div id="home-page-hot">
          <div id="home-page-hot-border">
            <div
              id="home-page-hot-content-background"
              style={{ backgroundColor: "rgba(24,5,80,1)" }}
            >
              <div id="home-page-inner-wrapper">
                <div style={{ color: "white", margin: 16 }}>
                  <p
                    {...getToggleProps()}
                    style={{ fontSize: "20px", margin: 0, cursor: "pointer" }}
                  >
                    {title}
                  </p>

                  <section style={{ marginTop: 8 }} {...getCollapseProps()}>
                    <p>
                      {description}
                      <a
                        href={link}
                        target="_blank"
                        style={{
                          color: "#d70a84",
                          textDecoration: "underline",
                        }}
                      >
                        {link}
                      </a>
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </Box> */}
    </Fragment>
  );
}
