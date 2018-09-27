import { FtpClientModule } from './ftp-client.module';

describe('FtpClientModule', () => {
  let ftpClientModule: FtpClientModule;

  beforeEach(() => {
    ftpClientModule = new FtpClientModule();
  });

  it('should create an instance', () => {
    expect(ftpClientModule).toBeTruthy();
  });
});
