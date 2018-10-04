import xml.etree.ElementTree as ET
import json

TARGET = "forecast.xml"
TARGET_TYPE = "metropolitan"
TARGET_STATE = "VIC"
DATA_FILENAME = "places.json"
locations = list()

tree = ET.parse(TARGET);
root = tree.getroot()
for area in root.iter('area'):
    if area.attrib['type'] == TARGET_TYPE:
        locations.append(dict({"name": area.attrib['description'], "type": TARGET_TYPE}))
#    for forecast in area.findall('forecast-period'):
#        temp = forecast
#print json.dumps(locations, sort_keys=True, indent=4, separators=(',', ': '))

with open(DATA_FILENAME, 'a') as jf:
#    entry = json.dumps(locations, sort_keys=True, indent=4, separators=(',', ': '))
    entry = locations
    jf.write(json.dumps(entry))
    jf.close()
