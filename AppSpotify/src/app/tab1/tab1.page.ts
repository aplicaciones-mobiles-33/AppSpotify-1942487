import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { albums } from '../services/albums';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private service: SharedService) {}

  listAlbums:any=[];
  listRecoms:any=[];

  refreshAlbums(){
    this.service.getAlbums()
    .snapshotChanges().subscribe(data => {
      this.listAlbums = [];
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listAlbums.push(x as albums)
      });
    });
  }

  refreshRecoms(){
    this.service.getRecoms()
    .snapshotChanges().subscribe(data => {
      this.listRecoms = [];
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listRecoms.push(x as albums)
      });
    });
  }

  ngOnInit(){
    this.refreshAlbums();
    this.refreshRecoms();
  }
}
