import { Component } from '@angular/core';
import { LookupServiceService } from 'projects/services/src/lib/lookup-service.service';
import { LookupModel } from 'projects/services/src/lib/models/lookup-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InvWoo';
  public data: LookupModel;
  constructor(private lookupSvc: LookupServiceService){
    this.data = lookupSvc.
  }
}
