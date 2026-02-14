import type { Route } from "./+types/home";
import Navbar from "../../components/Navbar";
import { ArrowBigDown, ArrowUpRight, Clock, Layers } from "lucide-react";
import Button from "components/ui/Button";
import Upload from "components/Upload";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        <div className="announce">
          <div className="dot">
            <div className="pluse"></div>
          </div>
          <p>Introducting Roomify</p>
        </div>
        <h1>Build beautiful spaces at the speed of thoughts with Roomify</h1>
        <p className="subtitle">
          Roomify is a powerful and intuitive platform that empowers you to create stunning virtual spaces with ease. Whether you're designing a cozy living room, a modern office,
          or a vibrant event venue, Roomify provides
          the tools and features you need to bring your
          vision to life. With its user-friendly interface
          and extensive library of customizable elements,
          Roomify allows you to unleash your creativity and
          build beautiful spaces at the speed of thoughts.
        </p>
        <div className="actions">
          <a href="#upload" className="cta">Start Building
            <ArrowBigDown className="icon" />
          </a>
          <Button variant="outline" size="lg" className="demo">
            Watch Demo
          </Button>
        </div>
        <div id="upload" className="upload-shell">
          <div className="grid-overlay" />
          <div className="upload-card">
            <div className="upload-head">
              <div className="upload-icon">
                <Layers className="icon" />
              </div>
              <h3>Upload your floor plan and let Roomify do the rest</h3>
              <p>Supports JPG, PNG formats upto 10MB</p>

            </div>
            <Upload />
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="section-inner">
          <div className="section-head">
            <div className="copy">
              <h2>Projects</h2>
              <p>Your latest work and community projects,all in one place</p>
            </div>
            <div className="projects-grid">
              <div className="project-card group">
                <div className="preview">
                  <img src="https://roomify-mlhuk267-dfwu1i.puter.site/projects/1770803585402/rendered.png" alt="Living Room" />
                  <div className="badge">
                    <span>Cumminity</span>
                  </div>
                </div>
                <div className="card-body">
                  <div>
                    <h3>Project Manhattan</h3>
                    <div className="meta">
                      <Clock size={12} />
                      <span>{new Date(1770803585402).toLocaleDateString()}</span>
                      <span>By Sayan Mallick</span>
                    </div>
                  </div>
                  <div className="arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
