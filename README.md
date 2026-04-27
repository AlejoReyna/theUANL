# SIASE Plus

Chrome Extension Manifest V3 for modernizing the UANL SIASE portal at `https://deimos.dgi.uanl.mx`.

## Features

- Modern reskin for SIASE `top`, `left`, and `center` frames.
- Popup dashboard with cached grades and schedule.
- Grade-change notifications from a background service worker.
- Schedule parsing and `.ics` export.
- Searchable, categorized, pinnable sidebar menu.

## Setup

```bash
npm install
npm run dev
```

Load the generated extension in Chrome from `chrome://extensions` using **Load unpacked** and select the Vite/CRXJS development output.

## Build

```bash
npm run build
```

## Test

```bash
npm test
```

## Architecture Notes

SIASE is a server-rendered OpenEdge/WebSpeed CGI application with a root `frameset`. All frame content is same-origin, so content scripts can coordinate state across `top`, `left`, and `center` frames. Session data is carried in query-string parameters.
