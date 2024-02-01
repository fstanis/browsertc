import { h } from 'preact';
import { ConfigManager } from '../ConfigManager';

const configManager = new ConfigManager();

export function Config({ isOpen, onClose }) {
  const updateField = (e) => {
    configManager[e.currentTarget.name] = e.currentTarget.value;
  };
  return (
    <div>
      <div class="field">
        <label class="label">WebDav URL</label>
        <div class="control">
          <input
            class="input"
            type="url"
            name="webDavUrl"
            placeholder="https://webdav.example/folder"
            value={configManager.webDavUrl}
            onInput={updateField}
          />
        </div>
      </div>

      <div class="field">
        <label class="label">WebDav username</label>
        <div class="control">
          <input
            class="input"
            type="text"
            name="webDavUsername"
            value={configManager.webDavUsername}
            onInput={updateField}
          />
        </div>
      </div>

      <div class="field">
        <label class="label">WebDav password</label>
        <div class="control">
          <input
            class="input"
            type="password"
            name="webDavPassword"
            value={configManager.webDavPassword}
            onInput={updateField}
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Device name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            name="deviceId"
            value={configManager.deviceId}
            onInput={updateField}
          />
        </div>
      </div>

      <div class="field">
        <label class="label">metered.ca API key</label>
        <div class="control">
          <input
            class="input"
            type="text"
            name="meteredApiKey"
            value={configManager.meteredApiKey}
            onInput={updateField}
          />
        </div>
      </div>
    </div>
  );
}
