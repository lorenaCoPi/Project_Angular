import { CharacterAngularInterface, CharacterApiResponseInterface } from './../../models/character.model';
import { Component } from '@angular/core';
import { ListService } from 'src/app/services/list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
characterList: CharacterAngularInterface[] = [];

constructor(
  private listService: ListService) {}

  ngOnInit() {
    this.getCharacters();
  }

  private getCharacters() {
    this.listService.getCharacters().subscribe((list: CharacterAngularInterface[]) => {
      this.characterList = list;
    })
  }
/*public getDetail(id: number) {
  this.listService.getApiDetail(id). subscribe(data => {
    console.log(data);
  });
}*/
}
