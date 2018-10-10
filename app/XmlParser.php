<?php

namespace App;

class XmlParser {
    private $elem;
    public $areas;
    public $forecasts;


    public function __construct($xml) {
        $xml = str_replace("forecast-period", "timeseries", $xml);
        $this->elem = simplexml_load_string($xml) or die("error: Cannot create object");
        $this->parse();
    }

    private function parse() {
        $forecasts = array();

        foreach($this->elem->forecast->area as $area) {
            $areaName = (string) $area['description'];
            $forecasts[$areaName] = array();

            foreach($area->timeseries as $day) {
                $forecast = array();
                foreach($day->element as $info) {
                    $type = (string) $info['type'];
                    $desc = (string) $info;
                    $forecast[$type] = $desc;
                }
                foreach($day->text as $info) {
                    $type = (string) $info['type'];
                    $desc = (string) $info;
                    $forecast[$type] = $desc;
                }
                array_push($forecasts[$areaName], $forecast);
            }
        }
        $forecasts = array_filter($forecasts, function($var) {
            return !empty($var);
        });
        $this->areas = array_keys($forecasts);
        $this->forecasts = $forecasts;
    }

    public function __get($index) {
        if (array_key_exists($index, $this->forecasts)) {
            return $this->forecasts[$index];
        } else {
            die('Unknown location');
        }
    }
}
