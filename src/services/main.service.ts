import { Injectable } from '@angular/core';
import { PCconfig } from './pc.config';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InstallationService {

  constructor(private http: HttpClient) {}
  public addinstallation(data): Observable<any> {
    const url = PCconfig.getPath() + '/installations/addinstallation';
    return this.http.post(url, data);
  }
  public getrailanddoor(data): Observable<any> {
    const url = PCconfig.getPath() + '/railanddoors/getrailanddoor';
    // return this.http.post(url, data);
    return this.http
    .post(url, data)
    .pipe(
      map((response: any) => {
        return response;
          })
    )}
  public getcabin(data): Observable<any> {
    const url = PCconfig.getPath() + '/cabins/getcabin';
    // return this.http.post(url, data);
    return this.http
    .post(url, data)
    .pipe(
      map((response: any) => {
        return response;
          })
    )}
  public getmachine(data): Observable<any> {
    const url = PCconfig.getPath() + '/machines/getmachine';
    // return this.http.post(url, data);
    return this.http
    .post(url, data)
    .pipe(
      map((response: any) => {
        return response;
          })
    )}
    public getcontroldelivery(data): Observable<any> {
      const url = PCconfig.getPath() + '/controldeliveries/getcontroldelivery';
      // return this.http.post(url, data);
      return this.http
      .post(url, data)
      .pipe(
        map((response: any) => {
          return response;
            })
      )}
      public getmaintenance(data): Observable<any> {
        const url = PCconfig.getPath() + '/maintenances/getmaintenance';
        // return this.http.post(url, data);
        return this.http
        .post(url, data)
        .pipe(
          map((response: any) => {
            return response;
              })
        )}
}
