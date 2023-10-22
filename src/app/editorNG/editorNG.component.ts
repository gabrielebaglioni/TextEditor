import {Component, OnDestroy, OnInit} from '@angular/core';
import {Editor, toDoc, toHTML, Toolbar, Validators} from "ngx-editor";
import {FormControl, FormGroup} from "@angular/forms";
import customSchema from "./custom.shema";
import {DocumentService} from "./DocumentService";

@Component({
  selector: 'app-editorNG',
  templateUrl: './editorNG.component.html',
  styleUrls: ['./editorNG.component.css']
})
export class EditorNGComponent implements OnInit, OnDestroy {
  htmlContent: any;
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });
  constructor(private documentService: DocumentService) {}

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
    this.loadInitialTemplate();
  }


  saveContent(): void {
    this.htmlContent = this.editor.view.state.doc;
    console.log(this.htmlContent);
    if (this.htmlContent) {
      this.documentService.createDocument(this.htmlContent);
    }
  }

  loadInitialTemplate(): void {
    this.documentService.loadInitialDocumentTemplate()
      .subscribe(template => {
        this.editor.setContent(template);
      });
  }
  loadTemplate(): void {
    const document = this.documentService.getDocument();
    if (document) {
      this.editor.setContent(document);
    }
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
