// Projects + Experience

function Projects(){
  const [filter, setFilter] = React.useState("All");
  const cats = ["All","Full-stack","Frontend","Backend","SaaS","Dashboard"];

  return (
    <section id="work">
      <div className="wrap">
        <Reveal className="section-head" style={{alignItems:'flex-end'}}>
          <div>
            <div className="eyebrow">Selected Work · 2021—2026</div>
            <h2 className="section-title">Things I've <em>shipped</em>.</h2>
          </div>
          <div className="filters">
            {cats.map(c=>(
              <button key={c} className={`chip ${filter===c?'active':''}`} onClick={()=>setFilter(c)} data-hover>
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="projects">
          {window.PROJECTS.map((p,i)=>{
            const show = filter==="All" || p.tag.includes(filter);
            return (
              <Reveal key={p.id}
                className={`project size-${p.size} ${show?'':'hide'}`}
                style={{transitionDelay:`${i*40}ms`}}
                data-hover>
                <div className="cover" style={{background:p.grad}}>
                  {/* decorative pattern */}
                  <svg width="100%" height="100%" style={{opacity:.25,mixBlendMode:'overlay'}} preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 400">
                    <defs>
                      <pattern id={`pt${p.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="1" fill="#fff"/>
                      </pattern>
                    </defs>
                    <rect width="400" height="400" fill={`url(#pt${p.id})`}/>
                  </svg>
                  <div style={{
                    position:'absolute',inset:0,
                    background:'radial-gradient(120% 80% at 50% 120%,transparent 40%,#0005 100%)'
                  }}/>
                </div>
                <div className="num">0{p.id < 10 ? p.id : ''}{p.id >= 10 ? p.id : ''}</div>
                <div className="arrow-go">↗</div>
                <div className="overlay"/>
                <div className="meta">
                  <div className="tag-row">
                    {p.tag.map(t=><span key={t}>{t}</span>)}
                  </div>
                  <h3>{p.title}</h3>
                  <div style={{opacity:.8,fontFamily:'var(--mono)',fontSize:12}}>
                    {p.tech.join(" · ")}
                  </div>
                  <p className="desc">{p.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience(){
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">Experience</div>
            <h2 className="section-title">Five years.<br/>Still <em>hungry</em>.</h2>
          </div>
        </Reveal>

        <div>
          {window.EXPERIENCE.map((x,i)=>(
            <Reveal key={i} className="tl-item" style={{transitionDelay:`${i*80}ms`}}>
              <div>
                <div className="tl-company">{x.company}</div>
                <h3 className="tl-role">{x.role}</h3>
              </div>
              <p className="tl-desc">{x.desc}</p>
              <div className="tl-date">{x.date}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Projects, Experience });
