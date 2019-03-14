import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
    @Input() myPost: string;
    status = "new";
    constructor() { }

    ngOnInit() {
    }

    getStatus(){
        return this.status;
    }

}
