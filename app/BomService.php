<?php 

namespace App;

use Illuminate\Support\Facades\Storage;

class BomService {

    public function getXML($target) {
        $forecasts = 'ftp://ftp.bom.gov.au/anon/gen/fwo/';
        $url = $forecasts . $target;
        $data = file_get_contents($url);
        return $data;
    }
}
