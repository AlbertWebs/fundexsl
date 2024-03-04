<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\Category;

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

    // Create Method for contact
    public function contact()
    {
        return view('front.contact');
    }

    public function application()
    {
        return view('front.application');
    }



    public function business($slung){
        $Category = Category::where('slung',$slung)->first();
        if($Category->title == "Remittance"){
            $Services = Service::where('category_id',$Category->id)->get();
            return view('front.remitance', compact('Category','Services'));
        }
        elseif($Category->title == "Mobile Money Transaction")
        {
            $Services = Service::where('category_id',$Category->id)->get();
            return view('front.mobile',compact('Category','Services'));
        }
        else
        {
            $Services = Service::where('category_id',$Category->id)->get();
            return view('front.micro',compact('Category','Services'));
        }
    }
}
