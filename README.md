# WEST COAST.AM

## 起動方法

```bash
cd /Users/maki/Desktop/WEST3
python3 -m http.server 8000
```

```text
http://localhost:8000/
```

## 前提

この README は、2026年4月15日時点のリポジトリ内容から逆算して作成しています。  
実装上確認できた範囲を基準にしており、未実装機能はそのまま明記しています。

## 概要

`WEST COAST.AM` は、群馬県伊勢崎市を拠点とするエクステリア・外構工事・ガーデニング事業者向けの静的コーポレートサイトです。  
カリフォルニア西海岸テイストを前面に出したブランドサイトとして構成されており、施工事例、サービス紹介、対応エリア、会社情報、お問い合わせ導線を提供します。

本リポジトリは、ビルド工程を持たない `HTML + CSS + JavaScript` の静的サイトです。

## 技術構成

- HTML
- CSS
- Vanilla JavaScript
- Google Fonts
- Material Symbols
- Google Maps 埋め込み

## ページ構成

| ファイル | 内容 |
| --- | --- |
| `index.html` | トップページ。ヒーロースライダー、About、Gallery、Message、Area、Contact、Company、地図を表示 |
| `about-us.html` | コンセプト、4つの約束、問い合わせから引き渡しまでの流れ |
| `service.html` | Exterior Design、Garden & Planting、Construction、Maintenance の紹介 |
| `gallery.html` | 施工事例ギャラリー |
| `area.html` | 対応エリア案内 |
| `company.html` | 会社概要テーブルと Google Maps |
| `contact.html` | 電話導線とお問い合わせ入力UI |
| `privacy-policy.html` | 個人情報の取り扱い |
| `sitemap.xml` | サイトマップ |

## 主な実装要素

- トップページのヒーロースライダー
- スクロールに応じたヘッダー状態変化
- ハンバーガーメニューとモバイルナビ
- Intersection Observer を使ったスクロールリビール
- ページトップへ戻るボタン
- モバイル向け固定フッター CTA
- OGP / canonical / JSON-LD による基本的な SEO 対応

## ディレクトリ構成

```text
.
├── about-us.html
├── area.html
├── company.html
├── contact.html
├── gallery.html
├── index.html
├── privacy-policy.html
├── service.html
├── sitemap.xml
├── css/
│   └── style.css
├── js/
│   └── common.js
├── fonts/
│   └── PermanentMarker.ttf
├── img/
│   └── 各種画像アセット
└── docs/
    └── project-summary.md
```

## ローカル確認方法

HTML 内の CSS / JS / 画像参照がルート相対パス (`/css/style.css` など) になっているため、`file://` 直開きではなくローカルサーバー経由で確認してください。

```bash
cd /Users/maki/Desktop/WEST3
python3 -m http.server 8000
```

ブラウザで以下を開きます。

```text
http://localhost:8000/
```

## 外部依存

- Google Fonts
- Material Symbols Outlined
- Google Maps Embed
- LINE 連絡先リンク
- Instagram / Pinterest リンク

## 現状の制約

### 1. お問い合わせフォームは静的 UI

`contact.html` には入力欄と送信ボタンがありますが、送信先連携は実装されていません。  
現状は見た目のみで、送信処理は行いません。

### 2. 一部の画像は暫定転用

サブページのヒーロー画像や一部セクション画像は、リポジトリ内に存在する既存アセットへ寄せて表示しています。  
専用画像が用意できた段階で差し替える前提です。

## 運用前に確認したい点

- サブページ専用画像の差し替え
- お問い合わせフォームの送信実装有無の整理
- 本番公開先での OGP 画像、favicon、canonical の確認
- 施工事例画像の差し替えルールの統一

## 想定用途

- 静的ホスティングへの配置
- 小規模なコーポレートサイト運用
- デザイン確認用モック、または納品前の静的実装ベース
