<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Item;

class IndexController extends Controller
{
    //
    public function execute(Request $request){
    	$items = Item::all();               
    	echo $items;
    }
}
