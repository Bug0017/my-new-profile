import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Terminal } from 'xterm';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppTerminalComponent implements AfterViewInit {
  private term: Terminal;
  @ViewChild('myTerminal') terminalDiv: ElementRef;
  constructor() {}
  ngAfterViewInit(): void {
    this.term = new Terminal();
    this.term.open(this.terminalDiv.nativeElement);

    this.term.onData((e) => this.term.write(e));
  }
}
