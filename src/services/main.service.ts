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
        public getmalfunctions(data): Observable<any> {
          const url = PCconfig.getPath() + '/malfunctions/getmalfunction';
          // return this.http.post(url, data);
          return this.http
          .post(url, data)
          .pipe(
            map((response: any) => {
              return response;
                })
          )}
        public getsolvedmalfunctions(data): Observable<any> {
          const url = PCconfig.getPath() + '/malfunctions/getmalfunction?status=Solved';
          // return this.http.post(url, data);
          return this.http
          .post(url, data)
          .pipe(
            map((response: any) => {
              return response;
                })
          )}
          public getcurrentmalfunctions(data): Observable<any> {
            const url = PCconfig.getPath() + '/malfunctions/getmalfunction?status=Unsolved';
            // return this.http.post(url, data);
            return this.http
            .post(url, data)
            .pipe(
              map((response: any) => {
                return response;
                  })
            )}
            public addmalfunctionparts(data): Observable<any> {
              const url = PCconfig.getPath() + '/malfunctions/addmalfunctionparts';
              // return this.http.post(url, data);
              return this.http
              .put(url, data)
              .pipe(
                map((response: any) => {
                  return response;
                    })
              )}
              public updatebill(data): Observable<any> {
                const url = PCconfig.getPath() + '/bills/updatebill';
                // return this.http.post(url, data);
                return this.http
                .put(url, data)
                .pipe(
                  map((response: any) => {
                    return response;
                      })
                )}
                public getunpaidbills(data): Observable<any> {
                  const url = PCconfig.getPath() + '/bills/getbill?status=unpaid';
                  // return this.http.post(url, data);
                  return this.http
                  .post(url, data)
                  .pipe(
                    map((response: any) => {
                      return response;
                        })
                  )}
                  public getpaidbills(data): Observable<any> {
                    const url = PCconfig.getPath() + '/bills/getbill?status=paid';
                    // return this.http.post(url, data);
                    return this.http
                    .post(url, data)
                    .pipe(
                      map((response: any) => {
                        return response;
                          })
                    )}
                    public getpendingcomplains(data): Observable<any> {
                      const url = PCconfig.getPath() +  `/complains/getnormalcomplains?status=pending&complain_type=${data.complain_type}`;
                      // return this.http.post(url, data);
                      return this.http
                      .post(url, data)
                      .pipe(
                        map((response: any) => {
                          return response;
                            })
                      )}
                      public getsolvedcomplains(data): Observable<any> {
                        const url = PCconfig.getPath() +  `/complains/getnormalcomplains?status=solved&complain_type=${data.complain_type}`;
                        // return this.http.post(url, data);
                        return this.http
                        .post(url, data)
                        .pipe(
                          map((response: any) => {
                            return response;
                              })
                        )}
                        public addcomplain(data): Observable<any> {
                          const url = PCconfig.getPath() + '/complains/addcomplain';
                          // return this.http.post(url, data);
                          return this.http
                          .post(url, data)
                          .pipe(
                            map((response: any) => {
                              return response;
                                })
                          )}
                          }
