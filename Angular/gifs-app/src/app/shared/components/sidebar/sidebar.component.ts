import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  standalone: false,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor( private gifsService: GifsService){}

  get tags(){
    return this.gifsService.tagsHistory;
  }

  searchTagSidebar(tag: string){
    this.gifsService.searchTag(tag);
  }

}
