import { Component, OnInit } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MomentsComponent } from '../moments/moments.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(MomentsComponent);
    modalRef.componentInstance.name = 'Moments';
  }


  ngOnInit() {
  }
}
