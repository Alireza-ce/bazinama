import { Component, OnInit, Input } from '@angular/core';
import { Comment } from './../../../../shared/models/comment.models';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  public imageSrc: string;
  public goldStar: number[] = [];
  public silverStar: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.setImageSrc();
    this.setStars();
  }

  setStars() {
    for (let gold = 0; gold < this.comment.score; gold++) {
      this.goldStar.push(gold);
    }
    for (let silver = 0; silver < 5 - this.comment.score; silver++) {
      this.silverStar.push(silver);
    }
  }

  setImageSrc() {
    if (this.comment.user_avatar) {
      this.imageSrc = `${environment.baseUrl}/${this.comment.user_avatar}`;
    } else {
      this.imageSrc = 'assets/images/avatar.png';
    }
  }
}
