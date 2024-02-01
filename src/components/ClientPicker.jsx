import { Client } from './Client';
import { ConfigError } from './ConfigError';
import { ConfigManager } from '../ConfigManager';
import { useState, useEffect } from 'preact/hooks';
import { h } from 'preact';
import { WebDavSignal } from '../WebDavSignal';

const configManager = new ConfigManager();

export function ClientPicker({ iceServers }) {
  if (!configManager.isValid) {
    return <ConfigError />;
  }
  const signal = new WebDavSignal(configManager.webDavCreds);
  const [id, setId] = useState('');
  const [active, setActive] = useState([]);
  useEffect(() => {
    const updater = async () => {
      setActive(await signal.listActiveIds());
    };
    updater();
    const interval = setInterval(updater, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const activeList = active.map((activeId) => (
    <button
      class={'button is-rounded' + (activeId === id ? ' is-primary' : '')}
      onClick={() => {
        setId(activeId);
      }}
    >
      {activeId}
    </button>
  ));
  let client = '';
  if (id) {
    client = <Client id={id} iceServers={iceServers} />;
  }
  return (
    <div>
      <div class="buttons">{activeList}</div>
      {client}
    </div>
  );
}
