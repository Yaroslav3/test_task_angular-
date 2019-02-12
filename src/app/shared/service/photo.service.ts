import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {


  private readonly host: string;
  private readonly listPhoto: string;
  private readonly listBannerIcon: string;

  constructor(private http: HttpClient) {
    this.host = environment.host;
    this.listPhoto = environment.listPhoto;
    this.listBannerIcon = environment.listBannerIcon;
  }

  /**
   *  get Photo.
   * **/
  getAllPhoto() {
    return this.http.get(this.host + this.listPhoto);
  }


  /***
   *  get all banner icon
   * **/
  getAllBannerIcom() {
    return this.http.get(this.host + this.listBannerIcon);
  }
}
