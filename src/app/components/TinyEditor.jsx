import './styles.scss';
import { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TinyEditor = ({ setContent }) => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      setContent(editorRef.current.getContent());
    }
  };

  return (
    <>
      <Editor
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue="<p></p>"
        init={{
          height: 600,
          menubar: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | bold italic underline | blocks | ' +
            'alignleft aligncenter ' +
            '| bullist numlist outdent indent | forecolor |' +
            'removeformat | table | preview | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
      <button
        type="submit"
        onClick={log}
        className="email-form-button bg-[#043a49] mt-4 normal-case"
      >
        Create Post
      </button>
    </>
  );
};

export default TinyEditor;
