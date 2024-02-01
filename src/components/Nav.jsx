import { h } from 'preact';

export function Nav({ active, onTabClick }) {
  return (
    <div class="tabs is-centered is-boxed is-medium">
      <ul>
        <li
          class={active !== 'client' && active !== 'server' ? 'is-active' : ''}
        >
          <a onClick={() => onTabClick('config')}>
            <span class="icon is-small">
              <i class="fas fa-image" aria-hidden="true"></i>
            </span>
            <span>Config</span>
          </a>
        </li>
        <li class={active === 'server' ? 'is-active' : ''}>
          <a onClick={() => onTabClick('server')}>
            <span class="icon is-small">
              <i class="fas fa-music" aria-hidden="true"></i>
            </span>
            <span>Server</span>
          </a>
        </li>
        <li class={active === 'client' ? 'is-active' : ''}>
          <a onClick={() => onTabClick('client')}>
            <span class="icon is-small">
              <i class="fas fa-film" aria-hidden="true"></i>
            </span>
            <span>Client</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
