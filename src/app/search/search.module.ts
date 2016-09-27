/**
 * Created by pramodk on 9/23/2016.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { SearchService } from './search.service';

import { searchRouting } from './search.routing';
import {SearchComponent} from "./search.component";
import { SearchInputComponent } from './search-input.component';

import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    searchRouting
  ],
  declarations: [
    SearchComponent
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule {}
