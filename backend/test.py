import unittest
from bom import BomServer

class TestBomServer(unittest.TestCase):
    def setUp(self):
        self.server = BomServer()

    def test_download(self):
        self.server.download('IDV10751.xml')

if __name__ == '__main__':
    unittest.main()
