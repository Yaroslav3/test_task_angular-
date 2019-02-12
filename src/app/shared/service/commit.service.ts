import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommitService {


  private readonly host: string;
  private readonly listCommit: string;

  constructor(private http: HttpClient) {
    this.host = environment.host;
    this.listCommit = environment.listCommit;
  }

  /***
   * get all commit
   * **/
  getAllCommit() {
   return this.http.get(this.host + this.listCommit);
  }
}
