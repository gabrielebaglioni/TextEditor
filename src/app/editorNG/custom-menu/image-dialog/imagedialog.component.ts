import {Component, Inject, Input} from '@angular/core';
import {Editor} from "ngx-editor";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-image-dialog',
  templateUrl: './imagedialog.component.html',
  styleUrls: ['./imagedialog.component.css']
})
export class ImagedialogComponent {
  selectedImage: any;
  @Input() editor!: Editor;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ImagedialogComponent>

  ) {
    this.editor = data.editor;

  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  insertImage(): void {
    if (this.selectedImage) {
      this.editor.commands.insertImage(this.selectedImage).exec();
      this.dialogRef.close();
    }
  }

}
