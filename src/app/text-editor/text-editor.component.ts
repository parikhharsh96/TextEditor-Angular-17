import { Component,OnInit,ViewChild } from '@angular/core';
import { RightPanelComponent } from '../right-panel/right-panel.component';
import { TextEditorTabComponent } from "../text-editor-tab/text-editor-tab.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [RightPanelComponent, TextEditorTabComponent, CommonModule],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.scss'
})
export class TextEditorComponent implements OnInit {

  tabs:any=[];
  activeTabIndex:number=0;

  ngOnInit(): void {
   this.tabs.push({tabName:'Untitled' + 1})
  }

  addTab()
  {
    this.tabs.push({tabName:'Untitled' + (this.tabs.length+1)})
    this.activeTabIndex=this.tabs.length-1;

  }

  tabClicked(index:any)
  {
    console.log(index);
    this.activeTabIndex=index;

  }

  

}
