import { nodes as basicNodes, marks } from 'ngx-editor';
import { Schema, NodeSpec } from 'prosemirror-model';

const codeMirror: NodeSpec = {
  content: 'text*',
  marks: '',
  group: 'block',
  code: true,
  defining: true,
  isolating: true,
  parseDOM: [
    {
      tag: 'pre',
      preserveWhitespace: 'full',
    },
  ],
  toDOM() {
    return ['pre', ['code', 0]];
  },
};

const nodes = Object.assign({}, basicNodes, {
  code_mirror: codeMirror,
});

const customSchema = new Schema({
  nodes,
  marks,
});

export default customSchema;
