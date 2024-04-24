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

    public function requestLoan(Request $request){
        if(isset($request->tel)){
            return view('thankYou');
        }else{
            $curl = curl_init();

            $post_data=array(
                'client_name'=>$request->client_name,
                'loan_type'=>$request->loan_type,
                'client_email'=>$request->client_email,
                'client_phone'=>$request->client_phone,
                'client_address'=>$request->client_address,
                'client_location'=>$request->client_location,
                'loan_amount'=>(float)$request->loan_amount,
                'customer_institution'=>$request->customer_institution
            );


            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://api.app.fundexsl.com/api/v1/loans/request',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => json_encode($post_data),
                CURLOPT_HTTPHEADER => array(
                    'Content-Type: application/json'
                ),
            ));

            $response = curl_exec($curl);

            curl_close($curl);
            // echo $response;

            return view('thankYou');
        }


    }
}

