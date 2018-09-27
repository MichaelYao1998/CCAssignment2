import xml.etree.ElementTree as ET
target = "IDV10751.xml"

tree = ET.parse(target);
root = tree.getroot()
for area in root.iter('area'):
    print area.attrib
    for forecast in area.findall('forecast-period'):
        temp = forecast
        
