// IMPORT NEXTJS
import Link from 'next/link';

export default function Header() {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-branding">
          <h1 className="header-title">Paléo-H2O</h1>
        </div>
        <div className="header-links">
          <nav className="header-nav">
            <ul className="header-nav-ul">
              <Link href="/about">
                <a>
                  <li className="header-nav-li">À propos</li>
                </a>
              </Link>
              <Link href="/team">
                <a>
                  <li className="header-nav-li">Équipe</li>
                </a>
              </Link>
              <Link href="/news">
                <a>
                  <li className="header-nav-li">News/Expo</li>
                </a>
              </Link>
              <Link href="/lab">
                <a>
                  <li className="header-nav-li">Lab</li>
                </a>
              </Link>
              <Link href="/proposer">
                <a>
                  <li className="header-nav-li">Proposer</li>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <li className="header-nav-li">Contact</li>
                </a>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}