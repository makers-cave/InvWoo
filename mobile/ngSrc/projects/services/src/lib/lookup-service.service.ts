import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LookupModel } from './models/lookup-model';

@Injectable({
  providedIn: 'root'
})
export class LookupServiceService {
  row: LookupModel;
  constructor(private http: HttpClient) { }
  public getLookup(lu_id: string): Observable<LookupModel> {

    return new Observable<LookupModel>(observer => {

        this.loadLookup(lu_id).subscribe(
            response => {
                if (response) {
                    this.row = response[0];
                    observer.next(this.row);
                    observer.complete();
                } else {
                    observer.error(response);   
                }
            },
            error => {
                observer.error(error);
            }
        )
       
    });
}

loadLookup(lu_id: string): Observable<LookupModel>{
 let url = "stage.makers-cave.com/wp-json/api/InvWoo_lu_stores/?lu_id="+lu_id;
 return this.http.get<LookupModel>(url);
}
}
