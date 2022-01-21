import { RouterModule } from '@angular/router';
import { AppCodeEditorTreeComponent } from './components/code-editor-tree/code-editor-tree.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AppCodeEditorComponent } from './components/code-editor/code-editor.component';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    NzTreeViewModule,
    FormsModule,
    NzIconModule,
    RouterModule,
    NzCodeEditorModule,
  ],
  declarations: [AppCodeEditorComponent, AppCodeEditorTreeComponent],
  exports: [AppCodeEditorComponent, AppCodeEditorTreeComponent],
})
export class AppCodeEditorModule {}
