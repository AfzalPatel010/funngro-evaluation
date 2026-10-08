import './Companies.css'

function Companies() {
  return (
    <div className="companies-page">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          funngro<span>.</span>
        </div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/#how-it-works">How It Works</a>
          <a href="/#opportunities">Opportunities</a>
          <a href="/companies">For Companies</a>
        </div>

        <button className="nav-button">
          Start a Project
        </button>
      </nav>

      {/* Hero */}
      <section className="company-hero">

        <div className="company-hero-content">

          <div className="company-badge">
            🏢 For Companies & Brands
          </div>

          <h1>
            Connect Your Brand
            <br />
            With <span>Young India.</span>
          </h1>

          <p>
            Connect with talented young people, launch engaging
            campaigns and get real-world work done through
            Funngro's young talent community.
          </p>

          <div className="company-buttons">
            <button className="company-primary">
              Start a Project →
            </button>

            <button className="company-secondary">
              Explore Solutions
            </button>
          </div>

        </div>

        <div className="company-visual">

          <div className="company-main-card">
            <div className="company-card-icon">
              🤝
            </div>

            <h3>
              Young Talent
            </h3>

            <p>
              Connect your business with skilled and
              enthusiastic young talent.
            </p>

            <div className="talent-row">
              <div>🎨</div>
              <div>💻</div>
              <div>📱</div>
              <div>📊</div>
            </div>

            <span>
              Skills • Creativity • Energy
            </span>
          </div>

          <div className="company-floating floating-top">
            🚀 Campaign Ready
          </div>

          <div className="company-floating floating-bottom">
            ⭐ Young Talent
          </div>

        </div>

      </section>

      {/* Benefits */}
      <section className="company-section">

        <div className="company-heading">
          <span>WHY FUNNGRO?</span>

          <h2>
            Build stronger connections with
            young talent
          </h2>

          <p>
            Get access to creative minds who can help your
            brand connect with the next generation.
          </p>
        </div>

        <div className="benefit-grid">

          <div className="benefit-card">
            <div className="benefit-icon">🎯</div>
            <h3>Targeted Reach</h3>
            <p>
              Reach young audiences and connect your brand
              with the next generation of consumers.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">💡</div>
            <h3>Fresh Ideas</h3>
            <p>
              Work with young creators who bring new
              perspectives and creative ideas.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">⚡</div>
            <h3>Flexible Projects</h3>
            <p>
              Launch project-based campaigns designed
              around your business requirements.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">📈</div>
            <h3>Business Growth</h3>
            <p>
              Create meaningful campaigns that help your
              brand grow and engage new audiences.
            </p>
          </div>

        </div>

      </section>

      {/* Services */}
      <section className="company-section company-services">

        <div className="company-heading">
          <span>WHAT YOU CAN DO</span>

          <h2>
            Solutions for modern brands
          </h2>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <span>01</span>
            <h3>Brand Promotion</h3>
            <p>
              Promote your products and campaigns through
              young creators and communities.
            </p>
          </div>

          <div className="service-card">
            <span>02</span>
            <h3>Content Creation</h3>
            <p>
              Get authentic content created for your brand
              and digital campaigns.
            </p>
          </div>

          <div className="service-card">
            <span>03</span>
            <h3>Research & Surveys</h3>
            <p>
              Collect valuable feedback and insights from
              young consumers.
            </p>
          </div>

          <div className="service-card">
            <span>04</span>
            <h3>Digital Campaigns</h3>
            <p>
              Build digital campaigns that create meaningful
              engagement with young audiences.
            </p>
          </div>

        </div>

      </section>

      {/* How it works */}
      <section className="company-section">

        <div className="company-heading">
          <span>HOW IT WORKS</span>

          <h2>
            Launch your project in four steps
          </h2>
        </div>

        <div className="company-steps">

          <div>
            <strong>01</strong>
            <h3>Tell Us Your Requirement</h3>
            <p>
              Share your campaign or project requirements.
            </p>
          </div>

          <div>
            <strong>02</strong>
            <h3>Connect With Talent</h3>
            <p>
              Find young talent suitable for your project.
            </p>
          </div>

          <div>
            <strong>03</strong>
            <h3>Launch Your Project</h3>
            <p>
              Start working with selected participants.
            </p>
          </div>

          <div>
            <strong>04</strong>
            <h3>Measure Results</h3>
            <p>
              Review the outcomes and grow your campaign.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="company-cta">

        <h2>
          Ready to build your next campaign?
        </h2>

        <p>
          Connect with young talent and turn your ideas
          into impactful projects.
        </p>

        <button className="company-primary">
          Start a Project →
        </button>

      </section>

      {/* Footer */}
      <footer>

        <div className="logo">
          funngro<span>.</span>
        </div>

        <p>
          Connecting businesses with young talent.
        </p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/#how-it-works">How It Works</a>
          <a href="/#opportunities">Opportunities</a>
          <a href="/companies">Companies</a>
        </div>

        <p className="copyright">
          © 2026 Funngro Evaluation Project
        </p>

      </footer>

    </div>
  )
}

export default Companies