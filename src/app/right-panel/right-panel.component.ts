import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-right-panel',
  standalone: true,
  imports: [MatIconModule, MatDialogModule, PopupComponent, RightPanelComponent],
  templateUrl: './right-panel.component.html',
  styleUrl: './right-panel.component.scss'
})
export class RightPanelComponent {

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(PopupComponent, {
      
      backdropClass: 'backdropBackground',      
      position: {right:'4rem', top: '5rem'},
      panelClass: 'popupContainer'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
