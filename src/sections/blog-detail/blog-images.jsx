import React from 'react';
import PropTypes from 'prop-types';

import { ImageList, ImageListItem } from '@mui/material';

import { fImage } from 'src/utils/format-image';

const BlogImageList = ({ images, name }) => (
    Array.isArray(images) && (
      <ImageList
        sx={{ width: '100%', height: 400 }}
        cols={images.length > 1 ? 3 : 1}
        rowHeight={164}
      >
        {images.length > 0 ? (
          images.map((item, index) => (
            <ImageListItem key={index}>
              <img
                srcSet={
                  fImage(item) ||
                  'https://i.pinimg.com/564x/e8/13/74/e8137457cebc9f60266ffab0ca4e83a6.jpg'
                }
                src={
                  fImage(item) ||
                  'https://i.pinimg.com/564x/e8/13/74/e8137457cebc9f60266ffab0ca4e83a6.jpg'
                }
                alt={name}
                loading="lazy"
                style={{ minHeight: 400, objectFit: 'cover', borderRadius: '8px' }}
              />
            </ImageListItem>
          ))
        ) : (
          <ImageListItem>
            <img
              srcSet="https://i.pinimg.com/564x/e8/13/74/e8137457cebc9f60266ffab0ca4e83a6.jpg"
              src="https://i.pinimg.com/564x/e8/13/74/e8137457cebc9f60266ffab0ca4e83a6.jpg"
              alt="default"
              loading="lazy"
              style={{ minHeight: 400, objectFit: 'cover', borderRadius: '8px' }}
            />
          </ImageListItem>
        )}
      </ImageList>
    )
  );

BlogImageList.propTypes = {
  images: PropTypes.array,
  name: PropTypes.string,
};

export default BlogImageList;
