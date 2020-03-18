import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import * as _ from 'lodash';
import 'rxjs/add/operator/map'

interface Submission {
    title: string;
    url:string;
    permalink:string;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})

export class AppComponent  {
  name = 'Angular';
  submissions: any;
  constructor(private http:HttpClient){
    this.submissions = [{
      title: "Tom and Rita Hanks have been released from the hospital!",
      url: "https://www.cnn.com/2020/03/16/entertainment/tom-hanks-rita-wilson-released-hospital-coronavirus/index.html",
      permalink: "reddit.com",
    },
    {
      title: "sample title",
      url: "sampleuerl.com",
      permalink: "reddit.com",
    },
    {
      title: "sample title",
      url: "sampleuerl.com",
      permalink: "reddit.com",
    },
    {
      title: "sample title",
      url: "sampleuerl.com",
      permalink: "reddit.com",
    },
    {
      title: "sample title",
      url: "sampleuerl.com",
      permalink: "reddit.com",
    },
    {
      title: "sample title",
      url: "sampleuerl.com",
      permalink: "reddit.com",
    }]
  }

  courses$: Observable<Submission[]>;

    ngOnInit() {
        this.http
            .get<any>("https://d5emlge6rk.execute-api.us-east-1.amazonaws.com/dev/")
            .subscribe(responseData => console.log(responseData));
    }
}
