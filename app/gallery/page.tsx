import { Header, Footer } from "@/components/SiteChrome";
import { connectDB } from "@/lib/db";
import { Collection } from "@/models";

const placeholders = [
  ["/images/hero-water-conservation.png", "Water conservation"],
  ["/images/education-placeholder.png", "Education initiatives"],
  ["/images/health-placeholder.png", "Community health"],
  ["/images/education-placeholder.png", "Skill development"],
  ["/images/hero-water-conservation.png", "Rural development"],
  ["/images/health-placeholder.png", "Women empowerment"],
];

export default async function Gallery() {
  let gallery: any[] = [];

  try {
    await connectDB();
    gallery = await Collection.find({
      type: "gallery",
      published: true,
    })
      .sort("order")
      .lean();
  } catch {
    gallery = [];
  }

  const items = gallery.length
    ? gallery
    : placeholders.map(([image, title], index) => ({
        _id: `placeholder-${index}`,
        image,
        title,
        description: "Representative visual",
      }));

  return (
    <>
      <Header />

      <main className="gallery-page">
        <section className="gallery-intro shell">
          <div className="gallery-intro-copy">
            <span className="gallery-eyebrow">Stories in pictures</span>
            <h1>Gallery</h1>
            <p>
              A visual collection of Prerna Foundation&apos;s work, community
              initiatives and moments of change.
            </p>
          </div>

          <div className="gallery-intro-mark" aria-hidden="true">
            <span>PRERNA</span>
            <strong>01</strong>
          </div>
        </section>

        <section className="shell gallery-content">
          {!gallery.length && (
            <div className="gallery-notice">
              <span>Gallery preview</span>
              <p>
                Temporary representative visuals are shown below. Replace them
                with verified Prerna Foundation photographs through the Gallery
                CMS before launch.
              </p>
            </div>
          )}

          <div className="gallery-grid">
            {items.map((item: any, index: number) => (
              <figure className="gallery-item" key={item._id}>
                {item.image ? (
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noreferrer"
                    className="gallery-image-link"
                  >
                    <img
                      src={item.image}
                      alt={item.title || "Prerna Foundation"}
                    />
                    <span className="gallery-view">View image ↗</span>
                  </a>
                ) : (
                  <div className="gallery-no-image">Image unavailable</div>
                )}

                <figcaption>
                  <div className="gallery-caption-top">
                    <span className="gallery-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2>
                      {item.title || "Prerna Foundation initiative"}
                    </h2>
                  </div>

                  {item.description && (
                    <p>{item.description}</p>
                  )}

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="gallery-album-link"
                    >
                      View album →
                    </a>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="gallery-bottom shell">
          <div>
            <span className="gallery-eyebrow">More than photographs</span>
            <h2>
              Every image carries a story of people, purpose and progress.
            </h2>
          </div>
          <div className="gallery-bottom-number">2026</div>
        </section>
      </main>

      <Footer />

      <style>{`
        .gallery-page{
          --ink:#10251c;
          --muted:#68776e;
          --line:rgba(16,37,28,.12);
          --soft:#f3f7f4;
          --green:#0d6b48;
          background:#fff;
          color:var(--ink);
        }

        .gallery-page .shell{
          width:min(1180px,calc(100% - 48px));
          margin:0 auto;
        }

        /* INTRO */
        .gallery-intro{
          min-height:380px;
          padding-top:105px;
          padding-bottom:58px;
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          gap:45px;
          border-bottom:1px solid var(--line);
        }

        .gallery-intro-copy{
          max-width:720px;
        }

        .gallery-eyebrow{
          display:inline-block;
          text-transform:uppercase;
          letter-spacing:.17em;
          font-size:10px;
          line-height:1;
          font-weight:800;
          color:var(--green);
        }

        .gallery-intro h1{
          margin:14px 0 18px;
          font-size:clamp(56px,8vw,104px);
          line-height:.84;
          letter-spacing:-.075em;
          font-weight:800;
        }

        .gallery-intro-copy p{
          max-width:560px;
          margin:0;
          color:var(--muted);
          font-size:16px;
          line-height:1.65;
        }

        .gallery-intro-mark{
          width:135px;
          padding:15px 0;
          border-top:1px solid var(--line);
          display:flex;
          justify-content:space-between;
          color:#7b8880;
        }

        .gallery-intro-mark span{
          font-size:9px;
          letter-spacing:.18em;
          font-weight:800;
        }

        .gallery-intro-mark strong{
          font-size:29px;
          line-height:.9;
          letter-spacing:-.05em;
        }

        /* CONTENT */
        .gallery-content{
          padding-top:58px;
          padding-bottom:82px;
        }

        .gallery-notice{
          margin-bottom:34px;
          padding:18px 21px;
          border:1px solid var(--line);
          border-radius:12px;
          background:var(--soft);
        }

        .gallery-notice span{
          display:block;
          margin-bottom:5px;
          text-transform:uppercase;
          letter-spacing:.14em;
          font-size:9px;
          font-weight:800;
          color:var(--green);
        }

        .gallery-notice p{
          margin:0;
          max-width:760px;
          color:var(--muted);
          font-size:12px;
          line-height:1.6;
        }

        /* SMALLER, CLEANER GALLERY */
        .gallery-grid{
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:42px 24px;
          align-items:start;
        }

        .gallery-item{
          margin:0;
          min-width:0;
        }

        .gallery-image-link{
          position:relative;
          display:block;
          overflow:hidden;
          background:#e9eee9;
          aspect-ratio:4/3;
          border-radius:5px;
          text-decoration:none;
        }

        .gallery-image-link img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
          transition:transform .45s cubic-bezier(.2,.7,.2,1);
        }

        .gallery-image-link:hover img{
          transform:scale(1.035);
        }

        .gallery-view{
          position:absolute;
          right:12px;
          bottom:12px;
          padding:8px 11px;
          border-radius:999px;
          background:rgba(255,255,255,.94);
          color:var(--ink);
          font-size:10px;
          font-weight:800;
          opacity:0;
          transform:translateY(5px);
          transition:.2s ease;
        }

        .gallery-image-link:hover .gallery-view{
          opacity:1;
          transform:translateY(0);
        }

        .gallery-no-image{
          aspect-ratio:4/3;
          display:grid;
          place-items:center;
          border-radius:5px;
          background:var(--soft);
          color:var(--muted);
          font-size:12px;
        }

        .gallery-item figcaption{
          padding:14px 2px 0;
        }

        .gallery-caption-top{
          display:flex;
          align-items:flex-start;
          gap:11px;
        }

        .gallery-index{
          flex:none;
          padding-top:3px;
          font-size:9px;
          font-weight:800;
          color:#89958e;
        }

        .gallery-item h2{
          margin:0;
          font-size:17px;
          line-height:1.18;
          letter-spacing:-.025em;
          font-weight:750;
        }

        .gallery-item figcaption p{
          margin:7px 0 0 20px;
          max-width:390px;
          color:var(--muted);
          font-size:11px;
          line-height:1.55;
        }

        .gallery-album-link{
          display:inline-block;
          margin:9px 0 0 20px;
          color:var(--green);
          font-size:10px;
          font-weight:800;
          text-decoration:none;
        }

        .gallery-album-link:hover{
          text-decoration:underline;
        }

        /* BOTTOM */
        .gallery-bottom{
          margin-bottom:58px;
          padding:48px 0;
          border-top:1px solid var(--line);
          border-bottom:1px solid var(--line);
          display:flex;
          justify-content:space-between;
          align-items:flex-end;
          gap:40px;
        }

        .gallery-bottom h2{
          max-width:680px;
          margin:11px 0 0;
          font-size:clamp(27px,3.7vw,47px);
          line-height:1;
          letter-spacing:-.05em;
        }

        .gallery-bottom-number{
          font-size:58px;
          line-height:.8;
          font-weight:800;
          letter-spacing:-.08em;
          color:#dce5de;
        }

        /* TABLET */
        @media(max-width:850px){
          .gallery-page .shell{
            width:min(100% - 32px,680px);
          }

          .gallery-intro{
            min-height:320px;
            padding-top:85px;
            padding-bottom:48px;
          }

          .gallery-intro-mark{
            display:none;
          }

          .gallery-content{
            padding-top:45px;
            padding-bottom:65px;
          }

          .gallery-grid{
            grid-template-columns:repeat(2,minmax(0,1fr));
            gap:32px 16px;
          }

          .gallery-view{
            opacity:1;
            transform:none;
          }
        }

        /* MOBILE */
        @media(max-width:560px){
          .gallery-page .shell{
            width:calc(100% - 28px);
          }

          .gallery-intro{
            min-height:290px;
            padding-top:70px;
            padding-bottom:38px;
          }

          .gallery-intro h1{
            font-size:62px;
            margin-top:12px;
          }

          .gallery-intro-copy p{
            font-size:14px;
            line-height:1.6;
          }

          .gallery-grid{
            grid-template-columns:1fr;
            gap:30px;
          }

          .gallery-image-link{
            aspect-ratio:16/10;
          }

          .gallery-item figcaption{
            padding-top:12px;
          }

          .gallery-item h2{
            font-size:16px;
          }

          .gallery-bottom{
            display:block;
            margin-bottom:38px;
            padding:40px 0;
          }

          .gallery-bottom h2{
            font-size:29px;
          }

          .gallery-bottom-number{
            margin-top:28px;
            font-size:48px;
          }
        }
      `}</style>
    </>
  );
}
