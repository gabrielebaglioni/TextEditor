import {Component, OnDestroy, OnInit} from '@angular/core';
import {Editor, schema, Toolbar, Validators} from "ngx-editor";
import {FormControl, FormGroup} from "@angular/forms";
import customSchema from "./custom.shema";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {
  showModal: boolean = false; // per controllare la visibilità della modal
  selectedImage: any;
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });

  ngOnInit(): void {
    this.editor = new Editor({
      content: '',
      history: true,
      keyboardShortcuts: true,
      inputRules: true,
      plugins: [],
      schema: customSchema,
      nodeViews: {},
      attributes: {},
      linkValidationPattern: ''
    });
  }
  applyCommands(): void {
    this.showModal = true;
  }
  closeModal(): void {
    this.showModal = false;
  }

// Funzione chiamata quando un file viene selezionato
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

// Funzione per inserire l'immagine nell'editor
  insertImage(): void {
    if (this.selectedImage) {
      this.editor.commands.insertImage(this.selectedImage).exec();
      this.closeModal();
    }
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
