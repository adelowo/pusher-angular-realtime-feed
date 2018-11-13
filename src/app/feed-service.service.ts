import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Feed } from './feed';
import Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private subject = new Subject<Feed>();

  private channelsClient: Pusher;

  constructor() {
    this.channelsClient = new Pusher('844731be2b0087bcf2a6', { cluster: 'eu' });

    const channels = this.channelsClient.subscribe('realtime-feeds');
    channels.bind(
      'posts',
      (data: { title: string; body: string; time: string }) => {
        this.subject.next(new Feed(data.title, data.body, new Date(data.time)));
      }
    );
  }

  getFeedItems(): Observable<Feed> {
    return this.subject.asObservable();
  }
}
