<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Area;
use App\BomService;
use App\XmlParser;

class ForecastController extends Controller
{
    public function show($name) {
        $area = Area::where('name', $name)->get();
        if (count($area) == 0) {
            return abort(404);
        }
        $uri = $area[0]->xml;
        $bom = new BomService();
        $xml = $bom->getXML($uri);
        $forecast = new XmlParser($xml);
        return $forecast->$name;
    }
}
