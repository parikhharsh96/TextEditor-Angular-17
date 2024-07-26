import { Component } from '@angular/core';
import { RightPanelComponent } from "../right-panel/right-panel.component";

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [RightPanelComponent],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.scss'
})
export class TextEditorComponent {

}
