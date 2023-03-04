import { Component } from '@angular/core';
import { districtDetails } from 'src/assets/districts';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent {
  data = districtDetails

  }
