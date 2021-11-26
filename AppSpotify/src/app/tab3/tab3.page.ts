import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { albums } from '../services/albums';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private service: SharedService) {}

  listAlbums:any=[];
  albums:any=[];
  busqueda: string = "";

  refreshAlbums(){
    this.service.getAlbums()
    .snapshotChanges().subscribe(data => {
      this.listAlbums = [];
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listAlbums.push(x as albums)
        this.albums.push(x as albums)
      });
    });
  }

  search(){
    var filtro = this.busqueda;
    this.listAlbums = this.albums.filter(function (el){
      if(el.titulo.toString().toLowerCase().includes(
        filtro.toString().trim().toLowerCase()
      ) === true){
        return el.titulo.toString().toLowerCase().includes(
          filtro.toString().trim().toLowerCase()
        )
      }
      else{
        return el.autor.toString().toLowerCase().includes(
          filtro.toString().trim().toLowerCase()
        )
      }
    });
  }

  ngOnInit(){
    this.refreshAlbums();
  }

}
