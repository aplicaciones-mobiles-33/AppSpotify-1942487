import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { albums } from '../services/albums';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {

  constructor(private service: SharedService, private album: AlbumService, private router: Router) { }

  listAlbums: any=[];
  albums: any=[];
  titulo:any;

  back(){
    this.router.navigateByUrl('/tabs/tab1');
  }

  getInfo(){
    this.album.sendInfo.subscribe(data=>{
      this.listAlbums = [];
      this.listAlbums.push(data.data);
      console.log(this.listAlbums);
  });
  }

  ngOnInit(){
    this.getInfo();
  }

}
