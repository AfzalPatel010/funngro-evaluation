import "./Teens.css";

function Teens() {
  return (
    <div className="teen-page">
      <nav className="teen-nav">
        <div className="teen-logo">funngro<span>.</span></div>

        <div className="teen-nav-links">
          <a href="/">Home</a>
          <a href="/companies">For Companies</a>
          <a href="/teens">For Teens</a>
        </div>

        <button className="teen-nav-btn">Get Started</button>
      </nav>

      <main>
        <section className="teen-hero">
          <div className="teen-hero-content">
            <p className="eyebrow">FOR YOUNG TALENT</p>

            <h1>
              Turn your skills
              <br />
              into <span>real experience.</span>
            </h1>

            <p className="teen-hero-text">
              Discover projects, build valuable skills and get experience
              working with real businesses through Funngro.
            </p>

            <div className="teen-buttons">
              <button className="primary-btn">Explore Projects →</button>
              <button className="secondary-btn">How It Works</button>
            </div>
          </div>

          <div className="teen-hero-card">
            <div className="earning-card">
              <span>YOUR NEXT PROJECT</span>
              <h3>Content Creator</h3>
              <p>Create engaging social media content for a growing brand.</p>

              <div className="project-bottom">
                <strong>₹1,500</strong>
                <small>Project reward</small>
              </div>
            </div>
          </div>
        </section>

        <section className="teen-stats">
          <div>
            <strong>70L+</strong>
            <span>Young people</span>
          </div>

          <div>
            <strong>5,000+</strong>
            <span>Brand partners</span>
          </div>

          <div>
            <strong>1,000+</strong>
            <span>Live projects</span>
          </div>

          <div>
            <strong>12+</strong>
            <span>Work categories</span>
          </div>
        </section>

        <section className="teen-section">
          <p className="eyebrow">HOW IT WORKS</p>

          <h2>
            Start small.
            <br />
            <span>Grow with every project.</span>
          </h2>

          <div className="steps">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Create your profile</h3>
              <p>
                Tell us about your interests, skills and the kind of projects
                you want to explore.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Find a project</h3>
              <p>
                Discover opportunities that match your skills and interests.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Complete & learn</h3>
              <p>
                Work on real projects, build practical experience and improve
                your skills.
              </p>
            </div>
          </div>
        </section>

        <section className="teen-categories">
          <p className="eyebrow">EXPLORE YOUR SKILLS</p>

          <h2>There is a project for your talent.</h2>

          <div className="category-grid">
            <div>🎨 Design</div>
            <div>💻 Technology</div>
            <div>📱 Content Creation</div>
            <div>📢 Marketing</div>
            <div>✍️ Writing</div>
            <div>📊 Research</div>
          </div>
        </section>

        <section className="teen-cta">
          <p className="eyebrow">YOUR JOURNEY STARTS HERE</p>

          <h2>
            Learn. Build.
            <br />
            <span>Grow.</span>
          </h2>

          <p>
            Take your first step towards real-world experience with projects
            designed around your skills.
          </p>

          <button className="primary-btn">Start Exploring →</button>
        </section>
      </main>

      <footer className="teen-footer">
        <div className="teen-logo">funngro<span>.</span></div>
        <p>India's youth · India's brands.</p>
      </footer>
    </div>
  );
}

export default Teens;