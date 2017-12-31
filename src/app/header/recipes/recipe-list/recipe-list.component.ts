import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpv0dV0zpUZjObC6efYmeA6IIPrYCKJ40kznvtpSNDZF9kNxPg'),
    	new Recipe('A Test Recipe', 'This is a test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpv0dV0zpUZjObC6efYmeA6IIPrYCKJ40kznvtpSNDZF9kNxPg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
