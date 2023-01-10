import React from "react";

const styles = {
  footer: {
    background: "white",
    fontSize: "20px",
    color: "white",
  },
};

function Footer() {
  return (
    <div style={styles.footer}>
      <a href="https://github.com/pham-tracy">
        <img src="../public/github-mark.png" alt="GitHub logo">
          {" "}
        </img>
      </a>

      <a href="https://www.linkedin.com/in/tracy-pham-377981140/">
        <img src="../public/LinkedInLogo.png" alt="LinkedIn logo"></img>
      </a>
    </div>
  );
}

export default Footer;
