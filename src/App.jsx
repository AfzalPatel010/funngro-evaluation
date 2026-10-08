import './App.css'
import Companies from './Companies'
import Teens from './Teens'

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          funngro<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#opportunities">Opportunities</a>
          <a href="/companies">For Companies</a>
          <a href="/teens">For Teens</a>
        </div>

        <button className="nav-button">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">

        <div className="hero-content">

          <div className="badge">
            🚀 Opportunities for Young Talent
          </div>

          <h1>
            Turn Your <span>Skills</span>
            <br />
            Into Opportunities.
          </h1>

          <p>
            Discover real-world projects, build valuable skills,
            gain experience and grow with exciting opportunities
            from brands and companies.
          </p>

          <div className="hero-buttons">
            <button className="primary-button">
              Explore Opportunities →
            </button>

            <button className="secondary-button">
              How It Works
            </button>
          </div>

          <div className="hero-stats">

            <div>
              <strong>10K+</strong>
              <span>Young Talent</span>
            </div>

            <div>
              <strong>500+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>100+</strong>
              <span>Brands</span>
            </div>

          </div>

        </div>

        {/* Hero Visual */}
        <div className="hero-card">

          <div className="floating-card card-one">
            💡 <span>New Project</span>
          </div>

          <div className="main-card">

            <div className="card-icon">
              🚀
            </div>

            <h3>
              Build. Learn. Grow.
            </h3>

            <p>
              Work on real projects and turn your skills
              into valuable experience.
            </p>

            <div className="progress">
              <div></div>
            </div>

            <small>
              Opportunity unlocked
            </small>

          </div>

          <div className="floating-card card-two">
            ⭐ <span>Skills + Experience</span>
          </div>

        </div>

      </section>

      {/* How It Works */}
      <section
        className="section"
        id="how-it-works"
      >

        <div className="section-heading">

          <span>
            HOW IT WORKS
          </span>

          <h2>
            Start your journey in four simple steps
          </h2>

          <p>
            From discovering an opportunity to completing
            your project, getting started is simple.
          </p>

        </div>

        <div className="steps">

          <div className="step-card">

            <div className="step-number">
              01
            </div>

            <h3>
              Discover
            </h3>

            <p>
              Explore projects and opportunities that match
              your interests and skills.
            </p>

          </div>

          <div className="step-card">

            <div className="step-number">
              02
            </div>

            <h3>
              Apply
            </h3>

            <p>
              Choose the projects you like and apply to
              participate.
            </p>

          </div>

          <div className="step-card">

            <div className="step-number">
              03
            </div>

            <h3>
              Complete
            </h3>

            <p>
              Work on real-world tasks and deliver quality
              results.
            </p>

          </div>

          <div className="step-card">

            <div className="step-number">
              04
            </div>

            <h3>
              Grow
            </h3>

            <p>
              Gain experience, improve your skills and unlock
              new opportunities.
            </p>

          </div>

        </div>

      </section>

      {/* Opportunities */}
      <section
        className="section opportunities"
        id="opportunities"
      >

        <div className="section-heading">

          <span>
            OPPORTUNITIES
          </span>

          <h2>
            Find projects that match your skills
          </h2>

          <p>
            Work on practical projects and gain experience
            across different categories.
          </p>

        </div>

        <div className="opportunity-grid">

          <div className="opportunity-card">

            <div className="opportunity-icon">
              🎨
            </div>

            <h3>
              Content Creation
            </h3>

            <p>
              Create engaging content for brands and digital
              platforms.
            </p>

          </div>

          <div className="opportunity-card">

            <div className="opportunity-icon">
              📱
            </div>

            <h3>
              Digital Marketing
            </h3>

            <p>
              Help brands connect with audiences through
              creative digital campaigns.
            </p>

          </div>

          <div className="opportunity-card">

            <div className="opportunity-icon">
              📊
            </div>

            <h3>
              Research & Surveys
            </h3>

            <p>
              Participate in surveys, research and market
              feedback projects.
            </p>

          </div>

          <div className="opportunity-card">

            <div className="opportunity-icon">
              💻
            </div>

            <h3>
              Technology
            </h3>

            <p>
              Work on technology-focused tasks and develop
              practical experience.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta-section">

        <h2>
          Ready to turn your skills into opportunities?
        </h2>

        <p>
          Start learning, working and growing through
          real-world projects.
        </p>

        <button className="primary-button">
          Get Started →
        </button>

      </section>

      {/* Footer */}
      <footer>

        <div className="logo">
          funngro<span>.</span>
        </div>

        <p>
          Empowering young talent through real-world
          opportunities.
        </p>

        <div className="footer-links">

          <a href="#home">
            Home
          </a>

          <a href="#how-it-works">
            How It Works
          </a>

          <a href="#opportunities">
            Opportunities
          </a>

          <a href="/companies">
            Companies
          </a>

          <a href="/teens">
            Teens
          </a>

        </div>

        <p className="copyright">
          © 2026 Funngro Evaluation Project
        </p>

      </footer>

    </div>
  )
}


/* =========================================
   SIMPLE ROUTING
   ========================================= */

function AppRouter() {

  const currentPath = window.location.pathname

  // Companies page
  if (currentPath === '/companies') {
    return <Companies />
  }

  // Teens page
  if (currentPath === '/teens') {
    return <Teens />
  }

  // Homepage
  return <App />
}

export default AppRouter