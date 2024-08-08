import { Component,OnInit,ViewChild } from '@angular/core';
import { RightPanelComponent } from '../right-panel/right-panel.component';
import { TextEditorTabComponent } from "../text-editor-tab/text-editor-tab.component";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [RightPanelComponent, TextEditorTabComponent, CommonModule,MatIconModule],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.scss'
})
export class TextEditorComponent implements OnInit {

  tabs:any=[];
  activeTabIndex:number=0;
  activeSplitTabIndex:number=0;
  isSplitOn:boolean=false;

  ngOnInit(): void {
   this.tabs.push({tabName:'Untitled' + 1,value:'Some random text ' +1})
  }

  addTab()
  {
    this.tabs.push({tabName:'Untitled' + (this.tabs.length+1),value:'Some random text '+ (this.tabs.length+1)})
    this.activeTabIndex=this.tabs.length-1;

  }

  tabClicked(index:any)
  {
    console.log(index);
    this.activeTabIndex=index;

  }

  tabClickedSplit(indexSplitTab:any)
  {
    console.log(indexSplitTab);
    this.activeSplitTabIndex=indexSplitTab;

  }

  onSplitClick()
  {
    this.isSplitOn=!this.isSplitOn;
  }

  handleTextValueUpdate(event:any)
  {
    console.log(event)
    this.tabs[event.index].value=event.value;
  }

    

}
