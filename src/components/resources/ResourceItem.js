import React                from 'react';
import Highlighter          from 'react-highlight-words';
import { highlightClasses } from './config';

const getHighlightClass = keyword => highlightClasses[keyword];

const ResourceItem = ({ name, url, keyword }) => (
  <div className="resourceItemContainer">
    <p className="resourceName">
      <span className="tooltip" role="img" aria-label="birb">
        🐦
      </span>
      <Highlighter highlightClassName={getHighlightClass(keyword)} searchWords={[keyword]} autoEscape={true} textToHighlight={name} />
    </p>
    <p className="resourceUrl">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
    </p>
  </div>
);

export default ResourceItem;
