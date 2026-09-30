import { Reveal } from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Research & Strategy",
    copy: "Market, competitor and funnel audits define the shortest route to revenue.",
  },
  {
    number: "02",
    title: "Implementation",
    copy: "Design, build and campaign launch shipped in tight, visible sprints.",
  },
  {
    number: "03",
    title: "Optimisation",
    copy: "Continuous testing on creative, copy and conversion paths.",
  },
  {
    number: "04",
    title: "Growth & Scaling",
    copy: "Scale the winners, expand channels, protect the margin.",
  },
];

export function Process() {
  return (
    <section id="about" className="dws-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8">
            <Reveal>
              <p className="dws-eyebrow mb-2">Process</p>
              <h2 className="dws-section-title display-5 mb-3">
                A framework built for compounding results.
              </h2>
              <p className="dws-muted mb-0">
                Four phases, run in loops - so growth is engineered, not guessed.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="row g-4 g-lg-5">
          {steps.map((step, i) => (
            <div className="col-12 col-sm-6 col-lg-3" key={step.number}>
              <Reveal delay={i * 0.1}>
                <div className="dws-step">
                  <div className="dws-step-number dws-mono">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p className="dws-muted small mb-0">{step.copy}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
