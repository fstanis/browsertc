import { h } from 'preact';

export function SyncData({ value, onChange, disabled }) {
  let link = '';
  value = value.trim();
  if (value.match(/^https?:/)) {
    link = (
      <a href={value} target="_blank">
        Open link
      </a>
    );
  }
  return (
    <div>
      <div class="field">
        <div class="control">
          <textarea
            class="textarea is-medium"
            value={value}
            onInput={(e) => onChange(e.currentTarget.value)}
            disabled={disabled}
          ></textarea>
        </div>
      </div>
      {link}
    </div>
  );
}
