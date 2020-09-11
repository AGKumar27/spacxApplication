import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { LaunchInfoService } from '../services/launch-info.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  // message: string; // remove
  recivedData: any;
  constructor(private launch: LaunchInfoService, private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe(
      (recivedData) => (this.recivedData = recivedData)
    );
  }
  getDataByYear(x) {
    this.launch.getAllLunchByYear(x).subscribe((response) => {
      this.recivedData = response;
      // console.log(this.recivedData);
      this.data.changeMessage(this.recivedData);
    });
  }

  getDataBySuccessfulLaunch(x) {
    this.launch.getAllSuccessfulLaunch(x).subscribe((response) => {
      this.recivedData = response;
      console.log(this.recivedData);
      this.data.changeMessage(this.recivedData);
    });
  }

  getDataBySuccessfulLand(x) {
    this.launch.getAllSuccessfulLand(x).subscribe((response) => {
      this.recivedData = response;
      // console.log(this.recivedData);
      this.data.changeMessage(this.recivedData);
    });
  }
}
