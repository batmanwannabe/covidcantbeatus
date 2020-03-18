import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import {RedditService} from './reddit.service';

interface Submission {
    title: string;
    url:string;
    permalink:string;
}
interface Response {
  statusCode: number;
  body: Submission[];
  headers: any;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})

export class AppComponent  {
  name = 'Angular';
  submissions: any;
  responseReddit: Response;
  constructor(private http:HttpClient, private redditService:RedditService){
    // this.submissions = [{
    //   title: "Tom and Rita Hanks have been released from the hospital!",
    //   url: "https://www.cnn.com/2020/03/16/entertainment/tom-hanks-rita-wilson-released-hospital-coronavirus/index.html",
    //   permalink: "reddit.com",
    // },
    // {
    //   title: "sample title",
    //   url: "sampleuerl.com",
    //   permalink: "reddit.com",
    // },
    // {
    //   title: "sample title",
    //   url: "sampleuerl.com",
    //   permalink: "reddit.com",
    // },
    // {
    //   title: "sample title",
    //   url: "sampleuerl.com",
    //   permalink: "reddit.com",
    // },
    // {
    //   title: "sample title",
    //   url: "sampleuerl.com",
    //   permalink: "reddit.com",
    // },
    // {
    //   title: "sample title",
    //   url: "sampleuerl.com",
    //   permalink: "reddit.com",
    // }]
  }

  courses$: Observable<Submission[]>;

    ngOnInit() {
        this.redditService.getSubmissions()
            .subscribe(responseData => {
              this.submissions = JSON.parse(responseData.body);
              console.log(this.submissions)
              });
    }
}
