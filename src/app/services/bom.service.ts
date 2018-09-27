import { Injectable } from '@angular/core';
import { FtpClient } from '../ftp-client/ftp-client';

@Injectable({
  providedIn: 'root'
})
export class BomService {

  constructor(private ftp: FtpClient) { }

  public test(): void {
    this.ftp.test();
  }
}
