import { h } from 'preact';

export function ConfigError() {
  return (
    <article class="message is-warning">
      <div class="message-header">
        <p>Config error</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">Missing or invalid config.</div>
    </article>
  );
}
