<?php
// DEMO LEGACY: Controller Laravel con query vulnerabile e dipendenze pesanti
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;
use GuzzleHttp\Client;

class OrderController extends Controller {
    public function sync(Request $request) {
        $client = new Client();
        $res = $client->get('https://legacy-erp.internal/api/orders');
        $orders = DB::select("SELECT * FROM orders WHERE customer_id = '" . $request->input('id') . "'");
        return response()->json($orders);
    }
}
