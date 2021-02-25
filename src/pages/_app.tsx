import { useState } from 'react';
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext';
import { CountDownProvider } from '../contexts/CountDownContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {

  return (
    <ChallengesProvider>
        <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
