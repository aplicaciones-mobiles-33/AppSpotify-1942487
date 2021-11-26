import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { albums } from '../services/albums';
import { songs } from '../services/songs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private service: SharedService) {}

  listOptions: any=[];
  options: any=[];
  listSongs: any=[];
  songs: any=[];
  busqueda: string = "";
  visible: boolean = false;

  refreshSearch(){
    this.service.getRecoms()
    .snapshotChanges().subscribe(data => {
      this.listOptions = [];
      this.options = [];
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listOptions.push(x as albums);
        this.options.push(x as albums);
      });
    });
  }
  refreshSongs(){
    this.service.getSongs()
    .snapshotChanges().subscribe(data => {
      this.listSongs = [];
      this.songs = [];
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listSongs.push(x as songs);
        this.songs.push(x as songs);
      });
    });
  }

  search(){
    this.searchSong();
    var filtro = this.busqueda;
    if(filtro != ""){
      this.visible = true;
    }
    else{
      this.visible = false;
    }
    this.listOptions = this.options.filter(function (el){
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

  searchSong(){
    var filtro = this.busqueda;
    if(filtro != ""){
      this.visible = true;
    }
    else{
      this.visible = false;
    }
    this.listSongs = this.songs.filter(function (el){
      if(el.titulo.toString().toLowerCase().includes(
        filtro.toString().trim().toLowerCase()
      ) === true){
        return el.titulo.toString().toLowerCase().includes(
          filtro.toString().trim().toLowerCase()
        )
      }
      else if(el.autor.toString().toLowerCase().includes(
        filtro.toString().trim().toLowerCase()
      ) === true){
        return el.autor.toString().toLowerCase().includes(
          filtro.toString().trim().toLowerCase()
        )
      }
      else{
        return el.album.toString().toLowerCase().includes(
          filtro.toString().trim().toLowerCase()
        )
      }
    });
  }

  ngOnInit(){
    this.refreshSearch();
    this.refreshSongs();
  }

}
