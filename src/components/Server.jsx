import { ConfigError } from './ConfigError';
import { SyncData } from './SyncData';
import { ConfigManager } from '../ConfigManager';
import { WebDavSignal } from '../WebDavSignal';
import { RtcServer } from '../RtcServer';
import { RtcState } from '../RtcBase';
import { useState, useEffect } from 'preact/hooks';
import { h } from 'preact';

const configManager = new ConfigManager();

export function Server({ iceServers }) {
  if (!configManager.isValid) {
    return <ConfigError />;
  }
  const signal = new WebDavSignal(configManager.webDavCreds);
  const id = configManager.deviceId;
  const [state, setState] = useState(RtcState.INACTIVE);
  const [input, setInput] = useState('');
  const [server, setServer] = useState(null);
  useEffect(() => {
    const server = new RtcServer({ iceServers }, signal);
    server.addEventListener('message', ({ data }) => {
      setInput(data);
    });
    server.addEventListener('state', (event) => {
      setState(event.state);
    });
    server.start(id);
    setServer(server);
    return () => {
      server.close();
    };
  }, [id]);
  const onChange = (value) => {
    setInput(value);
    server.sendMessage(value);
  };
  return (
    <SyncData
      value={input}
      onChange={onChange}
      disabled={state !== RtcState.CONNECTED}
    />
  );
}
