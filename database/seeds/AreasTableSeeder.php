<?php

use Illuminate\Database\Seeder;
use App\Area;
use App\BomService;
use App\XmlParser;

class AreasTableSeeder extends Seeder
{
    public $states = [
        "VIC" => "IDV10753.xml",
        "NSW" => "IDN11060.xml",
        "SA" => "IDS10044.xml",
        "QLD" => "IDQ11295.xml",
        "WA" => "IDW14199.xml",
        "NT" => "IDD10207.xml",
        "TAS" => "IDT16710.xml"
    ];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $bom = new BomService();
        foreach ($this->states as $state => $target) {
            $xml = $bom->getXML($target);
            $forecasts = new XmlParser($xml);
            foreach($forecasts->areas as $name) {
                print($name);
                Area::create([
                    'name' => $name,
                    'state' => $state,
                    'xml' => $target,
                ]);
            }
        }
    }
}
