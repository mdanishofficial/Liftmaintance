import { Injectable } from '@angular/core';
import { PCconfig } from './pc.config';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InstallationService {

  constructor(private http: HttpClient) {}
  public login(data): Observable<any> {
    const url = PCconfig.getPath() + '/users/login';
    return this.http.post(url, data);
  }
  public addinstallation(data): Observable<any> {
    const url = PCconfig.getPath() + '/installations/addinstallation';
    return this.http.post(url, data);
  }
  public getinstallation(data): Observable<any> {
    const url = PCconfig.getPath() + '/installations/getinstallation';
    return this.http.post(url, data);
  }
  public getinstallationstage(data): Observable<any> {
    const url = PCconfig.getPath() + '/installations/getinstallationstage';
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
          const url = PCconfig.getPath() + '/malfunctions/getmalfunction?status=solved';
          // return this.http.post(url, data);
          return this.http
          .post(url, data)
          .pipe(
            map((response: any) => {
              return response;
                })
          )}
          public getmalfunctiondangerlevelsolved(data): Observable<any> {
            const url = PCconfig.getPath() + '/malfunctions/getmalfunctiondangerlevel?status=solved';
            // return this.http.post(url, data);
            return this.http
            .post(url, data)
            .pipe(
              map((response: any) => {
                return response;
                  })
            )}
            public getmalfunctiondangerlevelunsolved(data): Observable<any> {
              const url = PCconfig.getPath() + '/malfunctions/getmalfunctiondangerlevel?status=unsolved';
              // return this.http.post(url, data);
              return this.http
              .post(url, data)
              .pipe(
                map((response: any) => {
                  return response;
                    })
              )}
          public getcurrentmalfunctions(data): Observable<any> {
            const url = PCconfig.getPath() + '/malfunctions/getmalfunction?status=unsolved';
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
                          public getrating(data): Observable<any> {
                            const url = PCconfig.getPath() + '/technicians/getrating';
                            // return this.http.post(url, data);
                            return this.http
                            .post(url, data)
                            .pipe(
                              map((response: any) => {
                                return response;
                                  })
                            )}
                            public getinquiries(data): Observable<any> {
                              const url = PCconfig.getPath() + '/inquiries/getinquiries';
                              // return this.http.post(url, data);
                              return this.http
                              .post(url, data)
                              .pipe(
                                map((response: any) => {
                                  return response;
                                    })
                              )}
                              public addinquiry(data): Observable<any> {
                                const url = PCconfig.getPath() + '/inquiries/addinquiry';
                                // return this.http.post(url, data);
                                return this.http
                                .post(url, data)
                                .pipe(
                                  map((response: any) => {
                                    return response;
                                      })
                                )}
                                public getparts(data): Observable<any> {
                                  const url = PCconfig.getPath() + '/bills/getparts';
                                  // return this.http.post(url, data);
                                  return this.http
                                  .post(url, data)
                                  .pipe(
                                    map((response: any) => {
                                      return response;
                                        })
                                  )}
                                  public updateparts(data): Observable<any> {
                                    const url = PCconfig.getPath() + '/bills/updateparts';
                                    // return this.http.post(url, data);
                                    return this.http
                                    .put(url, data)
                                    .pipe(
                                      map((response: any) => {
                                        return response;
                                          })
                                    )}
                                    public getnotifications(data): Observable<any> {
                                      const url = PCconfig.getPath() + '/notifications/getnotification';
                                      // return this.http.post(url, data);
                                      return this.http
                                      .post(url, data)
                                      .pipe(
                                        map((response: any) => {
                                          return response;
                                            })
                                      )}
                                      public getcontract(data): Observable<any> {
                                        const url = PCconfig.getPath() + '/contracts/getcontract';
                                        // return this.http.post(url, data);
                                        return this.http
                                        .post(url, data)
                                        .pipe(
                                          map((response: any) => {
                                            return response;
                                              })
                                        )}
                                        public addfaq(data): Observable<any> {
                                          const url = PCconfig.getPath() + '/faqs/addfaq';
                                          // return this.http.post(url, data);
                                          return this.http
                                          .post(url, data)
                                          .pipe(
                                            map((response: any) => {
                                              return response;
                                                })
                                          )}
                                          public getfaqs(): Observable<any> {
                                            const url = PCconfig.getPath() + '/faqs/getfaqs';
                                            // return this.http.post(url, data);
                                            return this.http
                                            .get(url)
                                            .pipe(
                                              map((response: any) => {
                                                return response;
                                                  })
                                            )}
                                    private _listeners=new Subject<any>();
                                    listen():Observable<any>{
                                      return this._listeners.asObservable();
                                    }
                                    filter(filterBy:String){
                                     this._listeners.next(filterBy)
                                    }

                         }
