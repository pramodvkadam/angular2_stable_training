import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'cgp-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  public searchFor: string;
  public searchBy: string;
  searchForm: FormGroup;

  constructor(private router: Router,public fb: FormBuilder) {
   this.searchForm = fb.group({
      searchFor: ["Campsite", Validators.required],
      searchBy: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9 .@_]*')] ]
    });
  }

  search() {
    if (this.searchForm.valid) {
      var searchObj = this.searchForm.value;
      this.router.navigate(['/search', searchObj.searchFor, searchObj.searchBy]);
    }
  }

  ngOnInit() {
  }

}
