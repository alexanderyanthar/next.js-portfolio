import React from "react";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <section>
        <div>
          <h2>PsychTrade</h2>
          <nav>
            <ul>
              <li>
                <a href="#live">Live site</a>
              </li>
              <li>
                <a href="#github">GitHub Repo</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h2>Cardz Galore</h2>
          <nav>
            <ul>
              <li>
                <a href="#live">Live site</a>
              </li>
              <li>
                <a href="#github">GitHub Repo</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h2>Gardebn To Table</h2>
          <nav>
            <ul>
              <li>
                <a href="#live">Live site</a>
              </li>
              <li>
                <a href="#github">GitHub Repo</a>
              </li>
            </ul>
          </nav>
        </div>
        <p>
          Check out more of my projects <a href="#more projecst">Here</a>
        </p>
      </section>
    </>
  );
};

export default page;
