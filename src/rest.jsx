// Services, Testimonials, Blog, Contact, Footer, Cursor, Tweaks

function Services(){
  return (
    <section id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">Services</div>
            <h2 className="section-title">How I can <em>help</em>.</h2>
          </div>
        </Reveal>
        <div className="services">
          {window.SERVICES.map((s,i)=>(
            <Reveal key={s.n} className="service" style={{transitionDelay:`${i*80}ms`}} data-hover>
              <div className="s-num">— {s.n} /</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>{s.items.map(it=><li key={it}>{it}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials(){
  return (
    <section id="testimonials">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">Kind Words</div>
            <h2 className="section-title">Loved by <em>clients</em><br/>& teammates alike.</h2>
          </div>
        </Reveal>
        <div className="tests">
          {window.TESTIMONIALS.map((t,i)=>(
            <Reveal key={i} className="test" style={{transitionDelay:`${i*80}ms`}}>
              <div className="stars">★★★★★</div>
              <div className="q">"{t.quote}"</div>
              <div className="who">
                <div className="av">{t.name.split(' ').map(n=>n[0]).join('')}</div>
                <div>
                  <div className="n">{t.name}</div>
                  <div className="r">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog(){
  return (
    <section id="journal">
      <div className="wrap">
        <Reveal className="section-head" style={{alignItems:'flex-end'}}>
          <div>
            <div className="eyebrow">Journal</div>
            <h2 className="section-title">Notes from the <em>edit</em> buffer.</h2>
          </div>
          <a href="#" className="btn btn-ghost" data-hover>All posts <span className="arrow">↗</span></a>
        </Reveal>
        <div className="blog">
          {window.POSTS.map((p,i)=>(
            <Reveal key={i} className="post" style={{transitionDelay:`${i*80}ms`}} data-hover>
              <div className="p-meta">
                <span>{p.cat}</span><span>{p.date} · {p.read}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="read">Read essay <span>↗</span></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact(){
  const [form, setForm] = React.useState({name:'', email:'', msg:''});
  const [err, setErr] = React.useState({});
  const [sent, setSent] = React.useState(false);

  const submit = (e)=>{
    e.preventDefault();
    const errs = {};
    if(!form.name.trim()) errs.name = "Let me know what to call you.";
    if(!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = "That email looks off.";
    if(form.msg.trim().length < 10) errs.msg = "A tiny bit more detail, please.";
    setErr(errs);
    if(Object.keys(errs).length===0){
      setTimeout(()=>setSent(true), 400);
    }
  };

  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="contact">
          <div className="orb a" style={{top:-80,left:-80,width:340,height:340}}/>
          <div className="orb b" style={{bottom:-120,right:-80,width:300,height:300}}/>
          <div className="contact-grid">
            <div>
              <div className="eyebrow" style={{color:'#ffffffaa'}}>Let's make something</div>
              <h2>Got a <em>project</em>?<br/>Let's talk.</h2>
              <p style={{color:'#ffffffaa',fontSize:17,lineHeight:1.6,maxWidth:460}}>
                I'm currently taking on a couple of new full-stack projects for Q3 2026.
                Drop me a message or reach out on any of these.
              </p>

              <div className="links">
                <a href="mailto:alamgirofficial2k18@gmail.com" data-hover>
                  <span><span className="lbl">EMAIL /</span><br/>alamgirofficial2k18@gmail.com</span>
                  <span>↗</span>
                </a>
                <a href="tel:+8801717911704" data-hover>
                  <span><span className="lbl">PHONE /</span><br/>+880 1717 911 704</span>
                  <span>↗</span>
                </a>
                <a href="https://facebook.com/alamgir.rangpur" target="_blank" rel="noopener" data-hover>
                  <span><span className="lbl">FACEBOOK /</span><br/>/alamgir.rangpur</span>
                  <span>↗</span>
                </a>
                <a href="#" data-hover>
                  <span><span className="lbl">LOCATION /</span><br/>Rangpur, Bangladesh</span>
                  <span>●</span>
                </a>
              </div>
            </div>

            <div>
              {sent ? (
                <div className="sent">
                  <div style={{fontFamily:'var(--serif)',fontSize:32,lineHeight:1.1,marginBottom:10}}>
                    Message <em style={{fontStyle:'italic',background:'var(--grad)',WebkitBackgroundClip:'text',color:'transparent'}}>sent</em>.
                  </div>
                  <div style={{fontSize:14,color:'#ffffffbb'}}>I'll get back to you within 24 hours. Usually much sooner.</div>
                </div>
              ) : (
                <form className="c-form" onSubmit={submit} noValidate>
                  <div>
                    <label>Your name</label>
                    <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} data-hover/>
                    {err.name && <div className="err">{err.name}</div>}
                  </div>
                  <div>
                    <label>Email</label>
                    <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} data-hover/>
                    {err.email && <div className="err">{err.email}</div>}
                  </div>
                  <div>
                    <label>What can I build for you?</label>
                    <textarea value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} data-hover/>
                    {err.msg && <div className="err">{err.msg}</div>}
                  </div>
                  <button type="submit" className="submit-btn" data-hover>
                    Send message <span>↗</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer>
      <div className="wrap foot">
        <div className="copy">
          © 2026 Alamgir Hossain · Hand-crafted in Rangpur, BD
        </div>
        <div className="socials">
          <a className="soc" href="https://facebook.com/alamgir.rangpur" data-hover aria-label="Facebook">f</a>
          <a className="soc" href="mailto:alamgirofficial2k18@gmail.com" data-hover aria-label="Email">@</a>
          <a className="soc" href="tel:+8801717911704" data-hover aria-label="Phone">☎</a>
          <a className="soc" href="#top" data-hover aria-label="Top">↑</a>
        </div>
      </div>
    </footer>
  );
}

function Cursor(){
  const dot = React.useRef(null);
  const ring = React.useRef(null);
  React.useEffect(()=>{
    let mx=-99,my=-99,rx=-99,ry=-99;
    const move = (e)=>{ mx=e.clientX;my=e.clientY; if(dot.current){dot.current.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`} };
    const loop = ()=>{
      rx += (mx-rx)*.18; ry += (my-ry)*.18;
      if(ring.current){ring.current.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`}
      requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', move);
    requestAnimationFrame(loop);
    const over = (e)=>{ if(e.target.closest && e.target.closest('[data-hover],a,button')) dot.current?.classList.add('grow'); };
    const out  = (e)=>{ if(e.target.closest && e.target.closest('[data-hover],a,button')) dot.current?.classList.remove('grow'); };
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    return ()=>{window.removeEventListener('mousemove',move);document.removeEventListener('mouseover',over);document.removeEventListener('mouseout',out);};
  },[]);
  return <>
    <div ref={ring} className="cursor-ring"/>
    <div ref={dot} className="cursor"/>
  </>;
}

const ACCENTS = {
  coral:    { a:'#ff5b3a', b:'#ff2e8a', c:'#6b4bff', d:'#00c2b8', e:'#ffd23a' },
  sunset:   { a:'#ff7a3a', b:'#ffcb3a', c:'#ff2e8a', d:'#6b4bff', e:'#00c2b8' },
  aurora:   { a:'#00c2b8', b:'#6b4bff', c:'#ff2e8a', d:'#3aa0ff', e:'#ffd23a' },
  forest:   { a:'#2ecc71', b:'#00c2b8', c:'#6b4bff', d:'#ffd23a', e:'#ff5b3a' },
};
const FONTS = {
  'serif-grotesk': { serif:"'Instrument Serif', serif", sans:"'Space Grotesk', sans-serif" },
  'display-mono':  { serif:"'Instrument Serif', serif", sans:"'JetBrains Mono', monospace" },
  'classic':       { serif:"'Instrument Serif', serif", sans:"Helvetica, 'Helvetica Neue', Arial, sans-serif" },
};

function TweaksPanel({ open, tweaks, setTweaks, dark, setDark }){
  const setAcc = (key)=>{
    const v = ACCENTS[key];
    const r = document.documentElement.style;
    r.setProperty('--accent-a', v.a);
    r.setProperty('--accent-b', v.b);
    r.setProperty('--accent-c', v.c);
    r.setProperty('--accent-d', v.d);
    r.setProperty('--accent-e', v.e);
    r.setProperty('--grad', `linear-gradient(100deg, ${v.a} 0%, ${v.b} 35%, ${v.c} 70%, ${v.d} 100%)`);
    setTweaks({...tweaks, accent:key});
    postEdit({accent:key});
  };
  const setFont = (key)=>{
    const v = FONTS[key];
    const r = document.documentElement.style;
    r.setProperty('--serif', v.serif);
    r.setProperty('--sans', v.sans);
    setTweaks({...tweaks, font:key});
    postEdit({font:key});
  };
  const toggleDark = ()=>{
    const nd = !dark; setDark(nd); postEdit({dark:nd});
  };
  const postEdit = (edits)=>{
    try{ window.parent.postMessage({type:'__edit_mode_set_keys', edits}, '*'); }catch(e){}
  };

  if(!open) return null;
  return (
    <div className="tweaks on">
      <h5>Tweaks</h5>
      <div className="tweak-row">
        <label>Accent</label>
        <div className="swatches">
          {Object.entries(ACCENTS).map(([k,v])=>(
            <button key={k} className={`sw ${tweaks.accent===k?'on':''}`}
              style={{background:`linear-gradient(135deg,${v.a},${v.b},${v.c})`}}
              onClick={()=>setAcc(k)} aria-label={k}/>
          ))}
        </div>
      </div>
      <div className="tweak-row">
        <label>Type</label>
        <div className="fontsel">
          {Object.keys(FONTS).map(k=>(
            <button key={k} className={tweaks.font===k?'on':''} onClick={()=>setFont(k)}>
              {k.split('-')[0]}
            </button>
          ))}
        </div>
      </div>
      <div className="tweak-row">
        <label>Dark mode</label>
        <div className={`toggle ${dark?'on':''}`} onClick={toggleDark}/>
      </div>
    </div>
  );
}

Object.assign(window, { Services, Testimonials, Blog, Contact, Footer, Cursor, TweaksPanel, ACCENTS, FONTS });
