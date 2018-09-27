import { HttpClientModule } from '@angular/common/http';

export class FtpClient {

  config = {
    host: 'ftp.bom.gov.au',
    user: 'anonymous'
  };

  public test(): void {
  }
}
