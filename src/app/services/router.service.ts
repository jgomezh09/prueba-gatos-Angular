import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

private url =  "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  private getHeaders() {
    // tslint:disable-next-line: max-line-length
    const token = 'PruebaKafka';

    if (token) {
      return new HttpHeaders({ token });
    }
  }

  getQuery(query: string) {

    const url = `${ this.url }/${ query }`;
    const headers = this.getHeaders();
    return this.httpClient.get(url, {headers});

  }

  postQuery(query: string, data: object) {

    const url = `${ this.url }/${ query }`;
    const headers = this.getHeaders();
    return this.httpClient.post(url, data, {headers});

  }

  putQuery(query: string, data: object ) {
    const url = `${ this.url }/${ query }`;
    const headers = this.getHeaders();
    return this.httpClient.put(url, data, {headers});
  }

  deleteQuery(query: string ) {
    const url = `${ this.url }/${ query }`;
    const headers = this.getHeaders();
    return this.httpClient.delete(url,{headers});
  }



}
