// Root app

function App(){
  const defaults = JSON.parse(document.getElementById('tweak-defaults').textContent.replace(/\/\*EDITMODE-(BEGIN|END)\*\//g,''));
  const [tweaks, setTweaks] = React.useState(defaults);
  const [dark, setDarkState] = React.useState(defaults.dark);
  const [tweaksOpen, setTweaksOpen] = React.useState(false);

  const setDark = (v)=>{
    setDarkState(v);
    document.documentElement.setAttribute('data-theme', v?'dark':'light');
  };

  React.useEffect(()=>{
    // apply defaults
    const v = window.ACCENTS[defaults.accent] || window.ACCENTS.coral;
    const r = document.documentElement.style;
    r.setProperty('--accent-a', v.a);
    r.setProperty('--accent-b', v.b);
    r.setProperty('--accent-c', v.c);
    r.setProperty('--accent-d', v.d);
    r.setProperty('--accent-e', v.e);
    r.setProperty('--grad', `linear-gradient(100deg, ${v.a} 0%, ${v.b} 35%, ${v.c} 70%, ${v.d} 100%)`);
    const f = window.FONTS[defaults.font] || window.FONTS['serif-grotesk'];
    r.setProperty('--serif', f.serif);
    r.setProperty('--sans', f.sans);
    document.documentElement.setAttribute('data-theme', defaults.dark?'dark':'light');
  }, []);

  React.useEffect(()=>{
    // register edit mode handlers FIRST, then announce
    const onMsg = (e)=>{
      const d = e.data || {};
      if(d.type === '__activate_edit_mode') setTweaksOpen(true);
      if(d.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', onMsg);
    try{ window.parent.postMessage({type:'__edit_mode_available'}, '*'); }catch(e){}
    return ()=>window.removeEventListener('message', onMsg);
  }, []);

  // smooth-scroll nav links
  React.useEffect(()=>{
    const onClick = (e)=>{
      const a = e.target.closest('a[href^="#"]');
      if(!a) return;
      const id = a.getAttribute('href').slice(1);
      const el = id && document.getElementById(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
    };
    document.addEventListener('click', onClick);
    return ()=>document.removeEventListener('click', onClick);
  },[]);

  return (
    <>
      <Cursor/>
      <Nav dark={dark} setDark={setDark} onOpenTweaks={()=>setTweaksOpen(!tweaksOpen)}/>
      <main>
        <Hero/>
        <Marquee/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Services/>
        <Testimonials/>
        <Blog/>
        <Contact/>
      </main>
      <Footer/>
      <TweaksPanel open={tweaksOpen} tweaks={tweaks} setTweaks={setTweaks} dark={dark} setDark={setDark}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
