<?php 

namespace App;

use Illuminate\Support\Facades\Storage;

class BomService {

    private $server;

    public function __construct() {
        $this->server = Storage::createFtpDriver([
          'host' => 'ftp.bom.gov.au',
          'username' => 'anonymous',
          'password' => 'guest',
          'port' => 21,
          'timeout' => '10',
        ]);
    }

    
    public function getXML($target) {
        $forecasts = 'anon/gen/fwo/';
        $url = $forecasts . $target;
        $data = $this->server->get($url);
        return $data;
    }
}
