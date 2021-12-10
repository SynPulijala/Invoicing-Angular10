import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

// configs


// constants
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonDataService {
  authorised = false;
  public _apiUrl = '';
  constructor(
    public router: Router,
    public _http: HttpClient
  ) {
    this._apiUrl = environment.apiUrl;
  }

  // tslint:disable-next-line: deprecation
  public getToken(key: string) {
    return window.localStorage.getItem(key);
  }
  public setToken(key: string, value: any) {
    window.localStorage.setItem(key, value);
  }

  callApi(url: string, data: any, method: string, isPublic?: boolean, isForm?: boolean, html?: boolean): Promise<any> {
    let headers: any;
    if (isPublic) {
      // tslint:disable-next-line: no-duplicate-string
      headers = new HttpHeaders({ 'content-Type': 'application/json' });
    } else if (html) {
      headers = new HttpHeaders({ 'content-Type': 'text/html' });
    } else {
      headers = new HttpHeaders({
        'content-Type': 'application/json',
        authorization: 'Bearer ' + this.getToken('accessToken'),
      });
    }
    if (isForm) {
      headers = new HttpHeaders({
        authorization: 'Bearer ' + this.getToken('accessToken'),
      });
    }
    return new Promise((resolve, reject) => {
      if (method === 'post') {
        this._http.post(this._apiUrl + url, data, { headers }).subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            this.error(error);
          }
        );
      } else if (method === 'get') {
        this._http.get(this._apiUrl + url, { headers, params: data }).subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            this.error(error);
          }
        );
      } else if (method === 'put') {
        this._http.put(this._apiUrl + url, data, { headers }).subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            this.error(error);
          }
        );
      } else if (method === 'delete') {
        this._http.delete(this._apiUrl + url, { headers }).subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            this.error(error);
          }
        );
      }
    });
  }

  /*****************************************************************************************/
  // @PURPOSE      	: 	To show server error
  /*****************************************************************************************/
  showServerError(e: any) {
    // this.swal.fire({
    //   position: 'center',
    //   text: 'Internal Server Error',
    //   showConfirmButton: false,
    //   timer: 1800,
    // });
  }
  /****************************************************************************/
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  error(e: any) {
    console.log(e)
  };

}
