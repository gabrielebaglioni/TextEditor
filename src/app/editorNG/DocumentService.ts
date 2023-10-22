import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Document} from "./dataModel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private apiUrl = '/api/documents';
  private localStorageKey = 'documents';
  private initialDocumentTemplatePath = 'assets/DocumentTemplate.json';

  constructor(private http: HttpClient) {}

  getDocuments() {
    // Commentare la chiamata API reale
    // return this.http.get<Document[]>(`${this.apiUrl}`);

    // Utilizzare localStorage per il testing
    const storedDocs = localStorage.getItem(this.localStorageKey);
    return storedDocs ? JSON.parse(storedDocs) : [];
  }

  getDocument() {
    // Commentare la chiamata API reale
    // return this.http.get<Document>(`${this.apiUrl}/${id}`);

    // Utilizzare localStorage per il testing
    const savedTemplate = localStorage.getItem(this.localStorageKey);
    return savedTemplate ? JSON.parse(savedTemplate) : null;
  }
  loadInitialDocumentTemplate() {
    // Carica il documento iniziale da assets/DocumentTemplate.json
    return this.http.get<Document>(this.initialDocumentTemplatePath);
  }

  createDocument(doc: Document) {
    // Commentare la chiamata API reale
    // return this.http.post<Document>(`${this.apiUrl}`, doc);

    // Utilizzare localStorage per il testing
    localStorage.setItem(this.localStorageKey, JSON.stringify(doc));

  }

  updateDocument(id: number, doc: Document) {
    return this.http.put<Document>(`${this.apiUrl}/${id}`, toDatabaseDoc(doc));
  }

  deleteDocument(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
function toDatabaseDoc(doc: Document): any {
  return JSON.stringify(doc);
}

function fromDatabaseDoc(dbDoc: any): Document {
  // Poiché il documento è già stato convertito in una stringa JSON nel metodo 'createDocument',
  // è necessario prima deserializzarlo prima di accedere alla proprietà 'content'
  const parsedDoc = JSON.parse(dbDoc);
  return JSON.parse(parsedDoc.content);
}
