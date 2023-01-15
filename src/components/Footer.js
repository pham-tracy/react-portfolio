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
      <footer class="text-center">
        <div class="container p-4">
          <section class="mb-4">
            {/* GitHub */}
            <a
              class="btn floating m-1"
              href="https://github.com/pham-tracy"
              role="button"
            >
              <i class="bi bi-github"></i>
            </a>

            {/* <!-- Linkedin --> */}
            <a
              class="btn btn-floating m-1"
              href="https://www.linkedin.com/in/tracy-pham-377981140/"
              role="button"
            >
              <i class="bi bi-linkedin"></i>
            </a>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
