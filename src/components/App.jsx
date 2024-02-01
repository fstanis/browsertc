import { Config } from './Config';
import { ClientPicker } from './ClientPicker';
import { Server } from './Server';
import { Nav } from './Nav';
import { ConfigManager } from '../ConfigManager';
import { useState, useEffect } from 'preact/hooks';
import { getIceServers } from '../turnCreds';
import { h } from 'preact';

const configManager = new ConfigManager();

export function App() {
  const [active, setActive] = useState(location.hash.replace('#', ''));
  const [iceServers, setIceServers] = useState();
  const onTabClick = (tab) => {
    history.pushState(null, null, '#' + tab);
    setActive(tab);
  };
  useEffect(async () => {
    setIceServers(await getIceServers(configManager.meteredApiKey));
  }, []);
  useEffect(() => {
    const listener = () => {
      setActive(location.hash.replace('#', ''));
    };
    addEventListener('hashchange', listener);
    addEventListener('popstate', listener);
    return () => {
      removeEventListener('hashchange', listener);
      removeEventListener('popstate', listener);
    };
  }, []);

  let content = <Config />;
  if (active === 'server') {
    content = <Server iceServers={iceServers} />;
  } else if (active === 'client') {
    content = <ClientPicker iceServers={iceServers} />;
  }
  return (
    <div class="container">
      <div class="box">
        <Nav active={active} onTabClick={onTabClick} />
        {content}
      </div>
    </div>
  );
}
