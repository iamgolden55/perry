import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Large display brand */}
      <div className="footer__display">
        <span className="footer__display-text">
          PERRY <em className="font-curvy">Jiggy</em>
        </span>
      </div>

      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__columns">
            <div className="footer__col footer__col--pages">
              <h4 className="footer__heading">PAGES</h4>
              <ul className="footer__links">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/#works">Works</Link></li>
                <li><Link href="/#services">Services</Link></li>
                <li><Link href="/#journal">Journal</Link></li>
                <li><Link href="/showcase">Showcase</Link></li>
                <li><Link href="/#contact">Contact us</Link></li>
              </ul>
            </div>
            <div className="footer__col footer__col--other">
              <h4 className="footer__heading">OTHER PAGES</h4>
              <ul className="footer__links">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms &amp; Conditions</a></li>
                <li><a href="#404">404</a></li>
              </ul>
            </div>
            <div className="footer__col footer__col--social">
              <h4 className="footer__heading">SOCIAL</h4>
              <ul className="footer__links">
                <li><a href="#">X (Twitter)</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Tiktok</a></li>
              </ul>
            </div>
            <div className="footer__col footer__col--locations">
              <div className="footer__location">
                <h4 className="footer__heading">NEW YORK</h4>
                <p>110 Mercer St, 2nd Floor<br />New York, NY 10012</p>
              </div>
              <div className="footer__location">
                <h4 className="footer__heading">LONDON</h4>
                <p>58 Redchurch St<br />Shoreditch, London E2 7DP</p>
              </div>
              <div className="footer__location">
                <h4 className="footer__heading">TOKYO</h4>
                <p>3-15-5 Jingumae<br />Shibuya, Tokyo 150-0001</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__brand">
            <p className="brand-name">PERRY JIGGY</p>
            <p className="copyright">&copy; 2025 PERRY JIGGY.</p>
          </div>
          <div className="footer__contact">
            <a href="mailto:HELLO@PERRYJIGGY.COM" className="footer__email link">
              HELLO@PERRYJIGGY.COM
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
