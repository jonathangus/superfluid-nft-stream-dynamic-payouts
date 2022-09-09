import { FC, useEffect } from 'react';
import { Button } from 'ui';
import { useAccount, useConnect } from 'wagmi';

import useCorrectChain from '../hooks/useCorrectChain';
import useNotice from '../hooks/useNotice';
import { formatAddressToShort } from '../utils/formatter';
import { ConnectButton as RainbowConnectButton } from '@rainbow-me/rainbowkit';

const ConnectButton = () => <RainbowConnectButton />;

export default ConnectButton;
