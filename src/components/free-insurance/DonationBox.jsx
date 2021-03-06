/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import StrongText from '../StrongText';

import {
  listContainer,
  listItem,
} from '../../styles/list';
import {
  BASE_MQ,
  white,
  yellow,
  red,
} from '../../styles/constants-v4';

const styles = {
  container: {
    marginTop: '5vw',
    padding: '5vw 0',
    background: white,
    boxShadow: '0 2px 4px 0 rgba(218, 218, 218, 0.5)',
    [BASE_MQ]: {
      marginTop: '3em',
    },
  },
  optionList: {
    ...listContainer,
    display: 'flex',
  },
  optionItem: {
    ...listItem,
    width: '50%',
    fontFamily: 'S-CoreDream',
    fontSize: '2.8vw',
    textAlign: 'center',
    [BASE_MQ]: {
      padding: '0 2em',
      fontSize: '2em',
    },
    '&:first-of-type': {
      borderRight: '1px solid #D8D8D8',
    },
    '& > *': {
      display: 'inline-block',
      marginRight: '.5em',
      lineHeight: '100%',
      textAlign: 'left',
    },
    '& > *:last-child': {
      marginRight: 0,
    },
    '& > b': {
      fontFamily: 'S-CoreDream-8',
      fontSize: '2.2em',
      color: yellow,
    },
    '&:last-of-type > b': {
      color: red,
    },
  },
  button: {
    display: 'block',
    margin: '5vw auto 0',
    padding: '.7em 3.5em',
    border: 0,
    borderRadius: '3em',
    fontFamily: 'S-CoreDream-8',
    fontSize: '4vw',
    background: red,
    color: white,
    [BASE_MQ]: {
      fontSize: '2em',
    },
  },
};

export default function DonationBox({ t }) {
  const handleClick = () => {
    window.postMessage({ type: 'open-give-asia' }, '*');
  };

  return (
    <div css={styles.container}>
      <ul css={styles.optionList}>
        <li css={styles.optionItem}>
          <StrongText value={t.donation_per_month} />
        </li>
        <li css={styles.optionItem}>
          <StrongText value={t.donation_per_year} />
        </li>
      </ul>
      <button
        type="button"
        css={styles.button}
        onClick={handleClick}
      >
        {t.donation_button}
      </button>
    </div>
  );
}
