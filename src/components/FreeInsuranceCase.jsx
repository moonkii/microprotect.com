/* @jsx jsx */

import React, { useState } from 'react';

import { jsx } from '@emotion/core';

import Text from './Text';

import { mq } from '../styles/utils';

import {
  IndiaJafarImage,
  IndiaPersonImage1,
  IndiaPersonImage2,
  IndiaPersonImage3,
  IndiaPersonImage4,
  IndiaPersonImage5,
  IndiaPersonImage6,
  IndiaPersonImage7,
  IndiaPersonImage8,
  IndiaPersonImage9,
} from '../assets';

const people = [
  IndiaPersonImage1,
  IndiaPersonImage2,
  IndiaPersonImage3,
  IndiaPersonImage4,
  IndiaPersonImage5,
  IndiaPersonImage6,
  IndiaPersonImage7,
  IndiaPersonImage8,
  IndiaPersonImage9,
];

const BASE_MQ = mq(640);

const styles = {
  casePicture: {
    zIndex: 10,
    position: 'relative',
    display: 'block',
    margin: '0 auto',
    width: '300px',
    [BASE_MQ]: {
      float: 'right',
      width: '40vw',
      maxWidth: '900px',
      marginTop: '5em',
      marginRight: '5%',
    },
    [mq(2400)]: {
      marginRight: '10%',
    },
  },
  story: {
    fontSize: '1.5em',
    background: '#EEE',
    [BASE_MQ]: {
      clear: 'left',
      height: 0,
      visibility: 'hidden',
      fontSize: '1.8vw',
    },
    [mq(2200)]: {
      fontSize: '2em',
    },
  },
  storyShown: {
    [BASE_MQ]: {
      height: 'auto',
      visibility: 'visible',
      animation: '.2s ease-out slideup',
    },
  },
  storyHidden: {
    [BASE_MQ]: {
      animation: '.2s ease-out fadeout',
    },
  },
  storyPadding: {
    padding: '.8em 5%',
  },
  cases: {
    margin: '2em auto 0',
    width: '90%',
    fontSize: '1.5em',
    [BASE_MQ]: {
      clear: 'left',
      margin: 0,
      marginLeft: '5%',
      width: '50%',
      fontSize: '1.8em',
      overflow: 'hidden',
      height: 'auto',
      opacity: 1,
      transition: '.5s',
    },
    [mq(1300)]: {
      marginBottom: '1em',
      paddingTop: '.5em',
      fontSize: '2.2em',
    },
  },
  casesHidden: {
    [BASE_MQ]: {
      height: 0,
      opacity: 0,
    },
  },
  people: {
    margin: '.5em 0',
  },
  person: {
    width: '25%',
    margin: '2%',
    [BASE_MQ]: {
      width: '8%',
      margin: '0 .1em',
    },
    [mq(1300)]: {
      margin: '.2em',
    },
  },
};

export default function FreeInsuranceCase({ t }) {
  const [isShowStory, setStoryVisible] = useState(false);

  return (
    <>
      <img
        css={styles.casePicture}
        src={IndiaJafarImage}
        alt=""
        onMouseEnter={() => setStoryVisible(true)}
        onMouseLeave={() => setStoryVisible(false)}
      />
      <div
        css={[
          styles.story,
          isShowStory ? styles.storyShown : styles.storyHidden,
        ]}
      >
        <div css={styles.storyPadding}>
          <Text value={t.free_insurance_story} />
        </div>
      </div>
      <div
        css={[
          styles.cases,
          isShowStory ? styles.casesHidden : {},
        ]}
      >
        <Text
          value={t.free_insurance_case}
        />
        <div css={styles.people}>
          {people.map((personImage) => (
            <img
              key={personImage}
              css={styles.person}
              src={personImage}
              alt=""
            />
          ))}
        </div>
      </div>
    </>
  );
}
