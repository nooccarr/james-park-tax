import './styles.scss';

import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { EditorProvider, useCurrentEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';

const MenuBar = ({ setContent }) => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  useEffect(() => {
    editor.on('update', () => {
      // console.log(editor.getJSON());
      // console.log(editor.getText());
      setContent(editor.getHTML());
    });
  }, [editor]);

  return (
    <div className="flex flex-wrap gap-2 pb-10">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`border border-slate-600 rounded-md p-1 ${
          editor.isActive('bold') ? 'text-white bg-slate-600' : ''
        }`}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`border border-slate-600 rounded-md p-1 ${
          editor.isActive('italic') ? 'text-white bg-slate-600' : ''
        }`}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`border border-slate-600 rounded-md p-1 ${
          editor.isActive('strike') ? 'text-white bg-slate-600' : ''
        }`}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`border border-slate-600 rounded-md p-1 ${
          editor.isActive('code') ? 'text-white bg-slate-600' : ''
        }`}
      >
        code
      </button>
      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        clear marks
      </button>
      <button
        onClick={() => editor.chain().focus().clearNodes().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`border border-slate-600 rounded-md p-1 ${
          editor.isActive('paragraph') ? 'text-white bg-slate-600' : ''
        }`}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`border border-slate-600 rounded-md p-1 ${
          editor.isActive('heading', { level: 1 })
            ? 'text-white bg-slate-600'
            : ''
        }`}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`border border-slate-600 rounded-md p-1 ${
          editor.isActive('heading', { level: 2 })
            ? 'text-white bg-slate-600'
            : ''
        }`}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`border border-slate-600 rounded-md p-1 ${
          editor.isActive('heading', { level: 3 })
            ? 'text-white bg-slate-600'
            : ''
        }`}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`border border-slate-600 rounded-md p-1 ${
          editor.isActive('heading', { level: 4 })
            ? 'text-white bg-slate-600'
            : ''
        }`}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={`border border-slate-600 rounded-md p-1 ${
          editor.isActive('heading', { level: 5 })
            ? 'text-white bg-slate-600'
            : ''
        }`}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={`border border-slate-600 rounded-md p-1 ${
          editor.isActive('heading', { level: 6 })
            ? 'text-white bg-slate-600'
            : ''
        }`}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`border border-slate-600 rounded-md p-1 ${
          editor.isActive('bulletList') ? 'text-white bg-slate-600' : ''
        }`}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`border border-slate-600 rounded-md p-1 ${
          editor.isActive('orderedList') ? 'text-white bg-slate-600' : ''
        }`}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`border border-slate-600 rounded-md p-1 ${
          editor.isActive('codeBlock') ? 'text-white bg-slate-600' : ''
        }`}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`border border-slate-600 rounded-md p-1 ${
          editor.isActive('blockquote') ? 'text-white bg-slate-600' : ''
        }`}
      >
        blockquote
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        horizontal rule
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        hard break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        redo
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        className={`border border-slate-600 rounded-md p-1 ${
          editor.isActive('textStyle', { color: '#958DF1' })
            ? 'text-white bg-slate-600'
            : ''
        }`}
      >
        purple
      </button>

      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run()
        }
        className="border border-slate-600 rounded-md p-1"
      >
        insertTable
      </button>
      <button
        onClick={() => editor.chain().focus().addColumnBefore().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        addColumnBefore
      </button>
      <button
        onClick={() => editor.chain().focus().addColumnAfter().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        addColumnAfter
      </button>
      <button
        onClick={() => editor.chain().focus().deleteColumn().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        deleteColumn
      </button>
      <button
        onClick={() => editor.chain().focus().addRowBefore().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        addRowBefore
      </button>
      <button
        onClick={() => editor.chain().focus().addRowAfter().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        addRowAfter
      </button>
      <button
        onClick={() => editor.chain().focus().deleteRow().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        deleteRow
      </button>
      <button
        onClick={() => editor.chain().focus().deleteTable().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        deleteTable
      </button>
      <button
        onClick={() => editor.chain().focus().mergeCells().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        mergeCells
      </button>
      <button
        onClick={() => editor.chain().focus().splitCell().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        splitCell
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeaderColumn().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        toggleHeaderColumn
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeaderRow().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        toggleHeaderRow
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeaderCell().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        toggleHeaderCell
      </button>
      <button
        onClick={() => editor.chain().focus().mergeOrSplit().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        mergeOrSplit
      </button>
      <button
        onClick={() =>
          editor.chain().focus().setCellAttribute('colspan', 2).run()
        }
        className="border border-slate-600 rounded-md p-1"
      >
        setCellAttribute
      </button>
      <button
        onClick={() => editor.chain().focus().fixTables().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        fixTables
      </button>
      <button
        onClick={() => editor.chain().focus().goToNextCell().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        goToNextCell
      </button>
      <button
        onClick={() => editor.chain().focus().goToPreviousCell().run()}
        className="border border-slate-600 rounded-md p-1"
      >
        goToPreviousCell
      </button>
    </div>
  );
};

const extensions = [
  Table.configure({
    resizable: true,
  }),
  TableRow,
  TableHeader,
  TableCell,
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
<table>
  <tbody>
    <tr>
      <th>Name</th>
      <th colspan="3">Description</th>
    </tr>
    <tr>
      <td>Cyndi Lauper</td>
      <td>singer</td>
      <td>songwriter</td>
      <td>actress</td>
    </tr>
  </tbody>
</table>
`;

const TipTap = ({ setContent }) => {
  return (
    <div className="p-10">
      <EditorProvider
        slotBefore={<MenuBar setContent={setContent} />}
        extensions={extensions}
        content={content}
      ></EditorProvider>
    </div>
  );
};

export default TipTap;
