import React, { useState, useRef } from 'react';
import { EditorState, convertToRaw, Modifier } from 'draft-js';
import { supabase } from "../utils/supabase"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichTextEditor = () => {
  const editorStateRef = useRef(EditorState.createEmpty());
  const [editorState, setEditorState] = useState(editorStateRef.current);

  const handleImageUpload = async (file) => {
    try {
      const { data, error } = await supabase.storage.from('gambar').upload(`images/${file.name}`, file);
      if (error) {
        throw error;
      }
      return data.Key;
    } catch (error) {
      console.error('Error uploading image:', error.message);
      return null;
    }
  };
  const addImage = async (file) => {
    const imageUrl = await handleImageUpload(file);
    if (!imageUrl) return;
  
    setEditorState((prevEditorState) => {
      const contentState = prevEditorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', { src: imageUrl });
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      const newContentState = Modifier.insertText(contentState, contentState.getSelectionAfter(), ' ', null, entityKey);
      return EditorState.push(prevEditorState, newContentState, 'insert-characters');
    });
  };
  

  const handleSubmit = async () => {
    const contentState = editorStateRef.current.getCurrentContent();
    const content = JSON.stringify(convertToRaw(contentState));

    try {
      const { data, error } = await supabase.from('posts').insert({ content });
      if (error) {
        throw error;
      }
      console.log('Post submitted successfully:', data);
    } catch (error) {
      console.error('Error submitting post:', error.message);
    }
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        toolbar={{
          options: ['inline', 'blockType', 'list', 'textAlign', 'colorPicker', 'link', 'emoji', 'image', 'remove', 'history'],
          inline: { options: ['bold', 'italic', 'underline'] },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: {
            uploadCallback: handleImageUpload,
            previewImage: true,
            alt: { present: true, mandatory: true },
            inputAccept: 'image/*',
            urlEnabled: false,
            uploadEnabled: true,
            alignmentEnabled: true,
            defaultSize: {
            height: 'auto',
            width: 'auto',
            },
            },
            }}
            />
            <input type="file" accept="image/*" onChange={(e) => addImage(e.target.files[0])} multiple />
            <button onClick={handleSubmit}>Submit</button>
            </div>
            );
            };
            
            export default RichTextEditor;