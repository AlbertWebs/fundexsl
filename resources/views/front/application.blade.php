@extends('front.master')

@section('content')
    <!-- Register In start -->
    <section class="sign-in-up register">
        <div class="overlay pt-120 pb-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="form-content">
                            <div class="section-header">
                                <h5 class="sub-title">Make the first step to an amaizing career</h5>
                                <h2 class="title">Let’s Get Started!</h2>
                                <p>Please Enter your Email Address to Start your Online Application</p>
                            </div>
                            <form action="#">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="single-input">
                                            <label for="fname">First Name</label>
                                            <input type="text" id="name" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="single-input">
                                            <label for="lname">Last Name</label>
                                            <input type="text" id="lname" placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="single-input">
                                            <label for="email">Enter Your Email ID</label>
                                            <input type="email" id="email" placeholder="Your email ID here">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="single-input">
                                            <label for="email">Phone Number</label>
                                            <input type="text" id="mobile" placeholder="Your Phone Number">
                                        </div>
                                    </div>
                                    {{--  --}}
                                    <div class="col-6">
                                        <div class="single-input">
                                            <label for="email">Cover Letter</label>
                                            <input type="file" id="email" placeholder="Your email ID here">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="single-input">
                                            <label for="email">CV</label>
                                            <input type="file" id="mobile" placeholder="Your Phone Number">
                                        </div>
                                    </div>
                                    {{--  --}}
                                    {{-- <div class="col-12">
                                        <div class="single-input">
                                            <label for="referral">Someone invited you over?</label>
                                            <input type="text" id="referral" placeholder="Enter the referral code">
                                        </div>
                                    </div> --}}
                                    <div class="col-12">

                                    </div>
                                    <div class="col-12">
                                        <div class="single-input">
                                            <p><input style="height:15px; width:15px;" type="checkbox"> By clicking submit, you agree to
                                                <a href="{{url('/terms-and-conditions')}}">
                                                    <span>
                                                        Fundex SL's Terms of Use, Privacy Policy, E-sign
                                                        &
                                                        communication Authorization.
                                                    </span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-area">
                                    <button class="cmn-btn">Submit Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Register In end -->



@endsection
