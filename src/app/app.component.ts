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
    },
    {
      title: "sample title",
      url: "sampleuerl.com",
      permalink: "reddit.com",
    }]
  }
}
