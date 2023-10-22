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

  constructor(
    @Inject(forwardRef(() => EditorNGComponent)) private editorNGComponent: EditorNGComponent,
    public dialog: MatDialog
  ) {}

  applyCommands(): void {
    const dialogRef = this.dialog.open(ImagedialogComponent, {
      data: { editor: this.editor }
    });
  }



}
