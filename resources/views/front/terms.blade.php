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
                            <h1>Terms Conditions</h1>
                            <div class="breadcrumb-area">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb d-flex align-items-center">
                                        <li class="breadcrumb-item"><a href="{{url('/')}}">Home</a></li>
                                        <li class="breadcrumb-item"><a href="javascript:void(0)">Legal</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Terms Conditions</li>
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
                        <h4>1. Acceptance of Terms</h4>
                        <p>By using the services provided by FundEx SL, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please refrain from using our services.</p>

                        <h4>2. Account Registration and Security</h4>
                        <p>2.1 You must provide accurate and current information during the registration process.</p>
                        <p>2.2 You are responsible for maintaining the confidentiality of your account information and password.</p>
                        <p>2.3 Notify FundEx SL immediately of any unauthorized use of your account or any breach of security.</p>

                        <h4>3. Service Usage</h4>
                        <p>3.1 FundEx SL offers financial transaction services, and users must adhere to all applicable laws and regulations.</p>
                        <p>3.2 Users are responsible for the legality of funds and transactions processed through FundEx SL.</p>

                        <h4>4. Privacy and Data Security</h4>
                        <p>4.1 FundEx SL is committed to protecting your privacy and personal information. Refer to our <a href="#privacy-policy">Privacy Policy</a> for details.</p>
                        <p>4.2 FundEx SL employs industry-standard security measures to protect user data and transactions.</p>

                        <h4>5. Fees and Charges</h4>
                        <p>5.1 Users are responsible for any fees associated with FundEx SL services. Refer to our fee schedule for detailed information.</p>

                        <h4>6. Termination of Services</h4>
                        <p>6.1 FundEx SL reserves the right to suspend or terminate services for any user violating these terms or engaging in fraudulent activities.</p>

                        <h4>7. Disclaimers and Limitation of Liability</h4>
                        <p>7.1 FundEx SL is not liable for any direct, indirect, incidental, or consequential damages resulting from the use of our services.</p>
                        <p>7.2 FundEx SL does not guarantee the continuous, uninterrupted, or secure access to our services.</p>

                        <h4>8. Governing Law</h4>
                        <p>These terms and conditions are governed by and construed in accordance with the laws of Kenya, and any disputes shall be subject to the exclusive jurisdiction of the courts in Kenya.</p>

                        <h4>9. Amendments</h4>
                        <p>FundEx SL reserves the right to amend these terms and conditions at any time. Users will be notified of changes, and continued use of the services implies acceptance of the modified terms.</p>

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
