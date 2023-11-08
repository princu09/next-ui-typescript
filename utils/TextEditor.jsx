import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const TextEditor = ({ value, onChange }) => {
  return (
    <div className="w-full h-full">
      <QuillNoSSRWrapper
        className="!rounded-md"
        value={value}
        modules={{
          toolbar: [
            // [{ header: [1, 2, 3, false] }],
            // ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            // [
            //   {
            //     color: [
            //       'red',
            //       'blue',
            //       'yellow',
            //       'green',
            //       'black',
            //       'white',
            //       'pink',
            //       'orange',
            //       'purple',
            //       'brown',
            //       'gray',
            //     ],
            //   },
            // ],
            // [{ list: 'ordered' }, { list: 'bullet' }],
            // ['link', 'image'],
            // ['clean'],
          ],
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default TextEditor;
