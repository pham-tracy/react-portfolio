import React from "react";

const styles = {
  footer: {
    background: "white",
    fontSize: "20px",
    color: "black",
  },
};

function Footer() {
  return (
    <div>
      <footer style={styles.footer}>
        <li>
          <a href="https://github.com/pham-tracy">
            {/* <img src="../public/github-mark.png" alt="GitHub logo">
          {" "}
        </img> */}
            GitHub
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/tracy-pham-377981140/">
            {/* <img src="../public/LinkedInLogo.png" alt="LinkedIn logo"></img> */}
            LinkedIn
          </a>
        </li>
      </footer>
    </div>
  );
}

export default Footer;
