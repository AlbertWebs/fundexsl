@extends('front.master')

@section('content')


    <!-- banner-section start -->
    <section class="banner-section inner-banner personal-loan">
        <div class="overlay">
            <div class="banner-content d-flex align-items-center">
                <div class="container">
                    <div class="row justify-content-start">
                        <div class="col-lg-7 col-md-10">
                            <div class="main-content">
                                <h4>{{$Category->title}}</h4>
                                <div class="breadcrumb-area">
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb d-flex align-items-center">
                                            <li class="breadcrumb-item"><a href="{{url('/')}}">Home</a></li>
                                            <li class="breadcrumb-item"><a href="#">Business</a></li>
                                            <li class="breadcrumb-item"><a href="javascript:void(0)">Micro Finance</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">{{$Category->title}}</li>
                                        </ol>
                                    </nav>
                                </div>
                                <br><br>
                                {{--  --}}
                                <div class="btn-area">
                                    @foreach ($Services as $Service)
                                    <a href="#{{$Service->slung}}" class="cmn-btn">{{$Service->title}}</a>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- banner-section end -->

    @foreach ($Services as $Service)
        <!-- About Personal loan In start -->
        <section class="features-section about-business-loan about-educations-loan" id="{{$Service->slung}}">
            <div class="overlay pt-120 pb-120">
                <div class="container wow fadeInUp">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="top-section">
                                <div class="section-text">
                                    <h5 class="sub-title">Meet your financial needs</h5>
                                    <h2 class="title">Borrow better</h2>
                                    <p>
                                        Individual Corporate Loan: This loan targets working-class individuals who have run out of cash to sort out some urgent needs.
                                        FundEx (SL) Ltd will give you 50% equivalent of your monthly salary and then you repay at the end of the month in which the loan was taken.
                                    </p>
                                    <ul class="list">
                                        <li class="list-item d-flex align-items-center">
                                            <span class="check d-flex align-items-center justify-content-center">
                                                <img src="{{asset('theme/assets/images/icon/check.png')}}" alt="icon">
                                            </span>
                                            <span>100% Safe & Secure</span>
                                        </li>
                                        <li class="list-item d-flex align-items-center ">
                                            <span class="check d-flex align-items-center justify-content-center">
                                                <img src="{{asset('theme/assets/images/icon/check.png')}}" alt="icon">
                                            </span>
                                            <span>Minimum Delays in Process</span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-6 text-end">
                            <div class="img-area">
                                <img src="{{url('/')}}/uploads/microfinance/{{$Service->image}}" alt="image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- About Personal loan In end -->


        {{-- Lets Have it here --}}
 <!-- Credit History loan In start -->
 <section class="features-section credit-history">
    <div class="overlay pb-120">
        <div class="container wow fadeInUp latest-articles pt-120" style="padding:50px">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="img-area">
                        <img src="{{asset('theme/assets/images/credit-history-left.png')}}" alt="image">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="top-section">
                        <div class="section-text">
                            <h5 class="sub-title">Benefits & Eligiblity</h5>

                            <p>
                                {!!html_entity_decode($Service->content)!!}
                            </p>

                        </div>
                        <div class="btn-area">
                            <a href="#Apply-{{$Service->slung}}" class="cmn-btn">Apply for a {{$Service->title}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Credit History In end -->
        {{-- Lets Have it er --}}

        <!-- Apply for a loan In start -->
        <section class="apply-for-loan business-loan" id="personal-loan-form">
            <div class="overlay pt-120 pb-120" id="Apply-{{$Service->slung}}">
                <div class="container wow fadeInUp">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="section-header text-center">
                                <h5 class="sub-title">Quick & easy {{$Service->title}}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <div class="form-content">
                                <div class="section-header text-center">
                                    <h2 class="title">Apply for a loan</h2>
                                    <p>Please fill the form below. We will get in touch with you within 1-2 business days, to request all necessary details</p>
                                </div>
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
                                        <div class="col-12">
                                            <div class="single-input">
                                                <label for="phone">Telephone Number</label>
                                                <input type="text" id="phone" placeholder="(123) 480 - 3540">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="single-input">
                                                <label for="phone">Current Address:</label>
                                                <input type="text" id="phone" placeholder="3573 Riverside Towers">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="single-input">
                                                <label for="state">District you’re Residing:</label>
                                                <input type="text" id="state" placeholder="California">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-6">
                                            <div class="single-input">
                                                <label for="amount">Loan amount</label>
                                                <input type="text" id="amount" placeholder="Ex. $8,000 USD">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="single-input">
                                                <label for="term">Institution you work:
                                                </label>
                                                <input type="text" id="term" placeholder="Ex Africa Science Limited">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn-area text-center">
                                        <button class="cmn-btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Apply for a loan In end -->
        <hr>
    @endforeach

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
