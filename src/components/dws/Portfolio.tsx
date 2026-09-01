import { Reveal } from "./Reveal";
import { SmartImage } from "./SmartImage";
import { projects } from "@/data/site";

export function Portfolio() {
  return (
    <section id="portfolio" className="dws-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8">
            <Reveal>
              <p className="dws-eyebrow mb-2">Portfolio</p>
              <h2 className="dws-section-title display-5 mb-0">Selected work.</h2>
            </Reveal>
          </div>
        </div>

        <div className="dws-work-grid">
          {projects.map((item, i) => (
            <Reveal delay={i * 0.08} key={item.name}>
              <article className="dws-work h-100 d-flex flex-column">
                <div className="dws-work-canvas">
                  <SmartImage
                    src={item.thumb}
                    alt={`${item.name} preview`}
                    width={640}
                    height={400}
                  />
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="h5 mb-0">{item.name}</h3>
                    <span className="dws-muted small">{item.type}</span>
                  </div>
                  <p className="dws-muted small mb-4">{item.description}</p>
                  <a
                    className="dws-work-link mt-auto"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View live site <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
