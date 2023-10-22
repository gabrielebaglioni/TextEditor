import { Plugin, PluginKey } from 'prosemirror-state';

export const myPlugin = new Plugin({
  key: new PluginKey('myPlugin'),
  // ... (altre opzioni del plugin)
});
