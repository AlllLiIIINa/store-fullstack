import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ItemListComponent implements OnInit {
  items: Item[]=[];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      (items) => {
        this.items = items;
      },
      
    );
  }
}
