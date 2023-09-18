import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="h-screen flex bg-black relative">
        <div className="background-image h-screen w-screen absolute opacity-30">
          <p className="sr-only">Background image of Alexander Yanthar</p>
        </div>
        <div className="container mx-auto my-0 flex z-50">
          <nav className="font-roboto h-full text-2xl">
            <ul className="my-4 flex flex-col h-full justify-center items-center">
              <li className="p-4 text-beige hover:text-teal transition-colors duration-300">
                <a href="#about-me">About me</a>
              </li>
              <li className="my-4 text-beige hover:text-teal transition-colors duration-300">
                <a href="#work">My work</a>
              </li>
              <li className="my-4 text-beige hover:text-teal transition-colors duration-300">
                <a href="#contact">Contact Me</a>
              </li>
              <li className="my-4 text-beige hover:text-teal transition-colors duration-300">
                <a href="#devlogs">Devlogs</a>
              </li>
              <li className="my-4 text-beige hover:text-teal transition-colors duration-300">
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col ml-8 text-beige h-1/4 w-10/12 items-end justify-center mt-8">
            <h1 className="font-playfair text-beige text-7xl font-extrabold pb-4">
              Alexander Yanthar
            </h1>
            <h2 className="font-playfair text-4xl font-bold">Web developer</h2>
          </div>
        </div>
      </header>
      <main>
        <section>
          <p>
            Hello, Alex here! I am a passionate coder and web developer who
            finds endless fascination in the world of programming.
          </p>
          <p>
            I believe my insatiable curiosity and love for problem-solving make
            coding my favorite aspect of the job.
          </p>
          <p>
            Beyond the realms of coding, I am a true experimenter at heart. I'm
            always on the lookout for new ideas and ventures to explore. From
            concocting my own soy sauce and crafting delightful miso to
            nurturing a lush and vibrant garden, my love for experimentation
            knows no bounds. But perhaps one of my most rewarding passions is my
            journey as a baker. All of these things taught me patience,
            perseverance and dedication.
          </p>
          <p>
            Throughout my coding and web development journey, I've acquired a
            wealth of knowledge and honed my skills to create impactful and
            user-friendly digital experiences. I am constantly seeking
            inspiration from both the coding community and the natural world, I
            aim to infuse creativity and innovation into every aspect of my
            work.
          </p>
          <p>
            Ultimately, I see coding as an ever-evolving canvas that allows me
            to blend my passion for problem-solving with my innate love for
            exploration and experimentation. Thank you for taking the time to
            get to know me a little better. Let's connect!
          </p>
        </section>
        <section>
          <h2>My Skills</h2>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Express</li>
            <li>Mongo</li>
            <li>Node</li>
            <li>Next.js</li>
            <li>JavaScript</li>
            <li>TailwindCSS</li>
            <li>Jest</li>
            <li>GitHub</li>
            <li>Firebase</li>
            <li>Accessibility</li>
            <li>Responsive Design</li>
            <li>Sass</li>
          </ul>
        </section>
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
        <section>
          <form>
            <fieldset>
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </label>
              <label htmlFor="email">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  required
                />
              </label>
              <textarea
                className="textarea"
                name="message"
                id="message"
                cols={30}
                rows={10}
                required
                placeholder="Your message..."
              ></textarea>
              <button>Send Message!</button>
            </fieldset>
          </form>
        </section>
      </main>
    </>
  );
}
