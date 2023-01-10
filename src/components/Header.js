import React from "react";

const styles = {
  header: {
    background: "white",
    fontSize: "80px",
    color: "white",
  },
};

function Header() {
  return (
    <header style={styles.header}>
      <h1>Tracy Pham</h1>
    </header>
  );
}

export default Header;
