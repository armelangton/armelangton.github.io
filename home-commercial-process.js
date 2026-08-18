(() => {
  const services = document.getElementById('core-services');
  if (!services || document.getElementById('commercial-principle')) return;

  const style = document.createElement('style');
  style.textContent = `
    .commercial-principle{padding:clamp(4rem,6vw,6rem) 0;background:#f8fcfd}
    .commercial-principle-grid{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:clamp(2rem,5vw,5rem);align-items:start}
    .commercial-principle h2,.commercial-process h2{margin:0;color:#071a2d;font-family:Lora,Georgia,serif;font-size:clamp(2.2rem,3.8vw,3.35rem);font-weight:600;line-height:1.06;letter-spacing:-.035em}
    .commercial-principle p{max-width:720px;margin:0;color:#334155;font-size:1rem;line-height:1.75}
    .commercial-principle strong{color:#071a2d}

    .commercial-process{padding:clamp(4.5rem,7vw,6.5rem) 0;background:#fff}
    .commercial-process-head{display:flex;justify-content:space-between;gap:3rem;align-items:end;margin-bottom:2.4rem}
    .commercial-process-head p{max-width:520px;margin:0;color:#334155;font-size:.95rem;line-height:1.7}
    .commercial-process-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem}
    .commercial-step{min-height:230px;padding:1.55rem;border:1px solid #d9e3ea;border-radius:16px;background:#fff;box-shadow:0 10px 24px rgba(7,26,45,.04)}
    .commercial-step-number{display:grid;width:34px;height:34px;margin-bottom:1.4rem;border:1px solid #c8dcef;border-radius:10px;place-items:center;background:#eaf2fb;color:#2d6fb7;font-size:.72rem;font-weight:700}
    .commercial-step h3{margin:0 0 .55rem;color:#071a2d;font-size:1rem;font-weight:700}
    .commercial-step p{margin:0;color:#334155;font-size:.86rem;line-height:1.62}
    .commercial-step-note{display:block;margin-top:1rem;color:#2d6fb7;font-size:.75rem;font-weight:700;line-height:1.45}
    .commercial-process-action{margin-top:2rem}
    .commercial-process-action .button{background:#2d6fb7;color:#fff}
    .commercial-process-action .button:hover,.commercial-process-action .button:focus{background:#174f89}

    @media(max-width:980px){
      .commercial-principle-grid{grid-template-columns:1fr;gap:1.25rem}
      .commercial-process-head{display:block}
      .commercial-process-head p{margin-top:1rem}
      .commercial-process-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
    }
    @media(max-width:640px){
      .commercial-process-grid{grid-template-columns:1fr}
      .commercial-step{min-height:0}
    }
  `;
  document.head.appendChild(style);

  const principle = document.createElement('section');
  principle.id = 'commercial-principle';
  principle.className = 'commercial-principle';
  principle.innerHTML = `
    <div class="container commercial-principle-grid">
      <h2>Not every step should be AI.</h2>
      <p>The goal is to make the workflow run better. That can mean <strong>AI, automation, integrations, business rules, software, or human review</strong>—used where each one makes sense instead of forcing AI into every step.</p>
    </div>
  `;

  const process = document.createElement('section');
  process.id = 'commercial-process';
  process.className = 'commercial-process';
  process.innerHTML = `
    <div class="container">
      <div class="commercial-process-head">
        <h2>How a project moves forward</h2>
        <p>Start with the workflow. Define only the work that needs to be solved, then build toward a clear handoff.</p>
      </div>
      <div class="commercial-process-grid">
        <article class="commercial-step">
          <span class="commercial-step-number">01</span>
          <h3>Free discovery</h3>
          <p>We look at the workflow, the problem, the systems involved, and whether Palomma is a practical fit.</p>
        </article>
        <article class="commercial-step">
          <span class="commercial-step-number">02</span>
          <h3>Define the project</h3>
          <p>If the work is clear enough, you receive a fixed implementation proposal with the responsibility, scope, inputs, controls, acceptance criteria, and handoff defined.</p>
          <span class="commercial-step-note">Paid scoping or a prototype is used only when real uncertainty must be resolved first.</span>
        </article>
        <article class="commercial-step">
          <span class="commercial-step-number">03</span>
          <h3>Implement &amp; validate</h3>
          <p>We build the agreed workflow, connect the required systems and information, test behavior, and keep human decision points where they matter.</p>
        </article>
        <article class="commercial-step">
          <span class="commercial-step-number">04</span>
          <h3>Handoff &amp; optional continuation</h3>
          <p>The project ends with bounded stabilization, documentation, and handoff. Enhancements, maintenance, or optimization can be scoped separately when useful.</p>
        </article>
      </div>
      <div class="commercial-process-action"><a class="button button-primary" href="#contact">Discuss your workflow</a></div>
    </div>
  `;

  services.insertAdjacentElement('afterend', principle);
  principle.insertAdjacentElement('afterend', process);
})();
