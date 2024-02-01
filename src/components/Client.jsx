import { SyncData } from './SyncData';
import { ConfigManager } from '../ConfigManager';
import { useState, useEffect } from 'preact/hooks';
import { h } from 'preact';
import { WebDavSignal } from '../WebDavSignal';
import { RtcClient } from '../RtcClient';
import { RtcState } from '../RtcBase';

const configManager = new ConfigManager();

export function Client({ id, iceServers }) {
  const signal = new WebDavSignal(configManager.webDavCreds);
  const [state, setState] = useState(RtcState.INACTIVE);
  const [input, setInput] = useState('');
  const [client, setClient] = useState(null);
  useEffect(() => {
    const client = new RtcClient({ iceServers }, signal);
    client.addEventListener('message', ({ data }) => {
      setInput(data);
    });
    client.addEventListener('state', (event) => {
      setState(event.state);
    });
    client.connect(id);
    setClient(client);
    return () => {
      client.close();
    };
  }, [id]);
  const onChange = (value) => {
    setInput(value);
    client.sendMessage(value);
  };
  return (
    <SyncData
      value={input}
      onChange={onChange}
      disabled={state !== RtcState.CONNECTED}
    />
  );
}
