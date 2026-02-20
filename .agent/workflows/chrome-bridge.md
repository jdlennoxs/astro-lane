---
description: Set up the WSL2-to-Chrome CDP bridge for browser testing
---

# WSL2 → Chrome Browser Bridge

This workflow connects the Antigravity browser tools to a Chrome instance running on the Windows host.

## Prerequisites
- Chrome installed on Windows
- `socat` installed in WSL (`sudo apt install socat`)

## Steps

1. **Launch Chrome on Windows with remote debugging enabled.** Run this from WSL — it starts Chrome on the Windows side with CDP on port 9222:

```bash
/mnt/c/Program\ Files/Google/Chrome/Application/chrome.exe --remote-debugging-port=9222 &
```

> If Chrome is already running, you must close ALL Chrome windows first, or use a separate Chrome profile:
> ```bash
> /mnt/c/Program\ Files/Google/Chrome/Application/chrome.exe --remote-debugging-port=9222 --user-data-dir="C:\\Temp\\ChromeDebug" &
> ```

// turbo
2. **Get the Windows host gateway IP and start the socat port forward:**

```bash
WIN_HOST=$(ip route show default | awk '{print $3}') && \
echo "Windows host IP: $WIN_HOST" && \
socat TCP-LISTEN:9222,fork,reuseaddr TCP:${WIN_HOST}:9222 &
```

This forwards WSL's localhost:9222 → Windows host:9222 where Chrome is listening.

// turbo
3. **Verify the bridge is working:**

```bash
curl -s http://127.0.0.1:9222/json/version | head -5
```

You should see JSON output with `Browser`, `Protocol-Version`, and `webSocketDebuggerUrl` fields. If you get `Connection refused`, wait a moment for Chrome to finish starting and retry.

## Teardown

To stop the bridge:
```bash
pkill -f "socat TCP-LISTEN:9222"
```
