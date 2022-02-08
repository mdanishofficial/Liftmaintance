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
}
