<!doctype html>
<html class="no-js" lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>FundEx (SL) LTD - Your One Stop Finance Solutions</title>

    <link rel="shortcut icon" href="{{asset('theme/assets/images/fav.png')}}" type="image/x-icon">
    <link rel="stylesheet" href="{{asset('theme/assets/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('theme/assets/css/fontawesome.min.css')}}">
    <link rel="stylesheet" href="{{asset('theme/assets/css/jquery-ui.css')}}">
    <link rel="stylesheet" href="{{asset('theme/assets/css/plugin/nice-select.css')}}">
    <link rel="stylesheet" href="{{asset('theme/assets/css/plugin/slick.css')}}">
    <link rel="stylesheet" href="{{asset('theme/assets/css/arafat-font.css')}}">
    <link rel="stylesheet" href="{{asset('theme/assets/css/plugin/animate.css')}}">
    <link rel="stylesheet" href="{{asset('theme/assets/css/style.css')}}">
</head>

<body>
    <!-- start preloader -->
    <div class="preloader" id="preloader"></div>
    <!-- end preloader -->

    <!-- Scroll To Top Start-->
    <a href="javascript:void(0)" class="scrollToTop"><i class="fas fa-angle-double-up"></i></a>
    <!-- Scroll To Top End -->

    <!-- header-section start -->
    <header class="header-section">
        <div class="overlay">
          <div class="container">
            <div class="row d-flex header-area">
              <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#">
                  <img style="max-width:100px;" src="{{asset('theme/assets/images/logo-fundex.png')}}" class="logo" alt="logo">
                </a>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbar-content">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbar-content">
                  <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="{{url('/')}}">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="{{url('/')}}/about-us">About Us</a>
                    </li>
                    <li class="nav-item dropdown main-navbar">
                        <a class="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown"
                          data-bs-auto-close="outside">Business</a>
                        <ul class="dropdown-menu main-menu shadow">
                          <li class="dropend sub-navbar">
                              <a href="javascript:void(0)" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown"
                                data-bs-auto-close="outside">Account</a>
                              <ul class="dropdown-menu sub-menu shadow">
                                <li><a class="nav-link" href="account.html">Account</a></li>
                                <li><a class="nav-link" href="account-details.html">Account Details</a></li>
                              </ul>
                          </li>
                          <li><a class="nav-link" href="product.html">Product</a></li>
                          <li class="dropend sub-navbar">
                            <a href="javascript:void(0)" class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown"
                              data-bs-auto-close="outside">Loan</a>
                            <ul class="dropdown-menu sub-menu shadow">
                              <li><a class="nav-link" href="business-loan.html">Business Loans</a></li>
                              <li><a class="nav-link" href="educations-loan.html">Educations Loans</a></li>
                              <li><a class="nav-link" href="home-loan.html">Home Loans</a></li>
                              <li><a class="nav-link" href="car-loan.html">Car Loans</a></li>
                              <li><a class="nav-link" href="personal-loan.html">Personal Loans</a></li>
                            </ul>
                          </li>
                          <li><a class="nav-link" href="card.html">Card</a></li>
                        </ul>
                      </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Careers</a>
                    </li>


                    <li class="nav-item">
                      <a class="nav-link" href="#">Contact Us</a>
                    </li>
                  </ul>
                  <div class="right-area header-action d-flex align-items-center">
                    <a href="#" class="cmn-btn"><i class="fa fa-lock"></i> Sign In</a>
                </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
    </header>
    <!-- header-section end -->



    @yield('content')



    <!-- Footer Area Start -->
    <div class="footer-section">
        <div class="container pt-120">
            <div class="row cus-mar pt-120 pb-120 justify-content-between wow fadeInUp">
                <div class="col-xl-4 col-lg-4 col-md-4 col-6">
                    <div class="footer-box">
                        <h5>About Us</h5>
                        <p>We’ve powered the growth of thousands of small and medium businesses and built a financial platform that connects communities to the world through our remittance services, mobile money transactions and micro-finance loans.</p>
                        <div class="social-link d-flex align-items-center">
                            <a href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a>
                            <a href="javascript:void(0)"><i class="fab fa-twitter"></i></a>
                            <a href="javascript:void(0)"><i class="fab fa-linkedin-in"></i></a>
                            <a href="javascript:void(0)"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-6">
                    <div class="footer-box">
                        <h5>Company</h5>
                        <ul class="footer-link">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">History</a></li>
                            <li><a href="#">Team</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-6">
                    <div class="footer-box">
                        <h5>Useful Links</h5>
                        <ul class="footer-link">
                            <li><a href="#">Business</a></li>
                            <li><a href="#">Solutions</a></li>
                            <li><a href="#">Locations</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-xl-3 col-8">
                    <div class="footer-box">
                        <h5>Subscribe</h5>
                        <form>
                            <div class="form-group">
                                <input type="text" placeholder="Enter Your Email address">
                                <button class="cmn-btn">Subscribe</button>
                            </div>
                        </form>
                        <p>Get the latest updates via email. Any time you may unsubscribe</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="footer-bottom">
                        <div class="left">
                            <p> Copyright © <a href="#">FundEx (SL) LTD</a> | Powered by
                                <a href="https://designekta.com">Designekta Studios</a>
                            </p>
                        </div>
                        <div class="right">
                            <a href="privacy-policy.html" class="cus-bor">Privacy </a>
                            <a href="terms-conditions.html">Terms &amp; Condition </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="img-area">
            <img src="{{asset('theme/assets/images/footer-Illu-left.png')}}" class="left" alt="Images">
            <img src="{{asset('theme/assets/images/footer-Illu-right.png')}}" class="right" alt="Images">
        </div>
    </div>
    <!-- Footer Area End -->

    <!--==================================================================-->
    {{-- <script data-cfasync="false" src="../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js')}}"></script> --}}
    <script src="{{asset('theme/assets/js/jquery.min.js')}}"></script>
    <script src="{{asset('theme/assets/js/jquery-ui.js')}}"></script>
    <script src="{{asset('theme/assets/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('theme/assets/js/fontawesome.js')}}"></script>
    <script src="{{asset('theme/assets/js/plugin/slick.js')}}"></script>
    <script src="{{asset('theme/assets/js/plugin/waypoint.min.js')}}"></script>
    <script src="{{asset('theme/assets/js/plugin/counter.js')}}"></script>
    <script src="{{asset('theme/assets/js/plugin/jquery.nice-select.min.js')}}"></script>
    <script src="{{asset('theme/assets/js/plugin/wow.min.js')}}"></script>
    <script src="{{asset('theme/assets/js/plugin/plugin.js')}}"></script>
    <script src="{{asset('theme/assets/js/main.js')}}"></script>


</body>


</html>
