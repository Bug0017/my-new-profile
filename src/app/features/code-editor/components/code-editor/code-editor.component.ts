import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
})
export class AppCodeEditorComponent {
  code = `import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor'

@Component({})
export class SomeComponent {}`;
}
