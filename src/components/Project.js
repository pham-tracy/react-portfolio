import React from "react";

const styles = {
  project: {
    margin: 20,
    background: "#e8eaf6",
  },
  heading: {},
  content: {
    padding: 20,
  },
};

function Project() {
  return (
    <div style={styles.project}>
      <div style={styles.heading}>Project Title</div>
      <div style={styles.content}>
        <li>Project Image</li>
        <li>Project Link</li>
      </div>
    </div>
  );
}

export default Project;
