import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from '@firebase/util';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly dbUrl: "https://spotifyapp-c1335-default-rtdb.firebaseio.com";

  constructor(private http: HttpClient, private firebase: AngularFireDatabase) { }

  response: AngularFireList<any>;

  getAlbums() {
    return this.firebase.list('albums');
  }

  getRecoms(){
    return this.firebase.list('recomendaciones');
  }

  getSongs(){
    return this.firebase.list('canciones');
  }
}
