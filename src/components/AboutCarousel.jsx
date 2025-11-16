import { useEffect, useMemo, useState } from "react";

// Reuses your existing slider CSS (ShowcaseSlider styles)
export default function AboutCarousel({ images = [] }) {
  const safe = Array.isArray(images) ? images.filter(Boolean) : [];
  const pages = useMemo(() => safe.length ? safe : [null], [safe]);
  const [idx, setIdx] = useState(0);
  const len = pages.length;

  const go = (d) => setIdx(i => (i + d + len) % len);

  // keyboard nav
  useEffect(()=>{
    const onKey = (e)=>{ if(e.key==="ArrowLeft") go(-1); if(e.key==="ArrowRight") go(+1); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [len]);

  return (
    <section className="slider about-carousel" aria-label="About images" aria-roledescription="carousel">
      <div className="slider__viewport" tabIndex={0}>
        <div className="slider__track" style={{ transform:`translateX(${-idx*100}%)` }}>
          {pages.map((src, i)=>(
            <article className="slide" key={i} aria-roledescription="slide" aria-label={`${i+1} of ${len}`}>
              <div className="slide__media">
                {src ? (
                  <img src={src} alt={`About image ${i+1}`} loading="lazy" />
                ) : (
                  <div style={{ height: 260, display: "grid", placeItems: "center", opacity: .6 }}>No images</div>
                )}
              </div>
            </article>
          ))}
        </div>
        {len > 1 && (
          <>
            <button className="slider__btn prev" onClick={()=>go(-1)} aria-label="Previous">‹</button>
            <button className="slider__btn next" onClick={()=>go(+1)} aria-label="Next">›</button>
          </>
        )}
      </div>
      {len > 1 && (
        <div className="slider__dots" role="tablist" aria-label="Select image">
          {pages.map((_, i)=>(
            <button key={i} role="tab" aria-selected={i===idx}
              className={`dot ${i===idx ? "is-active":""}`} onClick={()=>setIdx(i)} />
          ))}
        </div>
      )}
    </section>
  );
}