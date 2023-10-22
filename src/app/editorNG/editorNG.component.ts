import {Component, OnDestroy, OnInit} from '@angular/core';
import {Editor, toDoc, toHTML, Toolbar, Validators} from "ngx-editor";
import {FormControl, FormGroup} from "@angular/forms";
import customSchema from "./custom.shema";

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
  saveContent(): void {
    this.htmlContent = this.editor.view.state.doc
    console.log(this.htmlContent);
    if(this.htmlContent){
      localStorage.setItem('savedTemplate', JSON.stringify(this.htmlContent));
    }
  }


  /*loadTemplate(): void {
    const savedTemplate = localStorage.getItem('savedTemplate');
    if (savedTemplate) {
      const docJson = JSON.parse(savedTemplate);
      const html = toHTML(docJson);  // Converti il JSON del documento in HTML
      this.editor.commands.insertHTML(html).exec();  // Inserisci l'HTML nell'editor
    }
  }*/

  loadTemplate(): void {
    const savedTemplate = localStorage.getItem('savedTemplate');
    if (savedTemplate) {
      const docJson = JSON.parse(savedTemplate);
      this.editor.setContent(docJson);  // Imposta il contenuto dell'editor con il JSON del documento
    }
  }




  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
