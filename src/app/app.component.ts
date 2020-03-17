import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular';
  submissions: any;
  constructor(){
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
}
