<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Item;

class AddItemController extends Controller
{
    public function execute(Request $request)
    {   
      if ($request->isMethod('post')) {
        $inputText = $request;
        if($request['item'] != ""){
          $inputText = $request;
          $item = new Item();           
          $item->fill(['item' => $inputText['item']]); 
                  
          if($item->save()){
            echo true;
          }          
        }                 
      }            
    }    
}
