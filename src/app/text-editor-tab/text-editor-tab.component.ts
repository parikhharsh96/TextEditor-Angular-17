import { Component,EventEmitter,Input,Output,ViewChild } from '@angular/core';
import {JoditConfig, NgxJoditComponent} from 'ngx-jodit';
import {Config} from 'jodit/esm/config';
import 'jodit/esm/plugins/bold/bold.js';
import 'jodit/esm/plugins/add-new-line/add-new-line.js';
import 'jodit/esm/plugins/fullsize/fullsize.js';
import de, { Resize } from 'jodit/esm/langs/de.js';
import {Jodit} from 'jodit';
import * as resizeHandler from 'jodit/esm/plugins/resize-handler/resize-handler.js';
import { HTMLTagNames } from 'jodit/types/types';



Jodit.lang.de = de;
Jodit.plugins.add('resizeHandler',resizeHandler);

@Component({
  selector: 'app-text-editor-tab',
  standalone: true,
  imports: [NgxJoditComponent],
  templateUrl: './text-editor-tab.component.html',
  styleUrl: './text-editor-tab.component.scss'
})
export class TextEditorTabComponent {

  @Input() value:any;
  _optionsStr = '';
  @Input() index:number=0;
  @Output() textValue=new EventEmitter<Object>();

  @ViewChild('ngxJodit') ngxJodit?: NgxJoditComponent;
  

  get optionsStr(): string {
    return this._optionsStr;
  }

  set optionsStr(value: string) {
    this._optionsStr = value;
    try {
      this.options = JSON.parse(value);
    } catch (e) {
      // ignore
    }
  }

  options : JoditConfig = {
    height: 300,
    allowResizeX: true,
  allowResizeY: true,
  
  };

  onChange(event:any)
  {
    console.log(event)
    this.textValue.emit({value:this.value,index:this.index});

  }

}
