import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import {RedditService} from './reddit.service';
import {Title} from "@angular/platform-browser";

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
  submissions: any;
  constructor(private http:HttpClient, private redditService:RedditService, private titleService:Title){
    this.titleService.setTitle("✨Spread Hope✨");
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

    ngOnInit() {
        this.redditService.getSubmissions()
            .subscribe(responseData => {
              this.submissions = JSON.parse(responseData.body);
              console.log(this.submissions)
              });
    }
}
