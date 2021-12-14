import { Component } from '@angular/core';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editor: EditorType = 'name';

  get showNameEditor() {
    return false;
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  get showButton() {
    return false;
  }
  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
