import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  @Output() sendInfo: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
