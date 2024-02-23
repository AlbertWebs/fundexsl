<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function index()
    {
        return view('front.index');
    }

    public function about()
    {
        return view('front.about');
    }

    // method for terms
    public function terms()
    {
        return view('front.terms');
    }

    // method for privacy
    public function privacy()
    {
        return view('front.privacy');
    }
}
