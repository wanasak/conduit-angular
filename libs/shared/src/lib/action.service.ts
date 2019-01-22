import { ApiService } from './../../../api/src/lib/api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'selenium-webdriver/firefox';
import { map } from 'rxjs/operators';
import { ArticleData } from '@conduit-angular/api';

@Injectable()
export class ActionService {
  constructor(private api: ApiService) {}

  followUser(username: string): Observable<Profile> {
    return this.api
      .post('/profiles/' + username + '/follow')
      .pipe(map(data => data.profile));
  }

  unfollowUser(username: string) {
    return this.api
      .delete('/profiles/' + username + 'follow')
      .pipe(map(data => data.profile));
  }

  favorite(slug: string): Observable<ArticleData> {
    return this.api
      .post('/articles/' + slug + '/favorite')
      .pipe(map(data => data.article));
  }

  unfavorite(slug: string): Observable<ArticleData> {
    return this.api
      .delete('/articles/' + slug + '/favorite')
      .pipe(map(data => data.article));
  }
}
