import {ChangeDetectorRef, Component, forwardRef, Inject, Input, OnInit} from '@angular/core';
import { Editor } from 'ngx-editor';
import {EditorNGComponent} from "../editorNG.component";
import {MatDialog} from "@angular/material/dialog";
import {ImagedialogComponent} from "./image-dialog/imagedialog.component";

@Component({
  selector: 'app-custom-menu',
  templateUrl: './custom-menu.component.html',
  styleUrls: ['./custom-menu.component.css'],
})
export class CustomMenuComponent{
  @Input() editor!: Editor;
  isOpen : boolean = false;
  constructor(
    @Inject(forwardRef(() => EditorNGComponent)) private parent: EditorNGComponent,
    public dialog: MatDialog
  ) {}

  applyCommands(): void {
    if(this.isOpen){
      this.dialog.closeAll();
      this.isOpen = false;
    }
    else {
      const dialogRef = this.dialog.open(ImagedialogComponent, {
        data: { editor: this.editor },
        disableClose: false,  // permette la chiusura del dialog cliccando fuori
        position: { bottom: '36%', left: '33%' },  // o altre percentuali per centrarlo correttamente
        width: '400px',
      });
      dialogRef.afterClosed().subscribe((result) => {
        this.isOpen = false;
      });
      this.isOpen = true;
    }
  }

}
