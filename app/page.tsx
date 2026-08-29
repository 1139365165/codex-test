import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import { faqItems, mapLinks, processSteps, services, storeDetails, type Service } from "@/data/site";

function ServiceIcon({ icon }: Pick<Service, "icon">) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7 };

  if (icon === "bath") {
    return <svg {...common} aria-hidden="true"><path d="M7 10.5V8a5 5 0 0 1 10 0v2.5"/><path d="M5.5 11.5h13v3a5.5 5.5 0 0 1-11 0v-3Z"/><path d="M9 18.5v2M15 18.5v2" strokeLinecap="round"/></svg>;
  }
  if (icon === "cat") {
    return <svg {...common} aria-hidden="true"><path d="M7.2 12.2 5 7.5 8.5 5 12 8.5 15.5 5 19 7.5l-2.2 4.7"/><path d="M6.5 12.5c0 4 2.3 6.5 5.5 6.5s5.5-2.5 5.5-6.5"/><path d="M9 14h.01M15 14h.01" strokeLinecap="round"/></svg>;
  }
  if (icon === "trim") {
    return <svg {...common} aria-hidden="true"><path d="M4 8h16M4 12h16M4 16h16" strokeLinecap="round"/><path d="M8 5v14M16 5v14" strokeLinecap="round"/></svg>;
  }
  return <svg {...common} aria-hidden="true"><path d="M12 3c2.5 3.5 5 5.4 5 9.2A5 5 0 0 1 7 12.2C7 8.4 9.5 6.5 12 3Z"/><path d="M9.5 13.5c0 1.5 1 2.7 2.5 3" strokeLinecap="round"/></svg>;
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="MOMO 毛球研究所首页">
      <span className="brand-mark">✦</span>
      <span className="brand-copy"><strong>MOMO 毛球研究所</strong><span>GROOMING STUDIO</span></span>
    </a>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <Header />

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">A softer kind of grooming</span>
              <h1>让每一次洗护，<em>都像被拥抱。</em></h1>
              <p className="hero-lede">在 MOMO，我们把洗澡、吹毛和修剪变成一段安静、舒服、值得期待的日常。</p>
              <div className="hero-actions">
                <a className="button-primary" href="#booking">为毛孩子预约 <span aria-hidden="true">↗</span></a>
                <a className="button-secondary" href="#services">看看服务与价格</a>
              </div>
              <div className="hero-notes" aria-label="服务承诺">
                <span><i>✓</i>全程可视护理</span>
                <span><i>✓</i>一宠一浴巾</span>
                <span><i>✓</i>温和无刺激</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrap">
                <div className="hero-image-crop">
                  <Image
                    className="hero-image"
                    src="/images/hero-pet-grooming.png"
                    alt="在明亮洗护空间里坐着的贵宾犬和银色虎斑猫"
                    width={2624}
                    height={1472}
                    sizes="(max-width: 720px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
              <div className="hero-sticker"><strong>4.9 / 5</strong>毛孩子家长<br/>真实好评</div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="门店数据">
          <div className="container trust-grid">
            <div className="trust-item"><span className="trust-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M12 21s7-4.8 7-11a7 7 0 0 0-14 0c0 6.2 7 11 7 11Z"/><circle cx="12" cy="10" r="2.4"/></svg></span><span><strong>静安店 · 近地铁</strong><span>步行 3 分钟即到</span></span></div>
            <div className="trust-item"><span className="trust-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M12 3 14.5 8l5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9L9.5 8 12 3Z"/></svg></span><span><strong>8 年专业护理</strong><span>猫狗美容师认证团队</span></span></div>
            <div className="trust-item"><span className="trust-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M4 12.5 9 17l11-11" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 12a8 8 0 1 1-4.9-7.4" strokeLinecap="round"/></svg></span><span><strong>100% 安心可视</strong><span>透明护理不留盲区</span></span></div>
            <div className="trust-item"><span className="trust-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M12 21c4.4-2 7-5.2 7-9.2V5.5L12 3 5 5.5v6.3C5 15.8 7.6 19 12 21Z"/><path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><strong>安心用品</strong><span>按毛发与肤质定制</span></span></div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-heading">
              <div><span className="eyebrow">Our services</span><h2>从基础清洁，到<br/>被认真对待。</h2></div>
              <p>每一项服务都从了解毛孩子开始，按体型、毛发和情绪状态给出刚刚好的护理方案。</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className={`service-card${service.featured ? " featured" : ""}`} key={service.title}>
                  <span className="service-icon"><ServiceIcon icon={service.icon} /></span>
                  <h3>{service.title}</h3>
                  <span className="service-meta">{service.meta}</span>
                  <p className="service-desc">{service.description}</p>
                  <a className="service-link" href="#booking">了解详情 <span>↗</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="why-us">
          <div className="container why-grid">
            <div className="photo-stack">
              <Image className="photo-main" src="/images/grooming-care.png" alt="美容师在洗护台为白色比熊犬擦干毛发" width={2304} height={1728} sizes="(max-width: 720px) 100vw, 50vw" />
              <div className="photo-float"><Image src="/images/salon-interior.png" alt="MOMO 毛球研究所明亮整洁的门店环境" fill sizes="(max-width: 720px) 42vw, 22vw" /></div>
            </div>
            <div className="why-copy">
              <span className="eyebrow">The MOMO way</span>
              <h2>我们知道，<br/>安心比漂亮更重要。</h2>
              <p>洗得干净只是开始。我们在乎毛孩子有没有紧张、皮肤是不是舒服，也在乎你接回家时的那句“它今天好乖”。</p>
              <ul className="benefit-list">
                <li><i>◌</i><span><strong>一宠一方案</strong><span>到店先做毛发与肤质观察，再决定洗护产品和流程。</span></span></li>
                <li><i>⌁</i><span><strong>慢一点，也没关系</strong><span>不催、不强求，给怕水或敏感的毛孩子足够适应时间。</span></span></li>
                <li><i>⊙</i><span><strong>过程透明可见</strong><span>透明玻璃护理区，家长可以安心看见每一个步骤。</span></span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section process">
          <div className="container">
            <div className="section-heading"><div><span className="eyebrow">A gentle routine</span><h2>每一步，都有回应。</h2></div><p>把复杂留给我们，把轻松还给你和毛孩子。</p></div>
            <div className="process-grid">
              {processSteps.map((step) => (
                <article className="process-card" key={step.number}>
                  <span className="process-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section quote-section">
          <div className="container quote-grid">
            <div className="quote-intro"><span className="eyebrow">Loved by pet parents</span><h2>“它回家后，居然还想再来。”</h2><p>我们收集了很多这样的时刻，也把每一条反馈都放进下一次护理里。</p></div>
            <div className="quote-card"><div className="quote-mark">“</div><blockquote>以前洗完澡回家要躲半天，现在在门口就知道要来找姐姐，真的放心很多。</blockquote><div className="quote-author"><span><strong>豆包妈妈 · 养宠 3 年</strong><span>比熊犬 / 规律洗护</span></span><span className="stars" aria-label="五星好评">★★★★★</span></div></div>
          </div>
        </section>

        <Faq items={faqItems} />

        <section className="section map-section" id="map">
          <div className="container map-grid">
            <div className="map-visual">
              <div className="map-embed">
                <Image
                  src="/images/anime-map.png"
                  alt="愚园路一带的二次元风格手绘地图，标注 MOMO 毛球研究所门店位置"
                  fill
                  sizes="(max-width: 980px) 100vw, 56vw"
                  className="map-image"
                />
              </div>
              <div className="map-actions">
                <a className="map-action primary" href={mapLinks.amap} target="_blank" rel="noopener noreferrer">高德地图导航 <span aria-hidden="true">↗</span></a>
                <a className="map-action" href={mapLinks.baidu} target="_blank" rel="noopener noreferrer">百度地图查看 <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="map-info">
              <span className="eyebrow">Find us</span>
              <h2>愚园路上，<br/>很好找。</h2>
              <p>门店临街而设，带毛孩子步行到店很方便。来之前也可以先预约，减少等待。</p>
              <div className="map-details">
                {storeDetails.map((detail) => (
                  <div className="map-detail" key={detail.label}><i>{detail.icon}</i><span><strong>{detail.label}</strong><span>{detail.value}</span></span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="container">
            <div className="booking-card">
              <div className="booking-copy">
                <span className="eyebrow">Make a little room for care</span>
                <h2>给它一段，<br/>只属于它的时间。</h2>
                <p>留下信息，我们会在营业时间内联系你，确认合适的护理方案和到店时间。</p>
                <div className="booking-detail"><span>◷ 周一至周日 10:00 – 20:00</span><span>⌂ 上海市静安区愚园路 88 号</span><span>☎ 021 – 6288 1314</span></div>
              </div>
              <BookingForm />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div className="footer-copy"><Brand /><p>让每一次洗护，都像被拥抱。</p></div>
          <div className="footer-links"><a href="#services">服务项目</a><a href="#why-us">关于 MOMO</a><a href="#faq">常见问题</a><a href="#map">门店位置</a><a href="#booking">预约到店</a><span>© 2026 MOMO</span></div>
        </div>
      </footer>
      <a className="floating-book" href="#booking">立即预约 <span aria-hidden="true">↗</span></a>
    </div>
  );
}
