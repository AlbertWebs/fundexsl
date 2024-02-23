@extends('front.master')

@section('content')
 <!-- banner-section start -->
 <section class="banner-section inner-banner terms">
    <div class="overlay">
        <div class="banner-content d-flex align-items-center">
            <div class="container">
                <div class="row justify-content-start">
                    <div class="col-lg-7 col-md-10">
                        <div class="main-content">
                            <h1>Privacy Policy</h1>
                            <div class="breadcrumb-area">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb d-flex align-items-center">
                                        <li class="breadcrumb-item"><a href="{{url('/')}}">Home</a></li>
                                        <li class="breadcrumb-item"><a href="javascript:void(0)">Legal</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Privacy Policy</li>
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

<!-- Terms Conditions In start -->
<section class="privacy-content terms">
    <div class="overlay pt-120 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="top-wrapper">
                        {{--  --}}
                        <p>Effective Date: 23rd Feb 2024</p>

                            <p>This Privacy Policy describes how FundEx SL ("we," "us," or "our") collects, uses, and shares your information when you use our services. By accessing or using our services, you consent to the practices outlined in this policy.</p>

                            <h5>Information We Collect</h5>
                            <p>We collect personal and non-personal information to provide and improve our services. Personal information may include but is not limited to your name, contact details, and transaction history.</p>

                            <h5>How We Use Your Information</h5>
                            <p>We use your information for various purposes, including processing transactions, providing customer support, and improving our services. We may also use your information to send updates, promotional materials, and important notices.</p>

                            <h5>Information Sharing</h5>
                            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with service providers to perform tasks on our behalf, but they are obligated not to disclose or use it for any other purpose.</p>

                            <h5>Security</h5>
                            <p>We implement security measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

                            <h5>Third-Party Links</h5>
                            <p>Our services may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. Please review the privacy policies of third parties before providing any personal information.</p>

                            <h5>Your Choices</h5>
                            <p>You have the right to access, correct, or delete your personal information. You may opt-out of receiving promotional communications. Please contact us at <a href="mailto:info@fundexsl.com">info@fundexsl.com</a> for any privacy-related requests.</p>

                            <h5>Changes to This Privacy Policy</h5>
                            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. It is your responsibility to review this Privacy Policy periodically.</p>

                            <h5>Contact Us</h5>
                            <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:info@fundexsl.com">info@fundexsl.com</a>.</p>

                            <p>This Privacy Policy was last updated on 23rd Feb 2024.</p>
                        {{--  --}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Terms Conditions In end -->

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
