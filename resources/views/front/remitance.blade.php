@extends('front.master')

@section('content')

 <!-- banner-section start -->
    <section class="banner-section inner-banner remittance">
        <div class="overlay">
            <div class="banner-content d-flex align-items-center">
                <div class="container">
                    <div class="row justify-content-start">
                        <div class="col-lg-7 col-md-10">
                            <div class="main-content">
                                <div class="section-text">
                                    <h5 class="sub-title">Simple. Transparent. Secure</h5>
                                    <h2 class="title">Send/Receive Remittance Back Home</h2>
                                    <p>
                                        Competitive rates, low fees, and the most reliable money transfer convenient way.
                                        <br>
                                        You can receive money from abroad directly.
                                    </p>
                                </div>
                                <div class="button-group d-flex align-items-center flex-wrap">
                                    <a href="javascript:void(0)"><img src="{{asset('theme/assets/images/google-play.png')}}" alt="image"></a>
                                    <a href="javascript:void(0)"><img src="{{asset('theme/assets/images/app-store.png')}}" alt="image"></a>
                                    <a href="javascript:void(0)"><img src="{{asset('theme/assets/images/app-store.png')}}" alt="image"></a>
                                    <a href="javascript:void(0)"><img src="{{asset('theme/assets/images/app-store.png')}}" alt="image"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {{-- <div class="bottom-box">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="form-content">
                            <div class="section-header text-center">
                                <h2 class="title">Send Money Anywhere</h2>
                                <p>Please fill the form below. We will get in touch with you within 1-2 business days, to request all necessary details</p>
                            </div>
                            <form action="#">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="single-input">
                                            <label for="send">You send</label>
                                            <div class="single d-flex align-items-center">
                                                <input type="text" id="send" placeholder="1000">
                                                <div class="d-flex align-items-center">
                                                    <img src="{{asset('theme/assets/images/united-states.png')}}" alt="image">
                                                    <select>
                                                        <option value="1">USD</option>
                                                        <option value="2">EUR</option>
                                                        <option value="3">INR</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="single-input">
                                            <label for="gets">Recipient Gets</label>
                                            <div class="single d-flex align-items-center">
                                                <input type="text" id="gets" placeholder="73,605.00">
                                                <div class="d-flex align-items-center">
                                                    <img src="{{asset('theme/assets/images/austria.png')}}" alt="image">
                                                    <select>
                                                        <option value="1">EUR</option>
                                                        <option value="2">UDS</option>
                                                        <option value="3">INR</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-bottom row align-items-center justify-content-between">
                                    <div class="col-xl-6 col-md-4">
                                        <p>Exchange Rate</p>
                                    </div>
                                    <div class="col-xl-6 col-md-8 d-sm-flex align-items-center justify-content-md-end justify-content-start">
                                        <p class="currency"><span>73.61</span> USD to EUR</p>
                                        <div class="btn-area text-center">
                                            <button class="cmn-btn">Transfer Funds</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> --}}
    </section>
    <!-- banner-section end -->

    <!-- Feature In start -->
    <section class="account-feature remittance">
        <div class="overlay pt-120 pb-120">
            <div class="container wow fadeInUp">
                <div class="row cus-mar">
                    <div class="col-lg-3 col-md-6">
                        <div class="single-box active">
                            <div class="icon-box">
                                <img src="{{asset('theme/assets/images/icon/remittance-1.png')}}" alt="icon">
                            </div>
                            <h5>Affordable</h5>
                            <p>Low fees on international money transfers – always</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="single-box active">
                            <div class="icon-box">
                                <img src="{{asset('theme/assets/images/icon/remittance-2.png')}}" alt="icon">
                            </div>
                            <h5>Simple</h5>
                            <p>We have an easy-to-use app and a team ready to help you</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="single-box active">
                            <div class="icon-box">
                                <img src="{{asset('theme/assets/images/icon/remittance-3.png')}}" alt="icon">
                            </div>
                            <h5>Quick</h5>
                            <p>Send money to your loved ones in minutes</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="single-box active">
                            <div class="icon-box">
                                <img src="{{asset('theme/assets/images/icon/remittance-4.png')}}" alt="icon">
                            </div>
                            <h5>Secure</h5>
                            <p>Our 4.8-star app store rating speaks for itself</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Feature In end -->

 <?php
    $Order = 1
 ?>

    @foreach ($Services as $Service)

           @if($Order % 2 == 0)

          <!-- Features In start -->
            <section class="features-section second" id="{{$Service->slung}}">
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
                                <br>
                                    <h5 class="sub-title">We Simplify Mobile Money Transactions</h5>
                                    <h2 class="title">{{$Service->title}}</h2>
                                    <p>
                                       {!!html_entity_decode($Service->meta)!!}
                                   </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Features In end -->

            @else

                <section class="features-section second  our-core-values" id="{{$Service->slung}}">
                    <div class="overlay pt-120 pb-120">
                        <div class="container wow fadeInUp">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="top-section">
                                    <br>
                                        <h5 class="sub-title">We Make Remittance transactions local and easy</h5>
                                        <h2 class="title">{{$Service->title}}</h2>
                                        <p>
                                           {!!html_entity_decode($Service->meta)!!}
                                        </p>

                                    </div>
                                </div>
                                <div class="col-lg-6 text-start cus-ord">
                                    <div class="img-area">
                                        <video style="border:10px solid #1A4DBE; min-height:500px; object-fit: cover;" width="100%" height="100%" controls>
                                            <source src="{{asset('theme/assets/images/pexels-tima-miroshnichenko-6266426.mp4')}}" type="video/mp4">

                                        Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            @endif
     <?php
       $Order == $Order++;
      ?>
     @endforeach

    <!-- App In start -->
    <section class="features-section app-download remittance">
        <div class="overlay pt-120 pb-120">
            <div class="container wow fadeInUp">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="img-area">
                            <img class="max-un" src="{{asset('theme/assets/images/right-choice-Illus.png')}}" alt="image">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="top-section">
                            <h5 class="sub-title">Learn why Bankio is the right choice for you</h5>
                            <h2 class="title">Send money from the comfort of home</h2>
                            <p>You can deposit money directly into someone’s bank account. This way, they don’t even have to leave their house either!</p>
                        </div>
                        <div class="button-group d-flex align-items-center flex-wrap">
                            <a href="javascript:void(0)"><img src="{{asset('theme/assets/images/google-play.png')}}" alt="image"></a>
                            <a href="javascript:void(0)"><img src="{{asset('theme/assets/images/app-store.png')}}" alt="image"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- App In end -->

    <!-- Security In start -->
    <section class="security-section remittance">
        <div class="overlay pt-120 pb-120">
            <div class="container wow fadeInUp">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="img-area">
                            <a href="javascript:void(0)"><img src="{{asset('theme/assets/images/security-left.png')}}" alt="image"></a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="section-area">
                            <h5 class="sub-title">Security is our top priority</h5>
                            <h2 class="title">You're safe with us</h2>
                            <p>Your business data is important to get financing. We keep your data safe with bank-level security and 256-bit encryption.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Security In end -->

  <!-- FAQs In start -->
    <section class="faqs-section">
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
    <!-- Get Start In end -->

@endsection
