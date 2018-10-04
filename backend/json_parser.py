import json
DATA_FILENAME = "places.json"

with open(DATA_FILENAME, 'r') as f:
    print json.dumps(f)
