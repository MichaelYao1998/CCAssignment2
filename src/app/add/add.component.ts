import { Component, OnInit } from '@angular/core';
import { BomService } from '../services/bom.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private bom: BomService) { }

  ngOnInit() {
    this.bom.test();
  }

}
