import { Injectable } from '@angular/core';
import { PCconfig } from './pc.config';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InstallationManagerServicesService {


  constructor(private http: HttpClient) {}
  public addinstallationstage(data): Observable<any> {
    const url = PCconfig.getPath() + '/installations/addinstallationstage';
    return this.http.put(url, data);
  }
  public getinstallation(): Observable<any> {
    const url = PCconfig.getPath() + '/installations/getinstallation';
    return this.http.get(url);
  }
  public getclients(): Observable<any> {
    const url = PCconfig.getPath() + '/clients/getclients';
    return this.http.get(url);
  }
  public getMaintenanceTechnicians(): Observable<any> {
    const url = PCconfig.getPath() + '/technicians/getMaintenanceTechnicians';
    return this.http.get(url);
  }
  public getMaintenanceRepairTechnicians(): Observable<any> {
    const url = PCconfig.getPath() + '/technicians/getMaintenanceRepairTechnicians';
    return this.http.get(url);
  }
  public getcurrentmalfunctions(): Observable<any> {
    const url = PCconfig.getPath() + '/malfunctions/getallmalfunctions?status=solved';
    // return this.http.post(url, data);
    return this.http
    .get(url)
    .pipe(
      map((response: any) => {
        return response;
          })
    )}
    public getsolvedmalfunctions(): Observable<any> {
      const url = PCconfig.getPath() + '/malfunctions/getallmalfunctions?status=unsolved';
      // return this.http.post(url, data);
      return this.http
      .get(url)
      .pipe(
        map((response: any) => {
          return response;
            })
      )}
      public update_malfunction_type(data): Observable<any> {
        const url = PCconfig.getPath() + '/malfunctions/update_malfunction_type';
        return this.http.put(url, data);
      }
      public update_malfunction_level(data): Observable<any> {
        const url = PCconfig.getPath() + '/malfunctions/update_malfunction_level';
        return this.http.put(url, data);
      }
      public update_malfunction_status(data): Observable<any> {
        const url = PCconfig.getPath() + '/malfunctions/update_malfunction_status';
        return this.http.put(url, data);
      }
      public assign_technician(data): Observable<any> {
        const url = PCconfig.getPath() + '/malfunctions/assign_technician';
        return this.http.put(url, data);
      }

}
