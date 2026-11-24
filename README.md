# BrowserUtil

**Online Developer & Productivity Tools inside Your Browser**

[English](README.md) · [简体中文](README.zh-CN.md)

🌐 <https://browserutil.com> · 🇨🇳 中文版：<https://browserutil.com/zh/>

BrowserUtil is a collection of small, focused utilities for developers and everyday computer
users — text diffing, word counting, formatters, converters and more. Every tool runs **entirely
inside your browser tab**: no sign-up, no upload, no server round-trip.

---

## Why BrowserUtil

| | |
| --- | --- |
| 🔒 **Private by design** | All computation happens locally in JavaScript. Your text and files never leave your device. |
| 🆓 **Free, no account** | Open a page and start working. No login, no quota, no paywall. |
| ⚡ **Instant** | Results update as you type — diffing and counting run on the spot, with no network latency. |
| 📴 **Works offline** | Once loaded, tools keep working without a connection. |
| 🌏 **Bilingual** | Full English and 简体中文 interfaces, each with its own URL, canonical and hreflang tags. |
| 📦 **Zero install** | Nothing to download or configure — it is just a static site. |

---

## Tools

### Live now

| Tool | What it does |
| --- | --- |
| [**Text Compare**](https://browserutil.com/text-compare) | Line-by-line diff of two text blocks with aligned line numbers, side-by-side or unified view, character-level highlighting inside changed lines, `ignore case` / `ignore whitespace` / `trim lines` options, and a similarity score with added, removed and changed counts. |
| [**Word Count**](https://browserutil.com/word-count) | Real-time characters, characters without spaces, words, CJK characters, lines, paragraphs, sentences, UTF-8 / UTF-16 byte size, unique words, average word length, reading and speaking time (200 wpm), plus a top-10 most-frequent-words list. |

Browse everything: <https://browserutil.com/tools>

### Coming soon

- **Text** — Case Converter · Sort & Deduplicate Lines · Slug Generator
- **Developer** — JSON Formatter · Base64 Encode / Decode · Regex Tester · Timestamp Converter · URL Encode / Decode · Hash Generator (MD5 / SHA-1 / SHA-256)
- **Image** — Image Compressor (JPEG / PNG / WebP) · QR Code Generator · Color Converter (HEX / RGB / HSL)
- **Everyday** — Password Generator · Unit Converter · Time Zone Converter

Unreleased tools are listed in the directory as *Coming soon*; no empty pages are published.

---

## Privacy

BrowserUtil has no backend for tool input. There is no analytics on your content, no cookies
required to use a tool, and nothing you paste is transmitted anywhere. The only client-side
storage used is `localStorage['browserutil-lang']`, which remembers your language choice.

---

## About this repository

This repository contains the **built static output** of BrowserUtil (`dist/`), published to
GitHub Pages and served at <https://browserutil.com>. It is generated automatically by CI from
the source repository (`BrowserUtil/BrowserUtil`) on every push to `main`, so please do not edit
these files by hand — changes here will be overwritten by the next deploy.

Found a problem with a tool, or want to suggest one? Open an issue in this repository.

---

© BrowserUtil · Online Developer & Productivity Tools inside Your Browser
