import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryserService } from './categoryser.service';
import { CategoryList } from './CategoryList';
@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  public sclcat: string;
  public categories: CategoryList[] = [];
  constructor(private categoryserservices: CategoryserService) { }
  changeClient(value) {
    this.sclcat = value;
  }
  cclick() {
    this.notify.emit(this.sclcat);
  }
  addComponent(categories: any) {
    this.notify.emit(categories.value);
  }
  ngOnInit() {
    this.categoryserservices.getCategories().subscribe((data) => {
      this.categories = data;
    });

  }

}
