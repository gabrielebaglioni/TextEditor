import { NgModule } from '@angular/core';
import {NgxEditorModule} from "ngx-editor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {EditorNGComponent} from "./editorNG.component";
import {CustomMenuComponent} from "./custom-menu/custom-menu.component";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ImagedialogComponent} from "./custom-menu/image-dialog/imagedialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    EditorNGComponent,
    CustomMenuComponent,
    ImagedialogComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,


    NgxEditorModule.forRoot({
      locals: {
        // menu
        bold: 'Bold',
        italic: 'Italic',
        code: 'Code',
        blockquote: 'Blockquote',
        underline: 'Underline',
        strike: 'Strike',
        bullet_list: 'Bullet List',
        ordered_list: 'Ordered List',
        heading: 'Heading',
        h1: 'Header 1',
        h2: 'Header 2',
        h3: 'Header 3',
        h4: 'Header 4',
        h5: 'Header 5',
        h6: 'Header 6',
        align_left: 'Left Align',
        align_center: 'Center Align',
        align_right: 'Right Align',
        align_justify: 'Justify',
        text_color: 'Text Color',
        background_color: 'Background Color',

        // popups, forms, others...
        url: 'URL',
        text: 'Text',
        openInNewTab: 'Open in new tab',
        insert: 'Insert',
        altText: 'Alt Text',
        title: 'Title',
        remove: 'Remove',
      },
    }),
  ],
  providers: [],
  exports: [
    EditorNGComponent
  ],
  bootstrap: []
})
export class EditorNgModuel { }
