from ftplib import FTP
import xml.etree.ElementTree as ET

target = "IDV10751.xml"

ftp = FTP('ftp.bom.gov.au');
ftp.login()
ftp.cwd('anon/gen/fwo/');
gFile = open(target, 'wb')
ftp.retrbinary('RETR ' + target, gFile.write)
gFile.close()
ftp.quit()

