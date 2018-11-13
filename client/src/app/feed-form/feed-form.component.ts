import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feed-form',
  templateUrl: './feed-form.component.html',
  styleUrls: ['./feed-form.component.css'],
})
export class FeedFormComponent implements OnInit {
  private isSending: boolean;
  private httpClient: HttpClient;

  public content: string;
  public errorMsg: string;
  public infoMsg: string;
  public title: string;

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  submit() {
    this.errorMsg = '';
    this.isSending = true;
    this.infoMsg = 'Processing your request.. Wait a minute';

    this.http
      .post('http://localhost:3000/submit', {
        title: this.title,
        body: this.content,
      })
      .toPromise()
      .then((data: { message: string; status: boolean }) => {
        this.infoMsg = data.message;
        setTimeout(() => {
          this.infoMsg = '';
        }, 1000);

        this.isSending = false;
        this.content = '';
        this.title = '';
      })
      .catch(error => {
        this.infoMsg = '';
        this.errorMsg = error.error.message;

        this.isSending = false;
      });
  }

  ngOnInit() {}
}
