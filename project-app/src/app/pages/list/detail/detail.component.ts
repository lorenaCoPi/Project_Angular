import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterAngularInterface } from '../../../models/character.model';
import { DetailService } from 'src/app/services/detail.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  characterDetail!: CharacterAngularInterface;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private DetailService: DetailService
  ) {}

  ngOnInit() {
    this.ActivatedRoute.params.subscribe((params) => {
      this.getDetail(params['id']);
    });
  }
  public getDetail(id: string) {
    this.DetailService.getApiDetail(id).subscribe((data: CharacterAngularInterface[]) => {
     this.characterDetail=data[0];
    });
  }
}
