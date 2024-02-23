@extends('front.master')

@section('content')
    <!-- banner-section start -->
    <section class="banner-section inner-banner about">
        <div class="overlay">
            <div class="banner-content d-flex align-items-center">
                <div class="container">
                    <div class="row justify-content-start">
                        <div class="col-lg-7 col-md-10">
                            <div class="main-content">
                                <h1>About</h1>
                                <div class="breadcrumb-area">
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb d-flex align-items-center">
                                            <li class="breadcrumb-item"><a href="{{url('/')}}">Home</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">About Us</li>
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

    <!-- About Us In start -->
    <section class="about-section">
        <div class="overlay pt-120 pb-120">
            <div class="container wow fadeInUp">
                <div class="row align-items-center">
                    <div class="col-lg-10" style="margin:0 auto">
                        <div class="text-area">
                            <h5 class="sub-title">About Us</h5>
                            <h3 class="title">Your ally in achieving ambition beyond borders</h3>
                            <p>
                                Our story began with a vision: to move cash to anywhere.
                                This means, we democratize access to financial services commerce for businesses of any size in any location in Sierra Leone.
                                We’ve powered the growth of thousands of small and medium businesses and built a financial platform that connects communities to the world through our remittance services, mobile money transactions and micro-finance loans.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Us In end -->

      <!-- Features In start -->
    <section class="features-section second  our-core-values">
        <div class="overlay pt-120 pb-120">
            <div class="container wow fadeInUp">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="top-section">
                           <br>
                            <h5 class="sub-title">We Make Remittance transactions local and easy</h5>
                            <h2 class="title">How it Works</h2>
                            <p>
                                FundEx SL LTD brings remittance to your doorsteps from your loved ones abroad and across the globe.
                                <br><br>
                                With our dedicated teams and Agents across the country, we make you see opportunities, not obstacles.
                                <br><br>
                                With FundEx (SL) Ltd., we can even deliver your remittance payment right at your doorstep without you going to our offices or Agents- because we want to put smiles on your face at all times

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
                        <br>
                            <h5 class="sub-title">We Simplify Mobile Money Transactions</h5>
                            <h2 class="title">The Process</h2>
                            <p>
                                As you can imagine, it’s been quite a journey to provide a financial level field. With FundEx (SL) Ltd., as a national partner for Orange Sierra Leone, we’re levelling the playing field, so that individuals and businesses of all sizes can move cash securely, conveniently, and at low cost all around the country.
                                <br><br>
                                So, here are some of the stats, milestones, and highlights, plus more about who we are and what we stand for.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Features In end -->

    <!-- Counter In start -->
    <section class="counter-educations">
        <div class="overlay">
            <div class="container wow fadeInUp">
                <div class="row d-flex align-items-end justify-content-center">
                    <div class="col-lg-5">
                        <div class="img-area">
                            <img src="{{asset('theme/assets/images/counter-Illus.png')}}" class="max-un" alt="image">
                        </div>
                    </div>
                    <div class="col-lg-7 pt-120 pb-120">
                        <div class="section-text">
                            <h3 class="title">We believe you are more than a number.</h3>
                            <p>
                                When you’re trusting a company to move your money around, the stats should feel tried, tested, and reassuringly big.
                                FundEx (SL) Ltd., has a track record in doing what it’s good at.<br><br>
                                The company is legally registered with Financial Intelligent Unit and the Central Bank of Sierra Leone and trusted by the biggest brands in FinTech, banking, and business.
                            </p>
                        </div>
                        <div class="counter-area mb-60 d-flex align-items-center justify-content-between">
                            <div class="single">
                                <h3><span class="counter">1000</span>+</h3>
                                <p>Customers and Counting</p>
                            </div>
                            <div class="single">
                                <h3><span class="counter">500</span>+</h3>
                                <p>Employees & Agents</p>
                            </div>
                            <div class="single">
                                <h3 class="counter">16</h3>
                                <p>In presence of all districts</p>
                            </div>
                        </div>
                        <div class="btn-area">
                            <a href="#" class="cmn-btn">Our Locations</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Counter In end -->

    <!-- Features In start -->
    <section class="features-section second">
        <div class="overlay pt-120 pb-120">
            <div class="container wow fadeInUp">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="top-section">
                            <br>
                            <h5 class="sub-title">We Flow with More Go on MICRO FINANCING</h5>
                            <h2 class="title">How it Works</h2>
                            <p>
                                We make trade flow faster and easier for everyone, everywhere. We serve markets that others don’t. We solve problems that others cannot by tackling them head-on, always innovating and simplifying complexity.

                                We finance businesses of the ‘most’ impoverished groups and communities to ensure total financial inclusion.
                                <br><br>
                                On the way, we’re meeting the needs of thousands of  individuals and businesses who, like us, aren’t stuck with the slow status quo. We’re out there imagining, engineering, and unlocking a universe of opportunities – and opening it to you.

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
    <!-- Features In end -->

    <!-- Our core values In start -->
    <section class="our-core-values">
        <div class="overlay pt-120 pb-120">
            <div class="container wow fadeInUp">
                <div class="row justify-content-center">
                    <div class="col-lg-9">
                        <div class="section-header text-center">
                            <h5 class="sub-title">Our core values</h5>
                            <h2 class="title">Our values help us set the bar for quality service Delivery.</h2>
                            <p>
                                We’re not going to tell you that we’re different. Everyone says that. Instead, here are the six behaviors we ask everyone at FundEx (SL) Ltd. to follow.
                                They sum us up pretty neatly.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row cus-mar">
                    <div class="col-xl-4 col-md-4">
                        <div class="single-box">
                            <div class="icon">
                                <img src="{{asset('theme/assets/images/icon/core-values-3.png')}}" alt="icon">
                            </div>
                            <div class="text-area">
                                <h5>EXCELLENCE</h5>
                                <p>
                                    Getting 10 out of 10 for the service and solutions we provide isn’t good enough. There are always new ways we can do more for our customers
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4">
                        <div class="single-box">
                            <div class="icon">
                                <img src="{{asset('theme/assets/images/icon/core-values-3.png')}}" alt="icon">
                            </div>
                            <div class="text-area">
                                <h5>TRANSPARANCY</h5>
                                <p>
                                    No secrets, no hidden agendas, no tricks. We believe in honest open communications, internally and with our customers and other external stakeholders
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4">
                        <div class="single-box">
                            <div class="icon">
                                <img src="{{asset('theme/assets/images/icon/core-values-3.png')}}" alt="icon">
                            </div>
                            <div class="text-area">
                                <h5>HUMILITY</h5>
                                <p>
                                    We believe in what we’re doing. We know we offer a great service (because our customers tell us) but we’ll never let it go to our heads.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-4">
                        <div class="single-box">
                            <div class="icon">
                                <img src="{{asset('theme/assets/images/icon/core-values-3.png')}}" alt="icon">
                            </div>
                            <div class="text-area">
                                <h5>PASSION</h5>
                                <p>
                                    Not only do we believe in what we’re doing, we love it. Making a positive impactin the lives of our customers is what gets us out of bed in the morning
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-4">
                        <div class="single-box">
                            <div class="icon">
                                <img src="{{asset('theme/assets/images/icon/core-values-3.png')}}" alt="icon">
                            </div>
                            <div class="text-area">
                                <h5>INCLUSION</h5>
                                <p>
                                    Everyone deserves an equal opportunity to succeed, and everyone has a right to be heard. With diversity in our ranks, our world is a richer, happier place
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-md-4">
                        <div class="single-box">
                            <div class="icon">
                                <img src="{{asset('theme/assets/images/icon/core-values-3.png')}}" alt="icon">
                            </div>
                            <div class="text-area">
                                <h5>ACTION</h5>
                                <p>
                                    Life’s not a spectacular sport; you need to get involved. At FundEx (SL) Ltd., we’re always ready to roll up our sleeves and find new ways to offer a better service.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- Our core values In end -->




    <!-- Our Amazing Team In start -->
    <section class="our-team" id="team">
        <div class="overlay pt-120 pb-120">
            <div class="container wow fadeInUp">
                <div class="row justify-content-center">
                    <div class="col-xl-9 col-lg-10">
                        <div class="section-header text-center">
                            <h5 class="sub-title">The Amazing Team Behind Our Company</h5>
                            <h2 class="title">The right skills wielded by the right people to make anything possible.
                            </h2>
                            <p>
                                The FundEx (SL) Ltd., community is growing every day – we welcome hundreds of new customers every month. Along with thousands of customers and our 500+ employees and agents, thousands of people have a FundEx (SL) Ltd. tale to tell. Take a look and you’ll see how FundEx (SL) Ltd could work for you and maybe how you could work with us in one of our district offices.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    {{-- <div class="col-xxl-7 col-lg-9 col-md-12">
                        <ul class="nav nav-tabs mb-60" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="board-tab" data-bs-toggle="tab"
                                    data-bs-target="#board" type="button" role="tab" aria-controls="board"
                                    aria-selected="true">Board</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="leaders-tab" data-bs-toggle="tab" data-bs-target="#leaders"
                                    type="button" role="tab" aria-controls="leaders"
                                    aria-selected="false">Leaders</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="designers-tab" data-bs-toggle="tab" data-bs-target="#designers"
                                    type="button" role="tab" aria-controls="designers"
                                    aria-selected="false">Finance</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="developers-tab" data-bs-toggle="tab" data-bs-target="#developers"
                                    type="button" role="tab" aria-controls="developers"
                                    aria-selected="false">Administration</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="hr-tab" data-bs-toggle="tab" data-bs-target="#hr"
                                    type="button" role="tab" aria-controls="hr"
                                    aria-selected="false">PR</button>
                            </li>
                        </ul>
                    </div> --}}
                    <div class="col-lg-12">
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="board" role="tabpanel" aria-labelledby="board-tab">
                                <div class="row">
                                    <div class="col-md-3 col-sm-6">
                                        <div class="single-box">

                                            <div class="test-area">
                                                <h5>Leo Probyns</h5>
                                                <p>CEO & MD</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="single-box">

                                            <div class="test-area">
                                                <h5>Philip Vanjah</h5>
                                                <p>Business Manager- Remittance <br>(Western Region)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="single-box">

                                            <div class="test-area">
                                                <h5>Abdulai Bestman Kamara</h5>
                                                <p>Business Manager- Remittance <br>(Southern Region)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="single-box">

                                            <div class="test-area">
                                                <h5>Ibrahim Abdulai Koroma</h5>
                                                <p>Regional Supervisor<br> (Eastern Region)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-sm-6">
                                        <div class="single-box">

                                            <div class="test-area">
                                                <h5>Issa Kommeh Mohamed</h5>
                                                <p>Business Manager - Micro-Finance</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="single-box">

                                            <div class="test-area">
                                                <h5>Allieu Muthaiga Jalloh</h5>
                                                <p>Operations Manager- Mobile Money Transactions</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="single-box">

                                            <div class="test-area">
                                                <h5>Messie Massaquoi</h5>
                                                <p>Relationship Officer <br>(Southern Region)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="single-box">

                                            <div class="test-area">
                                                <h5>Paul Jimmy</h5>
                                                <p>Relationship Supervisor<br> (Western Region)</p>
                                            </div>
                                        </div>
                                    </div>
                                    {{--  --}}
                                    {{--  --}}
                                    <div class="col-md-3 col-sm-6">
                                        <div class="single-box">

                                            <div class="test-area">
                                                <h5>Nelson Saidu Koroma</h5>
                                                <p>Relationship Supervisor (Kono)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="single-box">

                                            <div class="test-area">
                                                <h5>Peter Vanjah</h5>
                                                <p>Relationship Supervisor <br>(Western Region)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="single-box">

                                            <div class="test-area">
                                                <h5>Mohamed Konia Gbabai</h5>
                                                <p> Relationship Officer <br>(Western Region)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="single-box">

                                            <div class="test-area">
                                                <h5>Elizabeth Saba Kamara</h5>
                                                <p>Customer Service Officer<br> (Western Region)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-sm-6">
                                        <div class="single-box">

                                            <div class="test-area">
                                                <h5>Zainab Kamara</h5>
                                                <p>Customer Service Officer<br> (Western Region)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="single-box">

                                            <div class="test-area">
                                                <h5>Lauretta Yemi</h5>
                                                <p>Customer Service Officer<br> (Southern Region)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="single-box">

                                            <div class="test-area">
                                                <h5>Iyeshiatu Seray Barrie</h5>
                                                <p>Customer Service Officer (Northern Region)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="single-box">

                                            <div class="test-area">
                                                <h5>Iris Harolda Jones</h5>
                                                <p>Main Administrative Officer - Main Office</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-sm-6">
                                        <div class="single-box">
                                            <div class="test-area">
                                                <h5>Abdulai Lansana</h5>
                                                <p>Administrative Assistant - Main Office </p>
                                            </div>
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
    <!-- Our Amazing Team In end -->

    <!-- Current Positions In start -->
    <section class="current-positions" id="career">
        <div class="overlay pt-120 pb-120">
            <div class="container wow fadeInUp">
                <div class="row justify-content-center">
                    <div class="col-xl-9 col-lg-10">
                        <div class="section-header text-center">
                            <h5 class="sub-title">Current Positions</h5>
                            <h2 class="title">Unlock Your Career at FundEx (SL) LTD</h2>
                            <p>Grow with us and take your professional life to the next level.</p>
                        </div>
                    </div>
                </div>
                <div class="row mb-60">
                    <div class="col-lg-6 col-md-6">
                        <div class="single-item">
                            <p class="mdr">Management</p>
                            <h5>Office Manager</h5>
                            <p>Proin sed eros ac libero auctor egestas. Duis maximus imperdiet ultricies. Donec finibus diam risus</p>
                            <a href="career-single.html" class="cmn-btn">Apply Now</a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="single-item">
                            <p class="mdr">IT</p>
                            <h5>Assistant information Technologist</h5>
                            <p>Proin sed eros ac libero auctor egestas. Duis maximus imperdiet ultricies. Donec finibus diam risus</p>
                            <a href="career-single.html" class="cmn-btn">Apply Now</a>
                        </div>
                    </div>
                </div>
                <br><br>
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="bottom-item">
                            <h3 class="title">Can´t find the perfect position?</h3>
                            <p>Send us an email anyways! We will save your resume for next time a relevant position opens.We're always looking for talent</p>
                            <a href="contact.html" class="cmn-btn">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Current Positions In end -->

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
