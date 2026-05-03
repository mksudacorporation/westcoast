# WEST COAST.AM プロジェクト まとめ

## 概要
WEST COAST.AMは、カリフォルニア西海岸スタイルのエクステリア・外構工事を専門とする会社のWebサイトです。

## 変更内容
プレースホルダー画像（`.ph-img` クラスによるCSS背景）から、`<img>`タグを使用した実画像表示形式に全ファイルを修正しました。

---

## ディレクトリ構成

```
.
├── css/
│   └── style.css          # メインスタイルシート
├── fonts/
│   └── PermanentMarker.ttf # カスタムフォント
├── img/                    # 画像ディレクトリ（以下の画像が必要）
│   ├── favicon.webp
│   ├── og-image.webp
│   ├── hero-slide-01.jpg
│   ├── hero-slide-02.jpg
│   ├── hero-slide-03.jpg
│   ├── hero-slide-04.jpg
│   ├── welcome-image.jpg
│   ├── gallery-01.jpg ~ gallery-09.jpg
│   ├── company-exterior.jpg
│   ├── page-hero-about.jpg
│   ├── page-hero-area.jpg
│   ├── page-hero-company.jpg
│   ├── page-hero-contact.jpg
│   ├── page-hero-gallery.jpg
│   ├── page-hero-service.jpg
│   ├── page-hero-privacy.jpg
│   ├── promise-01.jpg ~ promise-04.jpg
│   ├── service-exterior.jpg
│   ├── service-garden.jpg
│   ├── service-construction.jpg
│   └── service-maintenance.jpg
├── js/
│   └── common.js           # 共通JavaScript
├── text/
│   └── matome.md           # プロジェクトまとめ
├── about-us.html           # About Usページ
├── area.html               # 対応エリアページ
├── company.html            # 会社概要ページ
├── contact.html            # お問い合わせページ
├── gallery.html            # ギャラリーページ
├── index.html              # トップページ
├── privacy-policy.html     # プライバシーポリシーページ
├── service.html            # サービスページ
└── sitemap.xml             # サイトマップ
```

---

## ファイル役割

### HTMLファイル

| ファイル | 役割 |
|---------|------|
| `index.html` | トップページ。ヒーロースライダー、会社紹介、ギャラリーサムネイル、エリア情報、お問い合わせCTA等を含む |
| `about-us.html` | 会社コンセプト、4つの約束（Promise）、ワークフロー（Work Flow）を紹介 |
| `area.html` | 対応エリアの説明とマップ表示 |
| `company.html` | 会社概要テーブルとGoogle Maps埋め込み |
| `contact.html` | お問い合わせフォーム |
| `gallery.html` | 施工事例ギャラリー（9件） |
| `service.html` | サービス内容詳細（エクステリア、ガーデニング、外構工事、メンテナンス） |
| `privacy-policy.html` | プライバシーポリシー |

### CSS/JSファイル

| ファイル | 役割 |
|---------|------|
| `css/style.css` | 全ページ共通スタイル。VHS/レトロエフェクト、レスポンシブ対応含む |
| `js/common.js` | ローダー、ヘッダースクロール、ヒーロースライダー、モバイルナビ、FAQアコーディオン、スクロールリビール等の機能 |

---

## 依存関係

### 外部フォント（Google Fonts）
- Bebas Neue
- DM Sans
- Playfair Display
- Zen Kaku Gothic New
- Press Start 2P（レトロピクセル用）
- Material Symbols Outlined（アイコン）

### ローカルフォント
- `fonts/PermanentMarker.ttf` → `Derick Skone` として使用

### 外部サービス
- Google Maps Embed API（company.html, index.html）
- LINE（お問い合わせリンク）
- Instagram / Pinterest（SNSリンク）

---

## 必要な画像ファイル一覧

以下の画像ファイルを `/img/` ディレクトリに配置する必要があります：

### ヒーロースライダー（トップページ）
- `hero-slide-01.jpg` - カリフォルニアスタイルの施工例
- `hero-slide-02.jpg` - エクステリアデザイン施工例
- `hero-slide-03.jpg` - プレミアム品質の外構
- `hero-slide-04.jpg` - 西海岸スタイルの暮らし

### ウェルカムセクション
- `welcome-image.jpg` - 施工イメージ（縦長 4:5推奨）

### ギャラリー
- `gallery-01.jpg` ～ `gallery-09.jpg` - 施工事例（4:3推奨）

### 会社セクション
- `company-exterior.jpg` - オフィス外観（4:3推奨）

### ページヒーロー画像
- `page-hero-about.jpg`
- `page-hero-area.jpg`
- `page-hero-company.jpg`
- `page-hero-contact.jpg`
- `page-hero-gallery.jpg`
- `page-hero-service.jpg`
- `page-hero-privacy.jpg`

### 約束（Promise）セクション
- `promise-01.jpg` ～ `promise-04.jpg` （3:2推奨）

### サービスセクション
- `service-exterior.jpg` - エクステリアデザイン
- `service-garden.jpg` - ガーデニング・植栽
- `service-construction.jpg` - 外構工事
- `service-maintenance.jpg` - メンテナンス

### OGP/ファビコン
- `og-image.webp` - OGP画像
- `favicon.webp` - ファビコン

---

## CSSクラス（画像関連）

| クラス | 用途 |
|-------|------|
| `.img-cover` | `object-fit: cover` で親要素を埋める |
| `.img-contain` | `object-fit: contain` でアスペクト比を維持 |
| `.img-placeholder` | 画像読み込み失敗時のフォールバック表示 |

---

## 注意事項

1. **画像形式**: JPGまたはWebP推奨
2. **画像サイズ**: 適切に圧縮すること（特にヒーロー画像は1920px幅程度）
3. **アスペクト比**: 各セクションの推奨比率に従うこと
4. **alt属性**: 日本語で適切に設定済み

---

## 更新日
2026年2月22日
