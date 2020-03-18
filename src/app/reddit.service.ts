import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RedditService {

  constructor(private http:HttpClient) { }
  getSubmissions(){
    return this.http
            .get<any>("https://d5emlge6rk.execute-api.us-east-1.amazonaws.com/dev/")
  }
}