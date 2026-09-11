import { Header, Footer } from "@/components/SiteChrome";

export default function WomenEmpowermentPage() {
  const focusAreas = [
    ["01", "Women Skill Development", "महिलांना रोजगाराभिमुख आणि practical skills शिकण्याच्या संधी देऊन आत्मविश्वास व स्वावलंबनाला चालना देणे."],
    ["02", "Digital & Computer Skills", "Computer, digital tools आणि technology चा वापर शिकवून महिलांना digital world मध्ये सक्षम बनवणे."],
    ["03", "Financial Awareness", "बचत, आर्थिक नियोजन आणि उपलब्ध संधींबाबत मूलभूत financial awareness वाढवण्यासाठी मार्गदर्शन."],
    ["04", "Entrepreneurship", "स्वतःचा छोटा व्यवसाय किंवा income-generating activity सुरू करण्यासाठी आवश्यक कौशल्ये आणि मार्गदर्शनाला प्रोत्साहन."],
    ["05", "Confidence & Communication", "Communication, leadership, decision-making आणि personality development च्या माध्यमातून आत्मविश्वास वाढवणे."],
    ["06", "Awareness & Opportunities", "शिक्षण, रोजगार, कौशल्य प्रशिक्षण आणि विविध संधींबाबत महिलांमध्ये जागरूकता निर्माण करणे."],
  ];

  const photos = [1, 2, 3, 4, 5, 6].map((n) => `/images/women-empowerment-${n}.jpg`);

  const videos = [
    ["women-empowerment-video-1.mp4", "Women Skill Training", "महिलांसाठी skill development आणि practical learning activity."],
    ["women-empowerment-video-2.mp4", "Digital Empowerment", "Computer आणि digital skills learning session."],
    ["women-empowerment-video-3.mp4", "Confidence & Entrepreneurship", "Communication, confidence building आणि entrepreneurship activity."],
  ];

  return (
    <>
      <Header />
      <main className="women-page">
        <style>{`
          .women-page{--ink:#34253a;--muted:#766b78;--purple:#80506f;--soft:#f5edf3;--gold:#d5a447;--rose:#c56d78;--line:#e8dfe5;background:#fcfafb;color:var(--ink);overflow:hidden}
          .women-shell{width:min(1180px,calc(100% - 40px));margin:auto}
          .women-hero{min-height:650px;position:relative;display:flex;align-items:center;isolation:isolate;background:#34253a;color:#fff}
          .women-hero video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-3}
          .women-hero:before{content:"";position:absolute;inset:0;z-index:-2;background:linear-gradient(90deg,rgba(42,27,43,.95),rgba(54,34,52,.76) 48%,rgba(54,34,52,.24))}
          .women-hero:after{content:"";position:absolute;width:440px;height:440px;right:-170px;bottom:-220px;border:1px solid #ffffff2e;border-radius:50%;box-shadow:0 0 0 90px #ffffff09,0 0 0 180px #ffffff05;z-index:-1}
          .women-hero-content{max-width:800px;padding:110px 0 100px}
          .women-eyebrow{display:inline-flex;gap:10px;align-items:center;padding:8px 14px;border:1px solid #ffffff47;border-radius:999px;background:#ffffff14;backdrop-filter:blur(8px);font-size:12px;letter-spacing:.14em;text-transform:uppercase;font-weight:700}
          .women-eyebrow span{width:7px;height:7px;border-radius:50%;background:#e89aa3}
          .women-hero h1{margin:24px 0 18px;font-family:Georgia,"Times New Roman",serif;font-size:clamp(48px,7vw,88px);line-height:.98;letter-spacing:-.045em;font-weight:500}
          .women-hero h1 em{color:#f0dce8;font-style:normal}.women-hero p{max-width:680px;margin:0;color:#ffffffd1;font-size:18px;line-height:1.75}
          .women-intro{padding:105px 0 80px}.women-intro-grid,.women-feature-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:70px;align-items:end}
          .women-kicker{color:var(--purple);font-size:12px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}
          .women-intro h2,.women-section-heading h2{margin:12px 0 0;font-family:Georgia,"Times New Roman",serif;font-size:clamp(36px,5vw,60px);line-height:1.05;letter-spacing:-.035em;font-weight:500}
          .women-intro-copy{color:var(--muted);font-size:17px;line-height:1.85}.women-intro-copy strong{color:var(--ink)}
          .women-focus{padding:35px 0 105px}.women-section-heading{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:42px}.women-section-heading p{max-width:450px;margin:0;color:var(--muted);line-height:1.7}
          .women-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.women-card{min-height:285px;padding:30px;border:1px solid var(--line);border-radius:24px;background:#fff;transition:.25s}
          .women-card:hover{transform:translateY(-6px);border-color:#80506f59;box-shadow:0 18px 50px #34253a17}.women-number{display:inline-flex;width:40px;height:40px;align-items:center;justify-content:center;border-radius:12px;background:var(--soft);color:var(--purple);font-size:12px;font-weight:800;margin-bottom:55px}
          .women-card h3{margin:0 0 12px;font-size:21px}.women-card p{margin:0;color:var(--muted);line-height:1.7;font-size:14px}
          .women-feature{margin-bottom:105px;padding:70px 0;background:var(--ink);color:#fff}.women-feature-grid{align-items:center}.women-feature h2{max-width:650px;margin:14px 0 20px;font-family:Georgia,"Times New Roman",serif;font-size:clamp(36px,5vw,58px);line-height:1.05;font-weight:500}.women-feature p{max-width:610px;color:#ffffffb3;line-height:1.8}
          .women-feature-list{display:grid;gap:12px}.women-feature-item{padding:19px 20px;border:1px solid #ffffff21;border-radius:16px;background:#ffffff0b}.women-feature-item b{display:block;margin-bottom:5px}.women-feature-item span{color:#ffffff99;font-size:13px}
          .women-gallery{padding-bottom:110px}.women-gallery-grid{display:grid;grid-template-columns:1.2fr .8fr .8fr;grid-auto-rows:250px;gap:14px}.women-photo{overflow:hidden;border-radius:22px;background:#eee5ea}.women-photo:first-child{grid-row:span 2}.women-photo img{width:100%;height:100%;object-fit:cover;display:block;transition:.5s}.women-photo:hover img{transform:scale(1.045)}
          .women-videos{padding:90px 0 110px;background:#f6eff4}.women-video-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.women-video-card{overflow:hidden;border-radius:22px;background:#fff;border:1px solid var(--line)}.women-video-card video{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;background:var(--ink)}.women-video-copy{padding:22px}.women-video-copy h3{margin:0 0 8px;font-size:19px}.women-video-copy p{margin:0;color:var(--muted);font-size:14px;line-height:1.65}
          .women-quote{padding:105px 0;text-align:center}.women-quote-mark{color:var(--rose);font-family:Georgia,serif;font-size:70px;line-height:.5}.women-quote blockquote{max-width:900px;margin:25px auto 0;font-family:Georgia,"Times New Roman",serif;font-size:clamp(28px,4vw,48px);line-height:1.25;letter-spacing:-.025em}.women-quote p{margin:22px 0 0;color:var(--muted);font-size:13px;text-transform:uppercase;letter-spacing:.14em;font-weight:700}
          .women-cta{margin-bottom:100px;padding:65px;border-radius:30px;background:linear-gradient(135deg,#80506f,#59425e);color:#fff;display:flex;justify-content:space-between;align-items:center;gap:35px}.women-cta h2{margin:0 0 10px;font-family:Georgia,"Times New Roman",serif;font-size:clamp(34px,4vw,52px);font-weight:500}.women-cta p{max-width:650px;margin:0;color:#ffffffbf;line-height:1.7}.women-cta a{display:inline-flex;padding:15px 23px;border-radius:999px;background:#fff;color:var(--ink);text-decoration:none;font-size:14px;font-weight:800}
          @media(max-width:900px){.women-intro-grid,.women-feature-grid{grid-template-columns:1fr;gap:35px}.women-grid,.women-video-grid{grid-template-columns:repeat(2,1fr)}.women-gallery-grid{grid-template-columns:repeat(2,1fr)}.women-photo:first-child{grid-row:span 1}.women-cta{padding:42px 30px;align-items:flex-start;flex-direction:column}}
          @media(max-width:620px){.women-shell{width:calc(100% - 28px)}.women-hero{min-height:600px}.women-hero-content{padding:90px 0 80px}.women-grid,.women-video-grid,.women-gallery-grid{grid-template-columns:1fr}.women-gallery-grid{grid-auto-rows:280px}.women-section-heading{display:block}.women-section-heading p{margin-top:18px}.women-card{min-height:auto}.women-number{margin-bottom:35px}}
        `}</style>

        <section className="women-hero">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/images/women-empowerment-hero.mp4" type="video/mp4" />
          </video>
          <div className="women-shell"><div className="women-hero-content">
            <div className="women-eyebrow"><span /> Women Empowerment</div>
            <h1>Empower women.<br /><em>Strengthen communities.</em></h1>
            <p>महिलांना शिक्षण, कौशल्य, आर्थिक जागरूकता आणि आत्मविश्वासाच्या माध्यमातून अधिक सक्षम आणि स्वावलंबी बनवण्यासाठी विविध उपक्रमांना प्रोत्साहन देणे हा Women Empowerment चा केंद्रबिंदू आहे.</p>
          </div></div>
        </section>

        <section className="women-intro"><div className="women-shell women-intro-grid">
          <div><div className="women-kicker">Our Women Empowerment Focus</div><h2>सक्षम महिला, सक्षम कुटुंब आणि सक्षम समाज.</h2></div>
          <div className="women-intro-copy"><p><strong>Prerna Foundation</strong> च्या Women Empowerment उपक्रमांमध्ये महिलांना skills, digital knowledge, communication आणि आर्थिक संधींबाबत जागरूक करण्यावर भर दिला जातो.</p><p>महिलांना स्वतःचे निर्णय घेण्यासाठी confidence, नवीन कौशल्ये शिकण्यासाठी learning opportunities आणि रोजगार किंवा entrepreneurship साठी आवश्यक मार्गदर्शन मिळावे, हा या प्रयत्नांचा उद्देश आहे.</p></div>
        </div></section>

        <section className="women-focus"><div className="women-shell">
          <div className="women-section-heading"><div><div className="women-kicker">What We Work On</div><h2>Women Empowerment</h2></div><p>कौशल्य, ज्ञान, आत्मविश्वास आणि संधी यांच्या माध्यमातून महिलांच्या स्वावलंबनाला चालना देणारे उपक्रम.</p></div>
          <div className="women-grid">{focusAreas.map(([n,t,d])=><article className="women-card" key={t}><div className="women-number">{n}</div><h3>{t}</h3><p>{d}</p></article>)}</div>
        </div></section>

        <section className="women-feature"><div className="women-shell women-feature-grid">
          <div><div className="women-kicker" style={{color:"#d5a447"}}>Opportunity &amp; Independence</div><h2>संधी मिळाली तर क्षमता स्वतःची वाट निर्माण करते.</h2><p>Women empowerment म्हणजे केवळ मदत देणे नाही; तर महिलांना शिकण्याची, कौशल्य विकसित करण्याची, निर्णय घेण्याची आणि स्वतःच्या क्षमतेवर उभे राहण्याची संधी निर्माण करणे आहे.</p></div>
          <div className="women-feature-list">
            <div className="women-feature-item"><b>Learn</b><span>नवीन knowledge आणि skills आत्मसात करण्याची संधी.</span></div>
            <div className="women-feature-item"><b>Earn</b><span>रोजगार आणि income-generating opportunities साठी तयारी.</span></div>
            <div className="women-feature-item"><b>Lead</b><span>Confidence, decision-making आणि leadership development.</span></div>
            <div className="women-feature-item"><b>Grow</b><span>स्वावलंबन आणि दीर्घकालीन personal growth ला प्रोत्साहन.</span></div>
          </div>
        </div></section>

        <section className="women-gallery"><div className="women-shell">
          <div className="women-section-heading"><div><div className="women-kicker">Activities</div><h2>Empowerment In Action</h2></div><p>Training, awareness, skill development आणि women-focused activities मधील काही क्षण.</p></div>
          <div className="women-gallery-grid">{photos.map((src,i)=><div className="women-photo" key={src}><img src={src} alt={`Women empowerment activity ${i+1}`} loading={i>1?"lazy":"eager"} /></div>)}</div>
        </div></section>

        <section className="women-videos"><div className="women-shell">
          <div className="women-section-heading"><div><div className="women-kicker">Videos</div><h2>Stories In Motion</h2></div><p>Women skill training, digital learning आणि empowerment activities चे video highlights.</p></div>
          <div className="women-video-grid">{videos.map(([src,title,text])=><article className="women-video-card" key={src}><video controls preload="metadata" playsInline><source src={`/images/${src}`} type="video/mp4" /></video><div className="women-video-copy"><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div></section>

        <section className="women-quote"><div className="women-shell"><div className="women-quote-mark">“</div><blockquote>महिलांना सक्षम करणे म्हणजे एका व्यक्तीला नव्हे, तर संपूर्ण कुटुंबाला आणि समाजाला पुढे नेणे.</blockquote><p>Prerna Foundation • Women Empowerment</p></div></section>

        <section className="women-shell"><div className="women-cta"><div><h2>महिलांच्या प्रगतीच्या प्रवासात सहभागी व्हा.</h2><p>Skills, learning आणि opportunities च्या माध्यमातून महिलांना अधिक सक्षम आणि स्वावलंबी बनवण्यासाठी तुमचा सहभाग महत्त्वाचा आहे.</p></div><a href="/contact">Get Involved →</a></div></section>
      </main>
      <Footer />
    </>
  );
}
