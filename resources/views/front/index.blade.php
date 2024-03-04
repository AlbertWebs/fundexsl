@extends('front.master')

@section('content')
    <!-- banner-section start -->
    <section class="banner-section">
        <div class="overlay">
            <div class="banner-content d-flex align-items-center">
                <div class="container">
                    <div class="row justify-content-start">
                        <div class="col-lg-7 col-md-10">
                            <div class="main-content">
                                <div class="top-area section-text justify-content-center">
                                    <h4 class="sub-title">Simple. Transparent. Secure</h4>
                                    <h2 class="title">Moving Cash for Businesses and Individual Payments anywhere</h2>
                                    <p class="xlr">FundEx (SL) LTD moves cash to anywhere via remittance, Mobile Money, and Micro-finance</p>
                                </div>
                                <div class="bottom-area">
                                    <a href="register.html" class="cmn-btn">Locations</a>
                                    <a href="contact.html" class="cmn-btn second">Get in touch</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="partner">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-3 col-3">
                        <h4>Partners</h4>
                    </div>
                    <div class="col-md-9 col-9">
                        <div class="partner-box partner-carousel">
                            <div class="single">
                                <div class="item">
                                    <img src="{{asset('theme/assets/images/MoneyGram-Logo.png')}}" alt="image">
                                </div>
                            </div>
                            <div class="single">
                                <div class="item">
                                    <img src="{{asset('theme/assets/images/ria.png')}}" alt="image">
                                </div>
                            </div>
                            <div class="single">
                                <div class="item">
                                    <img src="{{asset('theme/assets/images/Western-Union-Logo.png')}}" alt="image">
                                </div>
                            </div>
                            <div class="single">
                                <div class="item">
                                    <img src="{{asset('theme/assets/images/Afro-logo.png')}}" alt="image">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- banner-section end -->

    <!-- Features In start -->
    <section class="features-section">
        <div class="overlay pt-120">
            <div class="container wow fadeInUp">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="top-section">
                            <span class="head-icon d-flex justify-content-center align-items-center">
                                <img src="{{asset('theme/assets/images/icon/notification.png')}}" alt="icon">
                            </span>
                            <h5 class="sub-title">Seamless Transactions</h5>
                            <h2 class="title">Think Business Payments? Think FundEx (SL) LTD </h2>
                            <p>
                                We believe global business should be just as easy and hassle-free as doing business locally, for everyone. FundEx (SL) Ltd’s payment platform empowers you to reach new markets, and do business in multiple locations/communities– all while simplifying the payment experience for you and your clients, partners, and suppliers.
                            </p>
                            <ul class="list">
                                <li class="list-item d-flex align-items-center">
                                    <span class="check d-flex align-items-center justify-content-center">
                                        <img src="{{asset('theme/assets/images/icon/check.png')}}" alt="icon">
                                    </span>
                                    <span>Cards that work all across the world.</span>
                                </li>
                                <li class="list-item d-flex align-items-center ">
                                    <span class="check d-flex align-items-center justify-content-center">
                                        <img src="{{asset('theme/assets/images/icon/check.png')}}" alt="icon">
                                    </span>
                                    <span>No ATM fees. No minimum balance. No overdrafts.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 text-end">
                        <div class="img-area">
                            <img src="{{asset('theme/assets/images/feature-item-1.png')}}" alt="image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Features In end -->

    <!-- Features In start -->
    <section class="features-section second">
        <div class="overlay pt-120 pb-120">
            <div class="container wow fadeInUp">
                <div class="row">
                    <div class="col-lg-6 text-start cus-ord">
                        <div class="img-area">
                            <video style="border:10px solid #1A4DBE; min-height:500px; object-fit: cover;" width="100%" height="100%" controls>
                                <source src="{{asset('theme/assets/images/pexels-tima-miroshnichenko-6266426.mp4')}}" type="video/mp4">

                              Your browser does not support the video tag.
                              </video>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="top-section">
                            <span class="head-icon d-flex justify-content-center align-items-center">
                                <img src="{{asset('theme/assets/images/icon/sheled.png')}}" alt="icon">
                            </span>
                            <h5 class="sub-title">How it Works</h5>
                            <h2 class="title">MEET FUNDEX (SL) LTD</h2>
                            <p>We have a lot to offer you:
                                Here’s how our global payment solutions and expertise can help you and your business.

                            </p>
                            <br>
                            <p>
                                We’ve powered the growth of thousands of small and medium businesses and built a financial platform that connects communities to the world through our remittance services, mobile money transactions and micro-finance loans.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Features In end -->

       <!-- Personalized In start -->
       <section class="personalized">
        <div class="overlay">
            <div class="container wow fadeInUp">
                <div class="row d-flex justify-content-between">
                    <div class="col-lg-6 col-xl-5 d-flex align-items-center justify-content-end">
                        <div class="img-area">
                            <img src="{{asset('theme/assets/images/personalized.png')}}" alt="image">
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-5 pt-120 pb-120">
                        <div class="section-text">
                            <h3 class="title">Need a Personalized Solution?</h3>
                            <p>Fundex moves your cash to anywhere and make available to your customers, clients and relatives. Join more than thousands of people who already trust us to move their money around the world.</p>
                        </div>
                        <a href="#" class="cmn-btn">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Personalized In end -->

    <!-- Solutions Business In start -->
    <section class="solutions-business">
        <div class="overlay pt-120 pb-120">
            <div class="container wow fadeInUp">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-header text-center">
                            <h5 class="sub-title">Benefits</h5>
                            <h2 class="title">Why FundEx SL</h2>
                            <p>Moving cash can get complicated but we’ve made it our mission to uncomplicate them.</p>
                        </div>
                    </div>
                </div>
                <div class="row cus-mar">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-box text-center">
                            <div class="thumb d-flex justify-content-center align-items-center">
                                <img src="{{asset('theme/assets/images/icon/loan-feature-1.png')}}" alt="checking">
                            </div>
                            <div class="content">
                                <h5>Avoid the Long Queue</h5>
                                <p>
                                    Why allow your beneficiaries wait for long in receiving their cash payments? With FundEx SL LTD, you can get paid quickly and simply, as if you were serving yourself.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-box text-center">
                            <div class="thumb d-flex justify-content-center align-items-center">
                                <img src="{{asset('theme/assets/images/icon/more-features-1.png')}}" alt="checking">
                            </div>
                            <div class="content">
                                <h5>Open Access to All Districts</h5>
                                <p>

                                    FundEx SL LTD provides a nationwide network of agents for convenient payment transactions. Receive or send payments effortlessly, tailored to your preferences, with our widespread presence across the country.</p>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-box text-center">
                            <div class="thumb d-flex justify-content-center align-items-center">
                                <img src="{{asset('theme/assets/images/icon/need-help-1.png')}}" alt="checking">
                            </div>
                            <div class="content">
                                <h5>Join the Network</h5>
                                <p>
                                    Join the movement! Thousands already trust FundEx; be part of something significant. Your trust matters to us as we continue to build a community of satisfied customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Solutions Business In end -->

     <!-- Security Area In start -->
     <section class="security-section">
        <div class="overlay pt-120 pb-120">
            <div class="container wow fadeInUp">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="img-area img-areas">
                            <img src="{{asset('theme/assets/images/sign-in-up-bg.png')}}" alt="image">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="section-right">
                            <h5 class="sub-title">Our Commitment</h5>
                            <h2 class="title">We’re with you at every step</h2>
                            <p>
                               At FundEx, our committed and dedicated teams stand ready to engage in comprehensive discussions about the intricacies of building your business. We prioritize effective communication, ensuring that we convey information in a language tailored to your understanding.
                               <br><br>
                               By fostering clear and open dialogue, we aim to provide you with the insights and support needed to navigate the complexities of business development. Our team's commitment extends beyond mere assistance – we strive to empower you with knowledge and guidance, facilitating a collaborative journey towards the success of your business.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Security Area In end -->


    <!-- Our Latest Articles In start -->
    {{-- <section class="latest-articles">
        <div class="overlay pt-120 pb-120">
            <div class="container wow fadeInUp">
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-header text-center">
                            <h5 class="sub-title">Latest insights from FundEx (SL) LTD</h5>
                            <h2 class="title">Our Latest Articles</h2>
                            <p>Get more Latest News and Resources here ...</p>
                        </div>
                    </div>
                </div>
                <div class="row cus-mar">
                    <div class="col-lg-4 col-md-6">
                        <div class="blog-item">
                            <div class="thumb">
                                <img src="{{asset('theme/assets/images/blog-1.png')}}" alt="blog">
                            </div>
                            <div class="content">
                                <a href="blog-single.html">
                                    <h5>The future of fraud protection.</h5>
                                </a>
                                <div class="info">
                                    <div class="item cus-bor d-flex align-items-center">
                                        <span class="icon d-flex align-items-center justify-content-center "><img
                                                src="{{asset('theme/assets/images/icon/user.png')}}" alt="icon"></span>
                                        <span>Post By Albert Muhatia</span>
                                    </div>
                                    <div class="item d-flex align-items-center">
                                        <span class="icon d-flex align-items-center justify-content-center"><img
                                                src="{{asset('theme/assets/images/icon/calendar.png')}}" alt="icon"></span>
                                        <span>05 Feb 2022</span>
                                    </div>
                                </div>
                                <p>Morbi eget venenatis lorem, id viverra massa. Etiam congue efficitur velit vel
                                    pharetra.</p>
                                <div class="read">
                                    <a href="blog-single.html" class="btn-arrow">Read more<img
                                            src="{{asset('theme/assets/images/icon/arrow-right.png')}}" alt="arrow"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="blog-item">
                            <div class="thumb">
                                <img src="{{asset('theme/assets/images/blog-2.png')}}" alt="blog">
                            </div>
                            <div class="content">
                                <a href="blog-single.html">
                                    <h5>Digital Banking Services</h5>
                                </a>
                                <div class="info">
                                    <div class="item cus-bor d-flex align-items-center">
                                        <span class="icon d-flex align-items-center justify-content-center "><img
                                                src="{{asset('theme/assets/images/icon/user.png')}}" alt="icon"></span>
                                        <span>Post By Albert Muhatia</span>
                                    </div>
                                    <div class="item d-flex align-items-center">
                                        <span class="icon d-flex align-items-center justify-content-center"><img
                                                src="{{asset('theme/assets/images/icon/calendar.png')}}" alt="icon"></span>
                                        <span>05 Feb 2022</span>
                                    </div>
                                </div>
                                <p>Morbi eget venenatis lorem, id viverra massa. Etiam congue efficitur velit vel
                                    pharetra.</p>
                                <div class="read">
                                    <a href="blog-single.html" class="btn-arrow">Read more<img
                                            src="{{asset('theme/assets/images/icon/arrow-right.png')}}" alt="arrow"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="blog-item">
                            <div class="thumb">
                                <img src="{{asset('theme/assets/images/blog-3.png')}}" alt="blog">
                            </div>
                            <div class="content">
                                <a href="blog-single.html">
                                    <h5>Mobile Banking at a Glance</h5>
                                </a>
                                <div class="info">
                                    <div class="item cus-bor d-flex align-items-center">
                                        <span class="icon d-flex align-items-center justify-content-center "><img
                                                src="{{asset('theme/assets/images/icon/user.png')}}" alt="icon"></span>
                                        <span>Post By Albert Muhatia</span>
                                    </div>
                                    <div class="item d-flex align-items-center">
                                        <span class="icon d-flex align-items-center justify-content-center"><img
                                                src="{{asset('theme/assets/images/icon/calendar.png')}}" alt="icon"></span>
                                        <span>05 Feb 2022</span>
                                    </div>
                                </div>
                                <p>Morbi eget venenatis lorem, id viverra massa. Etiam congue efficitur velit vel
                                    pharetra.</p>
                                <div class="read">
                                    <a href="blog-single.html" class="btn-arrow">Read more<img
                                            src="{{asset('theme/assets/images/icon/arrow-right.png')}}" alt="arrow"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> --}}
    <!-- Our Latest Articles In end -->

    <!-- FAQs In start -->
    {{-- <section class="faqs-section">
        <div class="overlay pt-120 pb-120">
            <div class="container wow fadeInUp">
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-header text-center">
                            <h5 class="sub-title">If you have question,we have answer</h5>
                            <h2 class="title">Frequently asked questions</h2>
                            <p>Get answers to all questions you have and boost your knowledge so you can save, invest
                                and spend smarter. <a href="faqs.html">See all questions here!</a></p>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-xl-8">
                        <div class="faq-box wow fadeInUp">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            How do I locate the nearesty Agent?
                                        </button>
                                    </h5>
                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                        aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>To find the nearest FundEx SL agent, you can use our online Agent Locator tool on our official website. Simply visit our website and navigate to the 'Agent Locator' section. Enter your location or address details, and the tool will provide you with a list of the nearest FundEx SL agents along with their addresses and contact information. This ensures a convenient and efficient way for you to locate and connect with our agents for your payment needs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                            What do I do if an agent is not around my location?
                                        </button>
                                    </h5>
                                    <div id="collapseThree" class="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>If you cannot find a FundEx SL agent near your location, we recommend exploring alternative options for payment transactions. You can utilize our online platform for secure and convenient transactions, eliminating the need for a physical agent. Additionally, you may contact our customer support for guidance on alternative methods or to inquire about the possibility of expanding our agent network to better serve your area in the future. Our commitment is to provide accessible and reliable payment solutions, and we appreciate your feedback to improve our services.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                            aria-expanded="false" aria-controls="collapseFour">
                                            What is your customer service number?
                                        </button>
                                    </h5>
                                    <div id="collapseFour" class="accordion-collapse collapse"
                                        aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>
                                                For the most accurate and up-to-date customer service number, please visit our official website at <a href="">www.fundexsl.com</a> or refer to the contact information provided in your account documentation. Our customer support team is readily available to assist you with any inquiries or concerns you may have. Thank you for choosing FundEx SL!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="headingFive">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                            aria-expanded="false" aria-controls="collapseFive">
                                            How do I reset my password?
                                        </button>
                                    </h5>
                                    <div id="collapseFive" class="accordion-collapse collapse"
                                        aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>
                                                <p>To reset your password for FundEx SL, follow these steps:</p>

                                                <ol>
                                                    <li>Visit the official FundEx SL website at <a href="https://fundexls.com" target="_blank">fundexls.com</a>.</li>
                                                    <li>Look for the "Login" or "Sign In" option.</li>
                                                    <li>Click on the "Forgot Password" or "Reset Password" link.</li>
                                                    <li>Enter the email address associated with your FundEx SL account.</li>
                                                    <li>Check your email for a password reset link.</li>
                                                    <li>Click on the link provided in the email.</li>
                                                    <li>Follow the on-screen instructions to create a new password.</li>
                                                </ol>

                                                <p>If you encounter any issues during this process, please contact our customer support at <a href="mailto:support@fundexls.com">support@fundexls.com</a> or call us at <a href="tel:+254 (234) 567-89">+254 (234) 567-89</a> for further assistance.</p>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="headingsix">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapsesix"
                                            aria-expanded="false" aria-controls="collapsesix">
                                            What is required to use our services?
                                        </button>
                                    </h5>
                                    <div id="collapsesix" class="accordion-collapse collapse"
                                        aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>
                                                To use FundEx SL services, you'll need to provide identification and proof of transactions. Ensure your account is verified, and be ready to submit necessary documents for security and transaction verification purposes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="headingsaven">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapsesaven"
                                            aria-expanded="false" aria-controls="collapsesaven">
                                            Is our services secure?
                                        </button>
                                    </h5>
                                    <div id="collapsesaven" class="accordion-collapse collapse"
                                        aria-labelledby="headingsaven" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>Yes, ensuring the security of our services is a top priority at FundEx SL. We implement robust security measures, including encryption protocols, secure authentication processes, and regular monitoring to safeguard your financial transactions and personal information. Our commitment to data protection and compliance with industry standards aims to provide you with a secure and trustworthy experience while using our services.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> --}}
    <!-- FAQs In end -->

    <!-- Get Start In start -->
    <section class="get-start wow fadeInUp">
        <div class="overlay">
            <div class="container">
                <div class="col-12">
                    <div class="get-content">
                        <div class="section-text">
                            <h3 class="title">Ready to get started?</h3>
                            <p>It only takes a few minutes to get started With your FundEx SL account.</p>
                        </div>
                        <a href="#" class="cmn-btn">Our Locations</a>
                        <img src="{{asset('theme/assets/images/get-start.png')}}" alt="images">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Get Start In end -->

@endsection
