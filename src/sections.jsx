// Nav, Hero, Marquee, About, Skills

function Reveal({ children, className="", as:Tag="div", ...rest }){
  const ref = React.useRef(null);
  const [inView, setIn] = React.useState(false);
  React.useEffect(()=>{
    const el = ref.current; if(!el) return;
    const io = new IntersectionObserver((ents)=>{
      ents.forEach(e=>{ if(e.isIntersecting) setIn(true); });
    },{threshold:.12});
    io.observe(el); return ()=>io.disconnect();
  },[]);
  return <Tag ref={ref} className={`reveal ${inView?'in':''} ${className}`} {...rest}>{children}</Tag>;
}

function Nav({ dark, setDark, onOpenTweaks }){
  return (
    <nav className="nav">
      <a className="logo" href="#top">
        <span className="dot"/>
        <span>Alamgir<em style={{opacity:.6,fontStyle:'italic'}}>.</em></span>
      </a>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#journal">Journal</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="right">
        <button className="theme-btn" onClick={()=>setDark(!dark)} aria-label="Toggle theme">
          {dark ? "☾" : "☀"}
        </button>
        <a href="#contact" className="nav-cta">
          <span style={{width:6,height:6,borderRadius:'50%',background:'#22c55e'}}/>
          Available for work
        </a>
      </div>
    </nav>
  );
}

const HERO_ROLES = ["Full-stack Developer", "Interface Engineer", "SaaS Architect", "Design-minded Coder"];

function Hero(){
  const [idx, setIdx] = React.useState(0);
  const [sub, setSub] = React.useState("");
  const [del, setDel] = React.useState(false);
  React.useEffect(()=>{
    const full = HERO_ROLES[idx];
    let t;
    if(!del && sub.length < full.length){
      t = setTimeout(()=>setSub(full.slice(0, sub.length+1)), 70);
    } else if(!del && sub.length === full.length){
      t = setTimeout(()=>setDel(true), 1600);
    } else if(del && sub.length > 0){
      t = setTimeout(()=>setSub(full.slice(0, sub.length-1)), 35);
    } else if(del && sub.length === 0){
      setDel(false); setIdx((idx+1) % HERO_ROLES.length);
    }
    return ()=>clearTimeout(t);
  }, [sub, del, idx]);

  return (
    <section className="hero" id="top">
      <div className="orb a"/><div className="orb b"/><div className="orb c"/>
      <div className="wrap hero-grid">
        <div>
          <div className="typing">
            <span className="dot-live"/>
            <span>{sub}<span className="caret"/></span>
          </div>
          <h1>
            Alamgir<br/>
            <span className="it">Hossain.</span>
          </h1>
          <p className="hero-sub">
            Full-stack developer from Rangpur, Bangladesh. Five years building fast,
            delightful products — from a first line of <em style={{fontFamily:'var(--mono)',fontSize:'.9em'}}>npm init</em> to the moment real users click the button.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-grad" data-hover>
              See selected work <span className="arrow">↗</span>
            </a>
            <a href="#contact" className="btn btn-ghost" data-hover>
              Start a project
            </a>
          </div>

          <div className="hero-stats">
            <div><div className="num">5<span style={{color:'var(--accent-b)'}}>+</span></div><div className="lbl">Years shipping</div></div>
            <div><div className="num">60<span style={{color:'var(--accent-c)'}}>+</span></div><div className="lbl">Projects delivered</div></div>
            <div><div className="num">18</div><div className="lbl">Happy clients</div></div>
          </div>
        </div>

        <div className="photo-stage">
          <div className="frame">
            <img src="assets/alamgir.jpg" alt="Alamgir Hossain"/>
          </div>
          <div className="badge b1" data-hover>
            <span className="kbd">⌘K</span> Currently open to freelance
          </div>
          <div className="badge b2" data-hover>
            📍 Rangpur, BD · UTC+6
          </div>
          <div className="badge b3" data-hover>
            <span style={{color:'var(--accent-a)'}}>●</span> 5+ yrs · Full-stack
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee(){
  const words = ["React", "Next.js", "TypeScript", "Node", "GraphQL", "Postgres", "Motion", "Tailwind", "AWS", "Figma"];
  const row = words.concat(words);
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row.map((w,i)=>(<span key={i}>{w}</span>))}
      </div>
    </div>
  );
}

function About(){
  return (
    <section id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">About</div>
            <h2 className="section-title">The <em>person</em> behind the code.</h2>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <p className="about-lead">
              I'm a full-stack developer who still gets a kick out of the moment a <em>new idea</em> becomes a real, clickable thing on the internet.
            </p>
            <div className="about-body" style={{marginTop:28}}>
              <p>
                Based in Rangpur, Bangladesh, I've spent the last five years helping founders, agencies
                and product teams ship web apps that are fast, accessible and genuinely fun to use.
                I care about the whole stack — from a tidy Postgres schema to the exact easing curve of a hover state.
              </p>
              <p style={{marginTop:14}}>
                When I'm not shipping, I write about the craft of web development, mentor juniors at the local
                tech collective, and over-optimize my personal dotfiles.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="fact-card">
              <div className="fact-row"><span>Name</span><span>Alamgir Hossain</span></div>
              <div className="fact-row"><span>Based in</span><span>Rangpur, Bangladesh</span></div>
              <div className="fact-row"><span>Experience</span><span>5+ years</span></div>
              <div className="fact-row"><span>Focus</span><span>Full-stack · Design Eng</span></div>
              <div className="fact-row"><span>Languages</span><span>Bangla · English</span></div>
              <div className="fact-row"><span>Status</span><span style={{color:'#22c55e',fontWeight:600}}>● Available</span></div>
            </div>
            <a href="#" className="btn btn-ghost" style={{marginTop:18}} data-hover>
              Download resume <span className="arrow">↓</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Skills(){
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">Toolbox</div>
            <h2 className="section-title">Built with <em>care</em>,<br/>shipped with <em>speed</em>.</h2>
          </div>
          <div style={{fontFamily:'var(--mono)',fontSize:12,color:'var(--ink-2)',maxWidth:260,textAlign:'right'}}>
            A curated stack I've battle-tested across 60+ production builds.
          </div>
        </Reveal>

        <div className="skills-grid">
          {window.SKILLS.map((s,i)=>(
            <Reveal key={s.label} className="skill" style={{transitionDelay:`${i*60}ms`}} data-hover>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div className="icn">{s.icon}</div>
                <div className="tag">{s.tag}</div>
              </div>
              <h4>{s.label}</h4>
              <div className="skill-level"><i style={{width:`${s.level}%`}}/></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Reveal, Nav, Hero, Marquee, About, Skills });
