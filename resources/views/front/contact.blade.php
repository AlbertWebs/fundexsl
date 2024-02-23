@extends('front.master')

@section('content')

    <!-- banner-section start -->
    <section class="banner-section inner-banner contact">
        <div class="overlay">
            <div class="banner-content d-flex align-items-center">
                <div class="container">
                    <div class="row justify-content-start">
                        <div class="col-lg-7 col-md-10">
                            <div class="main-content">
                                <h1>Contact Us</h1>
                                <div class="breadcrumb-area">
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb d-flex align-items-center">
                                            <li class="breadcrumb-item"><a href="{{url('/')}}">Home</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- banner-section end -->

    <!-- Apply for a loan In start -->
    <section class="apply-for-loan contact">
        <div class="overlay pt-120 pb-120">
            <div class="container wow fadeInUp">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="section-header text-center">
                            <h2 class="title">Get in touch with us.</h2>
                            <p>Fill up the form and our team will get back to you within 24 hours</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="form-content">
                            <form action="#">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="single-input">
                                            <label for="name">Name</label>
                                            <input type="text" id="name" placeholder="What's your name?">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="single-input">
                                            <label for="email">Email</label>
                                            <input type="text" id="email" placeholder="What's your email?">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="single-input">
                                            <label for="phone">Phone</label>
                                            <input type="text" id="phone" placeholder="(123) 480 - 3540">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="single-input">
                                            <label for="loan">Service interested in</label>
                                            <input type="text" id="loan" placeholder="Ex. Remitance, Microfinance">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="single-input">
                                            <label for="message">Message</label>
                                            <textarea id="message" placeholder="I would like to get in touch with you..." cols="30" rows="10"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-area text-center">
                                    <button class="cmn-btn">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Apply for a loan In end -->

    <!-- Need more help In start -->
    <section class="account-feature loan-feature need-more-help">
        <div class="overlay pt-120 pb-120">
            <div class="container wow fadeInUp">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="section-header text-center">
                            <h5 class="sub-title">You can reach out to us for all your</h5>
                            <h2 class="title">Need More Help?</h2>
                            <p>Queries, complaints and feedback. We will be happy to serve you</p>
                        </div>
                    </div>
                </div>
                <div class="row cus-mar">
                    <div class="col-md-4">
                        <div class="single-box">
                            <div class="icon-box">
                                <img src="{{asset('theme/assets/images/icon/need-help-1.png')}}" alt="icon">
                            </div>
                            <h5>Sales</h5>
                            <p><a href="#" class="__cf_email__">sales@fundexsl.com</a></p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-box">
                            <div class="icon-box">
                                <img src="{{asset('theme/assets/images/icon/need-help-2.png')}}" alt="icon">
                            </div>
                            <h5>Help & Support</h5>
                            <p><a href="#" class="__cf_email__">support@fundexsl.com</a></p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-box">
                            <div class="icon-box">
                                <img src="{{asset('theme/assets/images/icon/need-help-3.png')}}" alt="icon">
                            </div>
                            <h5>Media & Press</h5>
                            <p><a href="#" class="__cf_email__">press@fundexsl.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Need more help In end -->

   <!-- FAQs In start -->
    <section class="faqs-section account">
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
    </section>
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

@endsection
