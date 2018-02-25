import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common'
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  location: Location;
  fullInvite: boolean = false;
  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit() {
  }

  isFullInvite(): boolean  {
    return this.location.path(false) == '/invite' || this.location.path(false) == '/invite.html';
  }
}
