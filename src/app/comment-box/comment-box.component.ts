import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css'],
})
export class CommentBoxComponent implements OnInit {
  commentForm = this.fb.group({
    commentTextarea: ['', Validators.required],
  });

  onSubmit() {}
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
