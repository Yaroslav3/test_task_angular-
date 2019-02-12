import {Component, OnInit} from '@angular/core';
import {PhotoService} from '../shared/service/photo.service';
import {Photo} from '../shared/model/Photo.model';
import {CommitService} from '../shared/service/commit.service';
import {Comment} from '../shared/model/Comment.model';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css', './page-one.adaptive.component.css']
})
export class PageOneComponent implements OnInit {

  photo: Photo;
  photoBanner: Photo;

  comment: Comment;

  max = 5;
  rate = 7;
  isReadonly = true;

  constructor(private photoService: PhotoService, private commitService: CommitService) {
  }

  ngOnInit() {
    this.getAllPhoto();
    this.getAllCommits();
    this.getAllBannerIcon();
  }


  /**
   *  Get all Photo
   * **/
  getAllPhoto() {
    this.photoService.getAllPhoto().subscribe((data: Photo) => {
      this.photo = data;
    });
  }

  /**
   *  Get All Comment
   * **/
  getAllCommits() {
    this.commitService.getAllCommit().subscribe((data: Comment) => {
      this.comment = data;
    });
  }

  getAllBannerIcon() {
    this.photoService.getAllBannerIcom().subscribe((data: Photo) => {
      this.photoBanner = data;
    });
  }

}
