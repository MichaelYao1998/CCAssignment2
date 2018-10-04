from ftplib import FTP

BOM_URL = 'ftp.bom.gov.au'
BOM_WD = 'anon/gen/fwo'

#ftp.login()
#ftp.cwd('anon/gen/fwo/');
#gFile = open(target, 'wb')
#ftp.retrbinary('RETR ' + target, gFile.write)
#gFile.close()
#ftp.quit()

class BomServer:
    def download(self, target):
        # connect to the bureau of meteorology server
        conn = FTP(BOM_URL)
        # login as anonymous
        conn.login()
        # move to directory with forecasts
        conn.cwd(BOM_WD)
        storage = open('forecast.xml', 'wb')
        conn.retrbinary('RETR ' + target, storage.write)
        storage.close()
        conn.quit()

BomServer().download("IDV10753.xml")
