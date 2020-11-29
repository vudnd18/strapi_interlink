import React from 'react';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
import { auth } from 'strapi-helper-plugin';
import StrapiUploadAdapter from '@martinkronstad/ckeditor5-strapi-upload-adapter'; 

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const Editor = ({ onChange, name, value }) => {
  const jwtToken = auth.getToken();
  console.log(strapi.backendURL);
  return (
    <Wrapper>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
        config={{
          extraPlugins: [StrapiUploadAdapter],
          strapiUploadAdapter: {
            uploadUrl: `${strapi.backendURL}/upload`,
            absUrl: `${strapi.backendURL}`,
            headers: {
              Authorization: "Bearer " + jwtToken
            }
          }        
        }}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;