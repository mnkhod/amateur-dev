import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        {/* Basic Page Needs
      ================================================== */}
        <title>MNKHOD - Amateur Developer</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="eSports Team & Gaming HTML Template" />
        <meta name="author" content="Dan Fisher" />
        <meta name="keywords" content="esports team news HTML template" />
        {/* Favicons
      ================================================== */}
        <link rel="shortcut icon" href="assets/img/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="120x120" href="assets/img/favicons/favicon-120.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="assets/img/favicons/favicon-152.png" />
        {/* Mobile Specific Metas
      ================================================== */}
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        {/* Google Web Fonts
      ================================================== */}
        <link href="https://fonts.googleapis.com/css?family=Rajdhani:300,400,500,600,700" rel="stylesheet" />
        {/* CSS
      ================================================== */}
        {/* Vendor CSS */}
        <link href="assets/vendor/magnific-popup/css/magnific-popup.css" rel="stylesheet" />
        <link href="assets/vendor/slick/css/slick.css" rel="stylesheet" />
        <link href="assets/vendor/nanoscroller/css/nanoscroller.css" rel="stylesheet" />
        <link href="assets/vendor/fontawesome/css/brands.css" rel="stylesheet" />
        {/* Template CSS*/}
        <link href="assets/css/style.css" rel="stylesheet" />
        {/* Custom CSS*/}
        <link href="assets/css/custom.css" rel="stylesheet" />
        <link href="assets/custom_css/index2.css" rel="stylesheet" />

      </Head>

      <div>
        <div className="site-wrapper">
          {/* Header ================================================== */}
          <header id="header" className="site-header site-header--landing">
            {/* Main Navigation Left */}
            <nav className="main-nav">
              <ul className="main-nav__list">
                <li className><a href="home.html">Home</a></li>
                <li className>
                  <a href="#">Teams</a>
                  <ul className="main-nav__sub">
                    <li className>
                      <a href="#">Team Selections</a>
                      <ul className="main-nav__sub">
                        <li className><a href="team-selection-1.html">Team Selection v1</a></li>
                        <li className><a href="team-selection-2.html">Team Selection v2</a></li>
                        <li className><a href="team-selection-3.html">Team Selection v3</a></li>
                        <li className><a href="team-selection-4.html">Team Selection v4</a></li>
                      </ul>
                    </li>
                    <li className>
                      <a href="team-overview.html">Team Overview</a>
                      <ul className="main-nav__sub">
                        <li className><a href="team-overview.html">Team Overview v1</a></li>
                        <li className><a href="team-overview-2.html">Team Overview v2</a></li>
                      </ul>
                    </li>
                    <li className><a href="team-player-1.html">Player Page</a></li>
                  </ul>
                </li>
                <li className><a href="#">Matches</a>
                  <ul className="main-nav__sub">
                    <li className><a href="matches-scores.html">Match Scores</a></li>
                    <li className><a href="matches-upcoming.html">Upcoming Matches</a></li>
                    <li className><a href="matches-standings.html">Standings</a></li>
                    <li className><a href="#">Match Stats</a>
                      <ul className="main-nav__sub">
                        <li className><a href="matches-stats-1.html">Match Stats v1</a></li>
                        <li className><a href="matches-stats-2.html">Match Stats v2</a></li>
                        <li className><a href="matches-stats-3.html">Match Stats v3</a></li>
                      </ul>
                    </li>
                    <li className>
                      <a href="#">Match Lineups</a>
                      <ul className="main-nav__sub">
                        <li className><a href="matches-lineups-1.html">Match Lineups v1</a></li>
                        <li className><a href="matches-lineups-2.html">Match Lineups v2</a></li>
                        <li className><a href="matches-lineups-3.html">Match Lineups v3</a></li>
                      </ul>
                    </li>
                    <li className><a href="#">Match Overviews</a>
                      <ul className="main-nav__sub">
                        <li className><a href="matches-overview-1.html">Match Overview v1</a></li>
                        <li className><a href="matches-overview-2.html">Match Overview v2</a></li>
                      </ul>
                    </li>
                    <li className><a href="matches-replay.html">Match Replay</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
            {/* Main Navigation Left / End */}
            {/* Logo - Image Based */}
            <div className="header-logo header-logo--img">
              <a href="index.html"><img src="mnk_logo.png" alt="Necromancers" /></a>
            </div>
            {/* Logo - Image Based / End */}
            {/* Main Navigation Right */}
            <nav className="main-nav">
              <ul className="main-nav__list">
                <li className><a href="#">News</a>
                  {/*
                    <ul className="main-nav__sub">
                      <li className><a href="blog-1.html">News v1</a></li>
                      <li className><a href="blog-2.html">News v2</a></li>
                      <li className><a href="blog-3.html">News v3</a></li>
                      <li className><a href="blog-4.html">News v4</a></li>
                      <li className><a href="blog-classic.html">News Classic <span className="badge badge-danger">New</span></a></li>
                      <li className><a href="blog-post.html">Post Page</a></li>
                    </ul> 
                  */}
                </li>
                <li className=" has-child"><a href="#">Features</a>
              {/*
                  <div className="main-nav__megamenu">
                    <div className="row">
                      <div className="col-md-4">
                        <h6 className="main-nav__title">Main Pages</h6>
                        <div className="row">
                          
                          <ul className="col-md-4">
                            <li className><a href="index.html">Landing Image</a></li>
                            <li className="active"><a href="index-2.html">Landing Video</a></li>
                            <li className><a href="blog-post.html">Post Page</a></li>
                            <li className><a href="blog-1.html">News v1</a></li>
                            <li className><a href="blog-2.html">News v2</a></li>
                            <li className><a href="blog-3.html">News v3</a></li>
                            <li className><a href="blog-4.html">News v4</a></li>
                            <li className><a href="blog-classic.html">News Classic <span className="badge badge-danger">New</span></a></li>
                          </ul>
                          <ul className="col-md-4">
                            <li className><a href="shop-account-settings.html">Account Settings</a></li>
                            <li className><a href="shop-account-orders.html">Account Orders</a></li>
                            <li className><a href="login-register.html">Login &amp; Register</a></li>
                            <li className><a href="features-about-us.html">About Us</a></li>
                            <li className><a href="features-contact-us.html">Contact Us</a></li>
                            <li className><a href="features-faqs.html">FAQs</a></li>
                          </ul>
                          <ul className="col-md-4">
                            <li className><a href="management-and-staff.html">MGMT &amp; Staff</a></li>
                            <li className><a href="streams-archive.html">Streams Page</a></li>
                            <li className><a href="partners.html">Our Partners</a></li>
                            <li className><a href="features-shortcodes.html">Shortcodes</a></li>
                            <li className><a href="features-typography.html">Typography</a></li>
                            <li className><a href="features-icons.html">Icons <span className="badge badge-danger">New</span></a></li>
                            <li className><a href="features-bg-1.html">Backgrounds</a></li>
                          </ul>
                          
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <h6 className="col-md-8 main-nav__title">Team Pages</h6>
                          <h6 className="col-md-4 main-nav__title">Player Pages</h6>
                        </div>
                        <div className="row">
                          <ul className="col-md-4">
                            <li className><a href="team-selection-1.html">Team Selection v1</a></li>
                            <li className><a href="team-selection-2.html">Team Selection v2</a></li>
                            <li className><a href="team-selection-3.html">Team Selection v3</a></li>
                            <li className><a href="team-selection-4.html">Team Selection v4</a></li>
                            <li><a href="team-overview.html">Team Overview v1</a></li>
                            <li><a href="team-overview-2.html">Team Overview v2</a></li>
                          </ul>
                          <ul className="col-md-4">
                            <li><a href="team-overview.html?slide=1">Team Statistics</a></li>
                            <li><a href="team-overview.html?slide=2">Team Achv</a></li>
                            <li><a href="team-overview.html?slide=3">Team Matches</a></li>
                          </ul>
                          <ul className="col-md-4">
                            <li><a href="team-player-1.html">Player Overview</a></li>
                            <li><a href="team-player-1.html?slide=1">Player Statistics</a></li>
                            <li><a href="team-player-1.html?slide=2">Player Achv</a></li>
                            <li><a href="team-player-1.html?slide=3">Player Hardware</a></li>
                            <li><a href="team-player-1.html?slide=4">Player Stream</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <h6 className="col-md-8 main-nav__title">Match Pages</h6>
                          <h6 className="col-md-4 main-nav__title">Shop Pages</h6>
                        </div>
                        <div className="row">
                          <ul className="col-md-4">
                            <li className><a href="matches-scores.html">Match Scores</a></li>
                            <li className><a href="matches-upcoming.html">Upcoming Matches</a></li>
                            <li className><a href="matches-standings.html">Standings</a></li>
                            <li className><a href="matches-overview-1.html">Overview v1</a></li>
                            <li className><a href="matches-overview-2.html">Overview v2</a></li>
                            <li className><a href="matches-stats-1.html">Match Stats v1</a></li>
                          </ul>
                          <ul className="col-md-4">
                            <li className><a href="matches-stats-2.html">Match Stats v2</a></li>
                            <li className><a href="matches-stats-3.html">Match Stats v3</a></li>
                            <li className><a href="matches-lineups-1.html">Match Lineups v1</a></li>
                            <li className><a href="matches-lineups-2.html">Match Lineups v2</a></li>
                            <li className><a href="matches-lineups-3.html">Match Lineups v3</a></li>
                            <li className><a href="matches-replay.html">Match Replay</a></li>
                          </ul>
                          <ul className="col-md-4">
                            <li className><a href="shop.html">Shop Page v1</a></li>
                            <li className><a href="shop-2.html">Shop Page v2</a></li>
                            <li className><a href="shop-product.html">Product Page</a></li>
                            <li className><a href="shop-checkout.html">Checkout Page</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  */}
                </li>
                <li className>
                  <a href="#">Shop</a>
                  <ul className="main-nav__sub">
                    <li className><a href="shop.html">Shop Page v1</a></li>
                    <li className><a href="shop-2.html">Shop Page v2</a></li>
                    <li className><a href="shop-product.html">Product Page</a></li>
                    <li className><a href="shop-checkout.html">Checkout Page</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
            {/* Main Navigation Right / End */}
          </header>
          {/* Header / End */}
          {/* Content ================================================== */}
          <main className="site-content text-center" id="wrapper">
            <div className="site-content__center">
              <h1 className="text-white landing-title"><span className="subtitle landing-subtitle"></span>Сонирхогч Хөгжүүлэгчдийн Вэбсайт</h1>
              <a href="home.html" className="btn btn-primary btn-lg btn--landing"><span>Тун Удахгүй!</span></a>
            </div>
            <div className="video-full-bg">
              {/* Video Highlight */}
              <div className="video-full-bg__highlight" />
              {/* Video Highlight / End */}
              {/* Video Clip */}
              <video poster="assets/img/bg-texture-05.jpg" className="video-full-bg__clip video-full-bg__clip--black-white" playsInline autoPlay muted loop>
                <source src="assets/video/video-clip.mp4" type="video/mp4" />
                Таны Browser Энэхүү Бичлэгийг Дэмждэггүй юм байна.
              </video>
              {/* Video Clip / End */}
              {/* Video Decoration */}
              <div className="video-full-bg__pattern" />
              {/* Video Decoration / End */}
            </div>
          </main>
          {/* Footer ================================================== */}
          <footer id="footer" className="footer text-center">
            <ul className="social-menu social-menu--landing social-menu--landing-glitch">
              <li>
                <a href="https://www.facebook.com/danfisher.dev/" target="_blank">
                  <i className="fab fa-facebook-square" />
                  <span className="link-subtitle">Facebook</span>Necrogame
                </a>
              </li>
              <li>
                <a href="https://twitter.com/danfisher_dev" target="_blank">
                  <i className="fab fa-twitter" />
                  <span className="link-subtitle">Twitter</span>Necrotwt
                </a>
              </li>
              <li>
                <a href="https://twitch.com" target="_blank">
                  <i className="fab fa-twitch" />
                  <span className="link-subtitle">Twitch</span>Necroplays
                </a>
              </li>
              <li>
                <a href="https://discordapp.com/" target="_blank">
                  <i className="fab fa-discord" />
                  <span className="link-subtitle">Discord</span>Necrochat
                </a>
              </li>
            </ul>
          </footer>
          {/* Footer / End */}
          <div className="landing-detail landing-detail--left">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
          <div className="landing-detail-cover landing-detail-cover--left">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
          <div className="landing-detail landing-detail--right">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
          <div className="landing-detail-cover landing-detail-cover--right">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
          {/* Overlay */}
          <div className="site-overlay" />
          {/* Overlay / End */}
          {/* Cart Panel */}
          <div className="cart-panel">
            <h4 className="cart-panel__title text-white">Shopping Cart (<span className="cart-panel__items-count">4</span>)</h4>
            <div className="cart-panel__content">
              <div className="table-responsive">
                <table className="table shop-table">
                  <thead>
                    <tr>
                      <th className="product__info">Product</th>
                      <th className="product__quantity">Quantity</th>
                      <th className="product__total">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product__info">
                        <figure className="product__thumb">
                          <a href="#"><img src="assets/img/cart-panel-img-01.jpg" alt /></a>
                        </figure>
                        <div className="product__info-content">
                          <h5 className="product__name"><a href="#">Magimons Black Frame Print</a></h5>
                          <span className="product__cat">Framed Prints</span>
                          <span className="product__info-details">24"x12" | Glossy</span>
                        </div>
                      </td>
                      <td className="product__quantity">
                        <div className="quantity-control">
                          <button className="quantity-control__minus">&nbsp;</button>
                          <input type="number" step={1} defaultValue={1} size={4} />
                          <button className="quantity-control__plus">&nbsp;</button>
                        </div>
                      </td>
                      <td className="product__total"><span className="product__total-currency">$</span>38.00</td>
                      <td className="product__remove"><a href="#" className="product__remove-icon" /></td>
                    </tr>
                    <tr>
                      <td className="product__info">
                        <figure className="product__thumb">
                          <a href="#"><img src="assets/img/cart-panel-img-02.jpg" alt /></a>
                        </figure>
                        <div className="product__info-content">
                          <h5 className="product__name"><a href="#">Necromancers Men's T-Shirt</a></h5>
                          <span className="product__cat">Clothing</span>
                          <span className="product__info-details">Black | Medium</span>
                        </div>
                      </td>
                      <td className="product__quantity">
                        <div className="quantity-control">
                          <button className="quantity-control__minus">&nbsp;</button>
                          <input type="number" step={1} defaultValue={2} size={4} />
                          <button className="quantity-control__plus">&nbsp;</button>
                        </div>
                      </td>
                      <td className="product__total"><span className="product__total-currency">$</span>49.98</td>
                      <td className="product__remove"><a href="#" className="product__remove-icon" /></td>
                    </tr>
                    <tr>
                      <td className="product__info">
                        <figure className="product__thumb">
                          <a href="#"><img src="assets/img/cart-panel-img-03.jpg" alt /></a>
                        </figure>
                        <div className="product__info-content">
                          <h5 className="product__name"><a href="#">Necromancers Ennamel Mug</a></h5>
                          <span className="product__cat">Coffee Mugs</span>
                          <span className="product__info-details">White</span>
                        </div>
                      </td>
                      <td className="product__quantity">
                        <div className="quantity-control">
                          <button className="quantity-control__minus">&nbsp;</button>
                          <input type="number" step={1} defaultValue={1} size={4} />
                          <button className="quantity-control__plus">&nbsp;</button>
                        </div>
                      </td>
                      <td className="product__total"><span className="product__total-currency">$</span>16.00</td>
                      <td className="product__remove"><a href="#" className="product__remove-icon" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="cart-panel__totals">
                <div className="table-responsive">
                  <table className="table">
                    <tfoot>
                      <tr className="cart-panel__subtotal">
                        <th>Cart Subtotal</th>
                        <td>
                          <span className="amount"><span className="amount-currency">$</span>103.98</span>
                        </td>
                      </tr>
                      <tr className="cart-panel__shipping">
                        <th>Estimated Shipping</th>
                        <td><span className="amount"><span className="amount-currency">$</span>14.00</span></td>
                      </tr>
                      <tr className="cart-panel__order-total">
                        <th>Cart Total</th>
                        <td><span className="amount"><span className="amount-currency">$</span>117.98</span></td>
                      </tr>
                    </tfoot>
                  </table>
                  <a href="shop-checkout.html" className="btn btn-primary">Go to checkout</a>
                </div>
              </div>
            </div>
          </div>
          {/* Cart Panel / End */}
          {/* Search Panel */}
          <div className="search-panel">
            <div className="search-panel__content">
              <form action="#" id="header-search-form" className="search-form search-form--header">
                <input type="text" className="form-control" defaultValue placeholder="What are you looking for...?" />
              </form>
              <span>Write what you are looking for, choose the filters and press enter to begin your search!</span>
            </div>
          </div>
          {/* Search Panel / End */}
          {/* Menu Panel */}
          <div className="menu-panel">
            <ul className="menu-panel__mobile-bar list-unstyled d-md-none">
              <li className="mobile-bar-item">
                <a className="mobile-bar-item__header collapsed" data-toggle="collapse" href="#mobile_collapse_1" role="button" aria-expanded="false" aria-controls="mobile_collapse_1">
                  Main Links
                  <span className="main-nav__toggle">&nbsp;</span>
                </a>
                <div id="mobile_collapse_1" className="collapse mobile-bar-item__body">
                  {/* Mobile Navigation */}
                  <nav className="mobile-nav">
                    <ul className="mobile-nav__list">
                      <li className>
                        <a href="#">Main Pages</a>
                        <ul className="mobile-nav__sub">
                          <li className><a href="index.html">Landing Image</a></li>
                          <li className="active"><a href="index-2.html">Landing Video</a></li>
                          <li className><a href="home.html">Home page</a></li>
                          <li className><a href="blog-post.html">Post Page</a></li>
                          <li className><a href="blog-1.html">News v1</a></li>
                          <li className><a href="blog-2.html">News v2</a></li>
                          <li className><a href="blog-3.html">News v3</a></li>
                          <li className><a href="blog-4.html">News v4</a></li>
                          <li className><a href="blog-classic.html">News Classic <span className="badge badge-danger">New</span></a></li>
                          <li className><a href="shop-account-settings.html">Account Settings</a></li>
                          <li className><a href="shop-account-orders.html">Account Orders</a></li>
                          <li className><a href="login-register.html">Login &amp; Register</a></li>
                          <li className><a href="features-about-us.html">About Us</a></li>
                          <li className><a href="features-contact-us.html">Contact Us</a></li>
                          <li className><a href="features-faqs.html">FAQs</a></li>
                          <li className><a href="management-and-staff.html">Management &amp; Staff</a></li>
                          <li className><a href="streams-archive.html">Streams Page</a></li>
                          <li className><a href="partners.html">Our Partners</a></li>
                          <li className><a href="features-shortcodes.html">Shortcodes</a></li>
                          <li className><a href="features-typography.html">Typography</a></li>
                          <li className><a href="features-icons.html">Icons <span className="badge badge-danger">New</span></a></li>
                          <li className><a href="features-bg-1.html">Backgrounds</a></li>
                        </ul>
                      </li>
                      <li className>
                        <a href="#">Team Pages</a>
                        <ul className="mobile-nav__sub">
                          <li className><a href="team-selection-1.html">Team Selection v1</a></li>
                          <li className><a href="team-selection-2.html">Team Selection v2</a></li>
                          <li className><a href="team-selection-3.html">Team Selection v3</a></li>
                          <li className><a href="team-selection-4.html">Team Selection v4</a></li>
                          <li className><a href="team-overview.html">Team Overview v1</a></li>
                          <li className><a href="team-overview-2.html">Team Overview v2</a></li>
                          <li><a href="team-overview.html?slide=1">Team Statistics</a></li>
                          <li><a href="team-overview.html?slide=2">Team Achievements</a></li>
                          <li><a href="team-overview.html?slide=3">Team Matches</a></li>
                        </ul>
                      </li>
                      <li className>
                        <a href="#">Player Pages</a>
                        <ul className="mobile-nav__sub">
                          <li><a href="team-player-1.html">Player Overview</a></li>
                          <li><a href="team-player-1.html?slide=1">Player Statistics</a></li>
                          <li><a href="team-player-1.html?slide=2">Player Achievements</a></li>
                          <li><a href="team-player-1.html?slide=3">Player Hardware</a></li>
                          <li><a href="team-player-1.html?slide=4">Player Stream</a></li>
                        </ul>
                      </li>
                      <li className>
                        <a href="#">Match Pages</a>
                        <ul className="mobile-nav__sub">
                          <li className><a href="matches-scores.html">Match Scores</a></li>
                          <li className><a href="matches-upcoming.html">Upcoming Matches</a></li>
                          <li className><a href="matches-standings.html">Standings</a></li>
                          <li className><a href="matches-overview-1.html">Match Overview v1</a></li>
                          <li className><a href="matches-overview-2.html">Match Overview v2</a></li>
                          <li className><a href="matches-stats-1.html">Match Stats v1</a></li>
                          <li className><a href="matches-stats-2.html">Match Stats v2</a></li>
                          <li className><a href="matches-stats-3.html">Match Stats v3</a></li>
                          <li className><a href="matches-lineups-1.html">Match Lineups v1</a></li>
                          <li className><a href="matches-lineups-2.html">Match Lineups v2</a></li>
                          <li className><a href="matches-lineups-3.html">Match Lineups v3</a></li>
                          <li className><a href="matches-replay.html">Match Replay</a></li>
                        </ul>
                      </li>
                      <li className>
                        <a href="#">Shop Pages</a>
                        <ul className="mobile-nav__sub">
                          <li className><a href="shop.html">Shop Page v1</a></li>
                          <li className><a href="shop-2.html">Shop Page v2</a></li>
                          <li className><a href="shop-product.html">Product Page</a></li>
                          <li className><a href="shop-checkout.html">Checkout Page</a></li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  {/* Mobile Navigation / End */}
                </div>
              </li>
              <li className="mobile-bar-item">
                <a className="mobile-bar-item__header collapsed" data-toggle="collapse" href="#mobile_collapse_2" role="button" aria-expanded="false" aria-controls="mobile_collapse_2">
                  Social Links
                  <span className="main-nav__toggle">&nbsp;</span>
                </a>
                <div id="mobile_collapse_2" className="collapse mobile-bar-item__body">
                  <ul className="social-menu social-menu--mobile-bar">
                    <li><a href="https://www.facebook.com/danfisher.dev/"><span>Facebook</span></a></li>
                    <li><a href="https://twitter.com/danfisher_dev"><span>Twitter</span></a></li>
                    <li><a href="twitch.com"><span>Twitch</span></a></li>
                    <li><a href="discordapp.com"><span>Discord</span></a></li>
                  </ul>
                </div>
              </li>
              <li className="mobile-bar-item mobile-bar-item--info">
                <a className="mobile-bar-item__header collapsed" data-toggle="collapse" href="#mobile_collapse_3" role="button" aria-expanded="false" aria-controls="mobile_collapse_3">
                  Get in Touch!
                  <span className="main-nav__toggle">&nbsp;</span>
                </a>
                <div id="mobile_collapse_3" className="collapse mobile-bar-item__body">
                  <div className="mobile-bar-item__inner">
                    <ul className="list-unstyled">
                      <li className="info-box">
                        <div className="info-box__label">Max Parker - Recruiter</div>
                        <div className="info-box__content"><a href="mailto:#">mp-recruit<span className="color-primary">@</span>necromancers.com</a></div>
                      </li>
                      <li className="info-box">
                        <div className="info-box__label">Be our partner!</div>
                        <div className="info-box__content"><a href="mailto:#">partners<span className="color-primary">@</span>necromancers.com</a></div>
                      </li>
                      <li className="info-box">
                        <div className="info-box__label">General inquiries</div>
                        <div className="info-box__content"><a href="mailto:#">inquiries<span className="color-primary">@</span>necromancers.com</a></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mobile-bar-item mobile-bar-item--partners">
                <a id="mobile_collapse_4h" className="mobile-bar-item__header collapsed" data-toggle="collapse" href="#mobile_collapse_4" role="button" aria-expanded="false" aria-controls="mobile_collapse_4">
                  Our Partners
                  <span className="main-nav__toggle">&nbsp;</span>
                </a>
                <div id="mobile_collapse_4" className="collapse mobile-bar-item__body">
                  <div className="mobile-bar-item__inner">
                    <ul className="widget-partners-mobile-carousel">
                      <li>
                        <img src="assets/img/samples/partner-carousel-img-01.png" alt />
                      </li>
                      <li>
                        <img src="assets/img/samples/partner-carousel-img-02.png" alt />
                      </li>
                      <li>
                        <img src="assets/img/samples/partner-carousel-img-03.png" alt />
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mobile-bar-item">
                <a className="mobile-bar-item__header" href="shop-account-settings.html">
                  Account Settings
                </a>
              </li>
              <li className="mobile-bar-item">
                <a className="mobile-bar-item__header" href="login-register.html">
                  Logout
                </a>
              </li>
            </ul>
            <div className="menu-panel__top-bar">
              <div className="top-bar-filter">
                <label className="top-bar-filter__label">Competitions</label>
                <select className="cs-select">
                  <option value="all" selected>All Competitions</option>
                  <option value="x2018">Xenowatch 2018 Tournament</option>
                  <option value="xwleague">Xenowatch West League</option>
                  <option value="xeleague">Xenowatch East League</option>
                  <option value="xusacup">Xenowatch USA Cup</option>
                </select>
              </div>
              <ul className="top-bar-carousel">
                <li className="top-bar-carousel__headline x2018">
                  <span>Xenowatch 2018 Tournament</span>
                </li>
                <li className="top-bar-carousel__item x2018">
                  <div className="match-score-inline">
                    <div className="match-score-inline__body">
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-1" role="group">
                            <img src="assets/img/samples/logo-necromancers-30.png" srcSet="assets/img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">NCR</div>
                            <div className="match-team__country ">USA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result match-result--winner-right">
                          <span className="match-result__score">2</span>
                        </div>
                        <div className="match-result match-result--live">
                          <span className="match-result__label">25:42</span>
                        </div>
                      </div>
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-2" role="group">
                            <img src="assets/img/samples/logo-rhinos-30.png" srcSet="assets/img/samples/logo-rhinos-30@2x.png 2x" alt="RRH Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">RRH</div>
                            <div className="match-team__country ">JPN</div>
                          </figcaption>
                        </figure>
                        <div className="match-result">
                          <span className="match-result__score">1</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">01/12</span>
                        </div>
                      </div>
                    </div>
                    <div className="match-score-inline__footer">
                      <ul className="match-stats-links">
                        <li>
                          <a href="matches-overview-1.html">
                            <svg role="img" className="df-icon df-icon--match-overview">
                              <use xlinkHref="assets/img/necromancers.svg#match-overview" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-stats-1.html">
                            <svg role="img" className="df-icon df-icon--match-stats">
                              <use xlinkHref="assets/img/necromancers.svg#match-stats" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-lineups-1.html">
                            <svg role="img" className="df-icon df-icon--match-lineups">
                              <use xlinkHref="assets/img/necromancers.svg#match-lineups" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-replay.html">
                            <svg role="img" className="df-icon df-icon--match-replay">
                              <use xlinkHref="assets/img/necromancers.svg#match-replay" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="top-bar-carousel__item x2018">
                  <div className="match-score-inline">
                    <div className="match-score-inline__body">
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-5" role="group">
                            <img src="assets/img/samples/logo-eagles-30.png" srcSet="assets/img/samples/logo-eagles-30@2x.png 2x" alt="FEG Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">FEG</div>
                            <div className="match-team__country ">FRA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result match-result--winner-right">
                          <span className="match-result__score">4</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">Final</span>
                        </div>
                      </div>
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-1" role="group">
                            <img src="assets/img/samples/logo-necromancers-30.png" srcSet="assets/img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">NCR</div>
                            <div className="match-team__country ">USA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result">
                          <span className="match-result__score">3</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">01/09</span>
                        </div>
                      </div>
                    </div>
                    <div className="match-score-inline__footer">
                      <ul className="match-stats-links">
                        <li>
                          <a href="matches-overview-1.html">
                            <svg role="img" className="df-icon df-icon--match-overview">
                              <use xlinkHref="assets/img/necromancers.svg#match-overview" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-stats-1.html">
                            <svg role="img" className="df-icon df-icon--match-stats">
                              <use xlinkHref="assets/img/necromancers.svg#match-stats" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-lineups-1.html">
                            <svg role="img" className="df-icon df-icon--match-lineups">
                              <use xlinkHref="assets/img/necromancers.svg#match-lineups" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-replay.html">
                            <svg role="img" className="df-icon df-icon--match-replay">
                              <use xlinkHref="assets/img/necromancers.svg#match-replay" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="top-bar-carousel__item x2018">
                  <div className="match-score-inline">
                    <div className="match-score-inline__body">
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-1" role="group">
                            <img src="assets/img/samples/logo-necromancers-30.png" srcSet="assets/img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">NCR</div>
                            <div className="match-team__country ">USA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result">
                          <span className="match-result__score">1</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">Final</span>
                        </div>
                      </div>
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-3" role="group">
                            <img src="assets/img/samples/logo-bulls-30.png" srcSet="assets/img/samples/logo-bulls-30@2x.png 2x" alt="AGB Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">AGB</div>
                            <div className="match-team__country ">SPA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result match-result--winner-right">
                          <span className="match-result__score">3</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">01/05</span>
                        </div>
                      </div>
                    </div>
                    <div className="match-score-inline__footer">
                      <ul className="match-stats-links">
                        <li>
                          <a href="matches-overview-1.html">
                            <svg role="img" className="df-icon df-icon--match-overview">
                              <use xlinkHref="assets/img/necromancers.svg#match-overview" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-stats-1.html">
                            <svg role="img" className="df-icon df-icon--match-stats">
                              <use xlinkHref="assets/img/necromancers.svg#match-stats" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-lineups-1.html">
                            <svg role="img" className="df-icon df-icon--match-lineups">
                              <use xlinkHref="assets/img/necromancers.svg#match-lineups" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-replay.html">
                            <svg role="img" className="df-icon df-icon--match-replay">
                              <use xlinkHref="assets/img/necromancers.svg#match-replay" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="top-bar-carousel__item x2018">
                  <div className="match-score-inline">
                    <div className="match-score-inline__body">
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-4" role="group">
                            <img src="assets/img/samples/logo-panthers-30.png" srcSet="assets/img/samples/logo-panthers-30@2x.png 2x" alt="ICP Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">ICP</div>
                            <div className="match-team__country ">POR</div>
                          </figcaption>
                        </figure>
                        <div className="match-result">
                          <span className="match-result__score">0</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">Final</span>
                        </div>
                      </div>
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-1" role="group">
                            <img src="assets/img/samples/logo-necromancers-30.png" srcSet="assets/img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">NCR</div>
                            <div className="match-team__country ">USA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result match-result--winner-right">
                          <span className="match-result__score">5</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">01/02</span>
                        </div>
                      </div>
                    </div>
                    <div className="match-score-inline__footer">
                      <ul className="match-stats-links">
                        <li>
                          <a href="matches-overview-1.html">
                            <svg role="img" className="df-icon df-icon--match-overview">
                              <use xlinkHref="assets/img/necromancers.svg#match-overview" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-stats-1.html">
                            <svg role="img" className="df-icon df-icon--match-stats">
                              <use xlinkHref="assets/img/necromancers.svg#match-stats" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-lineups-1.html">
                            <svg role="img" className="df-icon df-icon--match-lineups">
                              <use xlinkHref="assets/img/necromancers.svg#match-lineups" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-replay.html">
                            <svg role="img" className="df-icon df-icon--match-replay">
                              <use xlinkHref="assets/img/necromancers.svg#match-replay" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="top-bar-carousel__headline xwleague">
                  <span>Xenowatch West League</span>
                </li>
                <li className="top-bar-carousel__item xwleague">
                  <div className="match-score-inline">
                    <div className="match-score-inline__body">
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-1" role="group">
                            <img src="assets/img/samples/logo-necromancers-30.png" srcSet="assets/img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">NCR</div>
                            <div className="match-team__country ">USA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result match-result--winner-right">
                          <span className="match-result__score">1</span>
                        </div>
                        <div className="match-result match-result--live">
                          <span className="match-result__label">12:33</span>
                        </div>
                      </div>
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-2" role="group">
                            <img src="assets/img/samples/logo-rhinos-30.png" srcSet="assets/img/samples/logo-rhinos-30@2x.png 2x" alt="RRH Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">RRH</div>
                            <div className="match-team__country ">JPN</div>
                          </figcaption>
                        </figure>
                        <div className="match-result">
                          <span className="match-result__score">0</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">01/12</span>
                        </div>
                      </div>
                    </div>
                    <div className="match-score-inline__footer">
                      <ul className="match-stats-links">
                        <li>
                          <a href="matches-overview-1.html">
                            <svg role="img" className="df-icon df-icon--match-overview">
                              <use xlinkHref="assets/img/necromancers.svg#match-overview" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-stats-1.html">
                            <svg role="img" className="df-icon df-icon--match-stats">
                              <use xlinkHref="assets/img/necromancers.svg#match-stats" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-lineups-1.html">
                            <svg role="img" className="df-icon df-icon--match-lineups">
                              <use xlinkHref="assets/img/necromancers.svg#match-lineups" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-replay.html">
                            <svg role="img" className="df-icon df-icon--match-replay">
                              <use xlinkHref="assets/img/necromancers.svg#match-replay" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="top-bar-carousel__item xwleague">
                  <div className="match-score-inline">
                    <div className="match-score-inline__body">
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-4" role="group">
                            <img src="assets/img/samples/logo-panthers-30.png" srcSet="assets/img/samples/logo-panthers-30@2x.png 2x" alt="ICP Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">ICP</div>
                            <div className="match-team__country ">POR</div>
                          </figcaption>
                        </figure>
                        <div className="match-result">
                          <span className="match-result__score">0</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">Final</span>
                        </div>
                      </div>
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-1" role="group">
                            <img src="assets/img/samples/logo-necromancers-30.png" srcSet="assets/img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">NCR</div>
                            <div className="match-team__country ">USA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result match-result--winner-right">
                          <span className="match-result__score">3</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">01/07</span>
                        </div>
                      </div>
                    </div>
                    <div className="match-score-inline__footer">
                      <ul className="match-stats-links">
                        <li>
                          <a href="matches-overview-1.html">
                            <svg role="img" className="df-icon df-icon--match-overview">
                              <use xlinkHref="assets/img/necromancers.svg#match-overview" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-stats-1.html">
                            <svg role="img" className="df-icon df-icon--match-stats">
                              <use xlinkHref="assets/img/necromancers.svg#match-stats" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-lineups-1.html">
                            <svg role="img" className="df-icon df-icon--match-lineups">
                              <use xlinkHref="assets/img/necromancers.svg#match-lineups" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-replay.html">
                            <svg role="img" className="df-icon df-icon--match-replay">
                              <use xlinkHref="assets/img/necromancers.svg#match-replay" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="top-bar-carousel__item xwleague">
                  <div className="match-score-inline">
                    <div className="match-score-inline__body">
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-5" role="group">
                            <img src="assets/img/samples/logo-eagles-30.png" srcSet="assets/img/samples/logo-eagles-30@2x.png 2x" alt="FEG Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">FEG</div>
                            <div className="match-team__country ">FRA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result match-result--winner-right">
                          <span className="match-result__score">5</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">Final</span>
                        </div>
                      </div>
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-1" role="group">
                            <img src="assets/img/samples/logo-necromancers-30.png" srcSet="assets/img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">NCR</div>
                            <div className="match-team__country ">USA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result">
                          <span className="match-result__score">2</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">01/04</span>
                        </div>
                      </div>
                    </div>
                    <div className="match-score-inline__footer">
                      <ul className="match-stats-links">
                        <li>
                          <a href="matches-overview-1.html">
                            <svg role="img" className="df-icon df-icon--match-overview">
                              <use xlinkHref="assets/img/necromancers.svg#match-overview" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-stats-1.html">
                            <svg role="img" className="df-icon df-icon--match-stats">
                              <use xlinkHref="assets/img/necromancers.svg#match-stats" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-lineups-1.html">
                            <svg role="img" className="df-icon df-icon--match-lineups">
                              <use xlinkHref="assets/img/necromancers.svg#match-lineups" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-replay.html">
                            <svg role="img" className="df-icon df-icon--match-replay">
                              <use xlinkHref="assets/img/necromancers.svg#match-replay" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="top-bar-carousel__item xwleague">
                  <div className="match-score-inline">
                    <div className="match-score-inline__body">
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-1" role="group">
                            <img src="assets/img/samples/logo-necromancers-30.png" srcSet="assets/img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">NCR</div>
                            <div className="match-team__country ">USA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result">
                          <span className="match-result__score">1</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">Final</span>
                        </div>
                      </div>
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-3" role="group">
                            <img src="assets/img/samples/logo-bulls-30.png" srcSet="assets/img/samples/logo-bulls-30@2x.png 2x" alt="AGB Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">AGB</div>
                            <div className="match-team__country ">SPA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result match-result--winner-right">
                          <span className="match-result__score">3</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">01/03</span>
                        </div>
                      </div>
                    </div>
                    <div className="match-score-inline__footer">
                      <ul className="match-stats-links">
                        <li>
                          <a href="matches-overview-1.html">
                            <svg role="img" className="df-icon df-icon--match-overview">
                              <use xlinkHref="assets/img/necromancers.svg#match-overview" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-stats-1.html">
                            <svg role="img" className="df-icon df-icon--match-stats">
                              <use xlinkHref="assets/img/necromancers.svg#match-stats" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-lineups-1.html">
                            <svg role="img" className="df-icon df-icon--match-lineups">
                              <use xlinkHref="assets/img/necromancers.svg#match-lineups" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-replay.html">
                            <svg role="img" className="df-icon df-icon--match-replay">
                              <use xlinkHref="assets/img/necromancers.svg#match-replay" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="top-bar-carousel__headline xeleague">
                  <span>Xenowatch East League</span>
                </li>
                <li className="top-bar-carousel__item xeleague">
                  <div className="match-score-inline">
                    <div className="match-score-inline__body">
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-1" role="group">
                            <img src="assets/img/samples/logo-necromancers-30.png" srcSet="assets/img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">NCR</div>
                            <div className="match-team__country ">USA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result match-result--winner-right">
                          <span className="match-result__score">4</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">Final</span>
                        </div>
                      </div>
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-2" role="group">
                            <img src="assets/img/samples/logo-rhinos-30.png" srcSet="assets/img/samples/logo-rhinos-30@2x.png 2x" alt="RRH Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">RRH</div>
                            <div className="match-team__country ">JPN</div>
                          </figcaption>
                        </figure>
                        <div className="match-result">
                          <span className="match-result__score">1</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">12/18</span>
                        </div>
                      </div>
                    </div>
                    <div className="match-score-inline__footer">
                      <ul className="match-stats-links">
                        <li>
                          <a href="matches-overview-1.html">
                            <svg role="img" className="df-icon df-icon--match-overview">
                              <use xlinkHref="assets/img/necromancers.svg#match-overview" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-stats-1.html">
                            <svg role="img" className="df-icon df-icon--match-stats">
                              <use xlinkHref="assets/img/necromancers.svg#match-stats" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-lineups-1.html">
                            <svg role="img" className="df-icon df-icon--match-lineups">
                              <use xlinkHref="assets/img/necromancers.svg#match-lineups" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-replay.html">
                            <svg role="img" className="df-icon df-icon--match-replay">
                              <use xlinkHref="assets/img/necromancers.svg#match-replay" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="top-bar-carousel__item xeleague">
                  <div className="match-score-inline">
                    <div className="match-score-inline__body">
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-1" role="group">
                            <img src="assets/img/samples/logo-necromancers-30.png" srcSet="assets/img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">NCR</div>
                            <div className="match-team__country ">USA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result match-result--winner-right">
                          <span className="match-result__score">4</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">Final</span>
                        </div>
                      </div>
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-3" role="group">
                            <img src="assets/img/samples/logo-bulls-30.png" srcSet="assets/img/samples/logo-bulls-30@2x.png 2x" alt="AGB Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">AGB</div>
                            <div className="match-team__country ">SPA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result">
                          <span className="match-result__score">3</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">12/11</span>
                        </div>
                      </div>
                    </div>
                    <div className="match-score-inline__footer">
                      <ul className="match-stats-links">
                        <li>
                          <a href="matches-overview-1.html">
                            <svg role="img" className="df-icon df-icon--match-overview">
                              <use xlinkHref="assets/img/necromancers.svg#match-overview" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-stats-1.html">
                            <svg role="img" className="df-icon df-icon--match-stats">
                              <use xlinkHref="assets/img/necromancers.svg#match-stats" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-lineups-1.html">
                            <svg role="img" className="df-icon df-icon--match-lineups">
                              <use xlinkHref="assets/img/necromancers.svg#match-lineups" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-replay.html">
                            <svg role="img" className="df-icon df-icon--match-replay">
                              <use xlinkHref="assets/img/necromancers.svg#match-replay" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="top-bar-carousel__item xeleague">
                  <div className="match-score-inline">
                    <div className="match-score-inline__body">
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-4" role="group">
                            <img src="assets/img/samples/logo-panthers-30.png" srcSet="assets/img/samples/logo-panthers-30@2x.png 2x" alt="ICP Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">ICP</div>
                            <div className="match-team__country ">POR</div>
                          </figcaption>
                        </figure>
                        <div className="match-result">
                          <span className="match-result__score">0</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">Final</span>
                        </div>
                      </div>
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-1" role="group">
                            <img src="assets/img/samples/logo-necromancers-30.png" srcSet="assets/img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">NCR</div>
                            <div className="match-team__country ">USA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result match-result--winner-right">
                          <span className="match-result__score">2</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">12/09</span>
                        </div>
                      </div>
                    </div>
                    <div className="match-score-inline__footer">
                      <ul className="match-stats-links">
                        <li>
                          <a href="matches-overview-1.html">
                            <svg role="img" className="df-icon df-icon--match-overview">
                              <use xlinkHref="assets/img/necromancers.svg#match-overview" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-stats-1.html">
                            <svg role="img" className="df-icon df-icon--match-stats">
                              <use xlinkHref="assets/img/necromancers.svg#match-stats" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-lineups-1.html">
                            <svg role="img" className="df-icon df-icon--match-lineups">
                              <use xlinkHref="assets/img/necromancers.svg#match-lineups" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-replay.html">
                            <svg role="img" className="df-icon df-icon--match-replay">
                              <use xlinkHref="assets/img/necromancers.svg#match-replay" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="top-bar-carousel__headline xusacup">
                  <span>Xenowatch USA Cup</span>
                </li>
                <li className="top-bar-carousel__item xusacup">
                  <div className="match-score-inline">
                    <div className="match-score-inline__body">
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-1" role="group">
                            <img src="assets/img/samples/logo-necromancers-30.png" srcSet="assets/img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">NCR</div>
                            <div className="match-team__country ">USA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result">
                          <span className="match-result__score">1</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">Final</span>
                        </div>
                      </div>
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-3" role="group">
                            <img src="assets/img/samples/logo-bulls-30.png" srcSet="assets/img/samples/logo-bulls-30@2x.png 2x" alt="AGB Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">AGB</div>
                            <div className="match-team__country ">SPA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result match-result--winner-right">
                          <span className="match-result__score">3</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">11/17</span>
                        </div>
                      </div>
                    </div>
                    <div className="match-score-inline__footer">
                      <ul className="match-stats-links">
                        <li>
                          <a href="matches-overview-1.html">
                            <svg role="img" className="df-icon df-icon--match-overview">
                              <use xlinkHref="assets/img/necromancers.svg#match-overview" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-stats-1.html">
                            <svg role="img" className="df-icon df-icon--match-stats">
                              <use xlinkHref="assets/img/necromancers.svg#match-stats" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-lineups-1.html">
                            <svg role="img" className="df-icon df-icon--match-lineups">
                              <use xlinkHref="assets/img/necromancers.svg#match-lineups" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-replay.html">
                            <svg role="img" className="df-icon df-icon--match-replay">
                              <use xlinkHref="assets/img/necromancers.svg#match-replay" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="top-bar-carousel__item xusacup">
                  <div className="match-score-inline">
                    <div className="match-score-inline__body">
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-5" role="group">
                            <img src="assets/img/samples/logo-eagles-30.png" srcSet="assets/img/samples/logo-eagles-30@2x.png 2x" alt="FEG Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">FEG</div>
                            <div className="match-team__country ">FRA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result match-result--winner-right">
                          <span className="match-result__score">2</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">Final</span>
                        </div>
                      </div>
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-1" role="group">
                            <img src="assets/img/samples/logo-necromancers-30.png" srcSet="assets/img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">NCR</div>
                            <div className="match-team__country ">USA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result">
                          <span className="match-result__score">1</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">11/11</span>
                        </div>
                      </div>
                    </div>
                    <div className="match-score-inline__footer">
                      <ul className="match-stats-links">
                        <li>
                          <a href="matches-overview-1.html">
                            <svg role="img" className="df-icon df-icon--match-overview">
                              <use xlinkHref="assets/img/necromancers.svg#match-overview" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-stats-1.html">
                            <svg role="img" className="df-icon df-icon--match-stats">
                              <use xlinkHref="assets/img/necromancers.svg#match-stats" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-lineups-1.html">
                            <svg role="img" className="df-icon df-icon--match-lineups">
                              <use xlinkHref="assets/img/necromancers.svg#match-lineups" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-replay.html">
                            <svg role="img" className="df-icon df-icon--match-replay">
                              <use xlinkHref="assets/img/necromancers.svg#match-replay" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="top-bar-carousel__item xusacup">
                  <div className="match-score-inline">
                    <div className="match-score-inline__body">
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-4" role="group">
                            <img src="assets/img/samples/logo-panthers-30.png" srcSet="assets/img/samples/logo-panthers-30@2x.png 2x" alt="ICP Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">ICP</div>
                            <div className="match-team__country ">POR</div>
                          </figcaption>
                        </figure>
                        <div className="match-result match-result--winner-right">
                          <span className="match-result__score">3</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">Final</span>
                        </div>
                      </div>
                      <div className="match-score-inline__body-inner">
                        <figure className="match-team" role="group">
                          <figure className="match-team-logo match-team-logo--team-1" role="group">
                            <img src="assets/img/samples/logo-necromancers-30.png" srcSet="assets/img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
                          </figure>
                          <figcaption>
                            <div className="match-team__name">NCR</div>
                            <div className="match-team__country ">USA</div>
                          </figcaption>
                        </figure>
                        <div className="match-result">
                          <span className="match-result__score">2</span>
                        </div>
                        <div className="match-result">
                          <span className="match-result__label">11/06</span>
                        </div>
                      </div>
                    </div>
                    <div className="match-score-inline__footer">
                      <ul className="match-stats-links">
                        <li>
                          <a href="matches-overview-1.html">
                            <svg role="img" className="df-icon df-icon--match-overview">
                              <use xlinkHref="assets/img/necromancers.svg#match-overview" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-stats-1.html">
                            <svg role="img" className="df-icon df-icon--match-stats">
                              <use xlinkHref="assets/img/necromancers.svg#match-stats" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-lineups-1.html">
                            <svg role="img" className="df-icon df-icon--match-lineups">
                              <use xlinkHref="assets/img/necromancers.svg#match-lineups" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="matches-replay.html">
                            <svg role="img" className="df-icon df-icon--match-replay">
                              <use xlinkHref="assets/img/necromancers.svg#match-replay" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="menu-panel__content d-none d-md-flex">
              <div className="menu-panel__navigation">
                <div id="dl-menu" className="dl-menuwrapper">
                  {/* <button class="dl-trigger">Open Menu</button> */}
                  <ul className="dl-menu dl-menuopen">
                    <li className>
                      <a href="home.html">Home</a>
                    </li>
                    <li className>
                      <a href="team-selection-2.html">Teams</a>
                      <ul className="dl-submenu">
                        <li className>
                          <a href="#">Team Selections</a>
                          <ul className="dl-submenu">
                            <li className><a href="team-selection-1.html">Team Selection v1</a></li>
                            <li className><a href="team-selection-2.html">Team Selection v2</a></li>
                            <li className><a href="team-selection-3.html">Team Selection v3</a></li>
                            <li className><a href="team-selection-4.html">Team Selection v4</a></li>
                          </ul>
                        </li>
                        <li className>
                          <a href="team-overview.html">Team Overview</a>
                          <ul className="dl-submenu">
                            <li className><a href="team-overview.html">Team Overview v1</a></li>
                            <li className><a href="team-overview-2.html">Team Overview v2</a></li>
                          </ul>
                        </li>
                        <li className><a href="team-player-1.html">Player Page</a></li>
                      </ul>
                    </li>
                    <li className><a href="#">Matches</a>
                      <ul className="dl-submenu">
                        <li className><a href="matches-scores.html">Match Scores</a></li>
                        <li className><a href="matches-upcoming.html">Upcoming Matches</a></li>
                        <li className><a href="matches-standings.html">Standings</a></li>
                        <li className><a href="#">Match Stats</a>
                          <ul className="dl-submenu">
                            <li className><a href="matches-stats-1.html">Match Stats v1</a></li>
                            <li className><a href="matches-stats-2.html">Match Stats v2</a></li>
                            <li className><a href="matches-stats-3.html">Match Stats v3</a></li>
                          </ul>
                        </li>
                        <li className>
                          <a href="#">Match Lineups</a>
                          <ul className="dl-submenu">
                            <li className><a href="matches-lineups-1.html">Match Lineups v1</a></li>
                            <li className><a href="matches-lineups-2.html">Match Lineups v2</a></li>
                            <li className><a href="matches-lineups-3.html">Match Lineups v3</a></li>
                          </ul>
                        </li>
                        <li className><a href="#">Match Overviews</a>
                          <ul className="dl-submenu">
                            <li className><a href="matches-overview-1.html">Match Overview v1</a></li>
                            <li className><a href="matches-overview-2.html">Match Overview v2</a></li>
                          </ul>
                        </li>
                        <li className><a href="matches-replay.html">Match Replay</a></li>
                      </ul>
                    </li>
                    <li className>
                      <a href="blog-1.html">News</a>
                    </li>
                    <li>
                      <a href="#">Features</a>
                      <ul className="dl-submenu dl-megamenu">
                        <div className="row">
                          <ul className="col-md-6 col-lg-4">
                            <li className><a href="index.html">Landing Image</a></li>
                            <li className="active"><a href="index-2.html">Landing Video</a></li>
                            <li className><a href="home.html">Home page</a></li>
                            <li className><a href="blog-1.html">News v1</a></li>
                            <li className><a href="blog-2.html">News v2</a></li>
                            <li className><a href="blog-3.html">News v3</a></li>
                            <li className><a href="blog-4.html">News v4</a></li>
                            <li className><a href="blog-classic.html">News Classic <span className="badge badge-danger">New</span></a></li>
                            <li className><a href="blog-post.html">Post Page</a></li>
                            <li className><a href="shop-account-settings.html">Account Settings</a></li>
                          </ul>
                          <ul className="col-md-6 col-lg-4">
                            <li className><a href="shop-account-orders.html">Account Orders</a></li>
                            <li className><a href="login-register.html">Login &amp; Register</a></li>
                            <li className><a href="features-about-us.html">About Us</a></li>
                            <li className><a href="features-faqs.html">FAQs</a></li>
                            <li className><a href="features-contact-us.html">Contact Us</a></li>
                            <li className><a href="management-and-staff.html">Management &amp; Staff</a></li>
                            <li className><a href="streams-archive.html">Streams Page</a></li>
                            <li className><a href="partners.html">Our Partners</a></li>
                          </ul>
                          <ul className="col-md-12 col-lg-4">
                            <li className><a href="features-shortcodes.html">Shortcodes</a></li>
                            <li className><a href="features-typography.html">Typography</a></li>
                            <li className><a href="features-icons.html">Icons <span className="badge badge-danger">New</span></a></li>
                            <li className><a href="features-bg-1.html">Backgrounds</a></li>
                          </ul>
                        </div>
                      </ul>
                    </li>
                    <li className>
                      <a href="shop.html">Shop</a>
                      <ul className="dl-submenu">
                        <li className><a href="shop.html">Shop Page v1</a></li>
                        <li className><a href="shop-2.html">Shop Page v2</a></li>
                        <li className><a href="shop-product.html">Product Page</a></li>
                        <li className><a href="shop-checkout.html">Checkout Page</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menu-panel__widget-area">
                <div className="row">
                  <div className="col-md-12 col-lg-6 col-xl-5">
                    {/* Widget: Text */}
                    <section className="widget widget-text">
                      <h5 className="widget__title">Join our team</h5>
                      <div className="widget__content">
                        <p>
                          We’re always looking for new talent to join our teams. If you wanna join us, just send us and email and we’ll get back to you!
                        </p>
                        <div className="info-box">
                          <div className="info-box__label">Max Parker - Recruiter</div>
                          <div className="info-box__content"><a href="mailto:#">mp-recruit<span className="color-primary">@</span>necromancers.com</a></div>
                        </div>
                        <div className="info-box">
                          <div className="info-box__label">Be our partner!</div>
                          <div className="info-box__content"><a href="mailto:#">partners<span className="color-primary">@</span>necromancers.com</a></div>
                        </div>
                      </div>
                    </section>
                    {/* Widget: Text / End */}
                  </div>
                  <div className="col-md-12 col-lg-6 col-xl-5 offset-xl-2 mt-5 mt-lg-0">
                    {/* Widget: Contact Info */}
                    <section className="widget widget-contact-info">
                      <h5 className="widget__title">Contact Info</h5>
                      <div className="widget__content">
                        <p>
                          If you have any questions, just send us and email and don’t forget to follow and like all our social accounts to keep updated!
                        </p>
                        <div className="info-box">
                          <div className="info-box__label">General inquiries</div>
                          <div className="info-box__content"><a href="mailto:#">inquiries<span className="color-primary">@</span>necromancers.com</a></div>
                        </div>
                        <ul className="social-menu social-menu--default">
                          <li><a href="https://www.facebook.com/danfisher.dev/" /></li>
                          <li><a href="https://twitter.com/danfisher_dev" /></li>
                          <li><a href="https://twitch.com" /></li>
                          <li><a href="https://discord.gg/xxxx" /></li>
                        </ul>
                      </div>
                    </section>
                    {/* Widget: Contact Info / End */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    {/* Widget: Partners Carousel */}
                    <section className="widget widget-partners-carousel">
                      <h5 className="widget__title">Our Partners</h5>
                      <div className="widget__content">
                        <ul>
                          <li>
                            <img src="assets/img/samples/partner-carousel-img-01.png" alt />
                          </li>
                          <li>
                            <img src="assets/img/samples/partner-carousel-img-02.png" alt />
                          </li>
                          <li>
                            <img src="assets/img/samples/partner-carousel-img-03.png" alt />
                          </li>
                          <li>
                            <img src="assets/img/samples/partner-carousel-img-01.png" alt />
                          </li>
                          <li>
                            <img src="assets/img/samples/partner-carousel-img-02.png" alt />
                          </li>
                          <li>
                            <img src="assets/img/samples/partner-carousel-img-03.png" alt />
                          </li>
                        </ul>
                      </div>
                    </section>
                    {/* Widget: Partners Carousel / End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Menu Panel / End */}
        </div>
        <div className="preloader-overlay">
          <div id="js-preloader" className="preloader">
            <div className="preloader-inner fadeInUp">
              <div className="pong-loader" />
              <svg role="img" className="df-icon df-icon--preloader-arcade">
                <use xlinkHref="assets/img/necromancers.svg#preloader-arcade" />
              </svg>
            </div>
          </div>
        </div>
        {/* The cursor elements */}
        <div className="df-custom-cursor-wrap">
          <div id="df-custom-cursor" />
        </div>
        {/* Javascript Files
      ================================================== */}
        {/* Core JS */}
        {/* Vendor JS */}
        {/* Template JS */}
        {/* Duotone SVG color filter */}
        <svg xmlns="http://www.w3.org/2000/svg" className="svg-filters">
          <filter id="duotone_base">
            <feColorMatrix type="matrix" result="grayscale" values="1 0 0 0 0
            1 0 0 0 0
            1 0 0 0 0
            0 0 0 1 0" />
            <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone_base_filter">
              <feFuncR type="table" tableValues="0.082352941176471 0.419607843137255" />
              <feFuncG type="table" tableValues="0.090196078431373 0.443137254901961" />
              <feFuncB type="table" tableValues="0.125490196078431 0.6" />
              <feFuncA type="table" tableValues="0 1" />
            </feComponentTransfer>
          </filter>
        </svg>
      </div>


    </div>
  )
}



 

