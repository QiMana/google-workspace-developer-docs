---
source: https://developers.google.com/workspace/gmail/api/guides/language-settings
root: workspace
fetched_at: 2026-04-23T15:28:51.786Z
---

# Manage language settings

This document explains how to manage language settings using the Gmail API.

You can use the [`settings`](../reference/rest/v1/users.settings.md) resource to configure language settings for an account, which sets the display language for Gmail.

## Configure languages

The [`settings.getLanguage`](../reference/rest/v1/users.settings/getLanguage.md) and [`settings.updateLanguage`](../reference/rest/v1/users.settings/updateLanguage.md) methods on the [`settings`](../reference/rest/v1/users.settings.md) resource use a [`LanguageSettings`](../reference/rest/v1/LanguageSettings.md) object. The [`displayLanguage`](../reference/rest/v1/LanguageSettings.md#FIELDS.display_language) field of the `LanguageSettings` object sets the display language for Gmail. The format of the display language is in [RFC 3066 language tag format](https://www.ietf.org/rfc/rfc3066.txt).

Not all Gmail clients can display the same set of languages. If a user's display language is unavailable on a specific client, the Gmail client automatically chooses the closest supported variant or a reasonable default.

## Language set

The set of supported languages evolves over time. For more information on how to find the list of languages in Gmail, see [Change your Gmail language settings](https://support.google.com/mail/answer/17091).

The following table shows a sample of potential language values:

| Language (English) | Language (in Gmail settings) | Tag (RFC 3066) |
| --- | --- | --- |
| Afrikaans | Afrikaans | `af` |
| Azerbaijani | Azərbaycanca | `az` |
| Indonesian | Bahasa Indonesia | `id` |
| Malay | Bahasa Melayu | `ms` |
| Catalan | Català | `ca` |
| Czech | Český | `cs` |
| Welsh | Cymraeg | `cy` |
| Danish | Dansk | `da` |
| German | Deutsch | `de` |
| Estonian | Eesti keel | `et` |
| English (UK) | English (UK) | `en-GB` |
| English | English (US) | `en` |
| Spanish | Español | `es` |
| Spanish (LatAm) | Español (Latinoamerica) | `es-419` |
| Basque | Euskara | `eu` |
| Filipino | Filipino | `fil` |
| French | Français | `fr` |
| French (Canada) | Français (Canada) | `fr-CA` |
| Irish | Gaeilge | `ga` |
| Gallegan | Galego | `gl` |
| Croatian | Hrvatski | `hr` |
| Italian | Italiano | `it` |
| Zulu | IsiZulu | `zu` |
| Icelandic | Íslenska | `is` |
| Swahili | Kiswahili | `sw` |
| Latvian | Latviešu | `lv` |
| Lithuanian | Lietuvių | `lt` |
| Hungarian | Magyar | `hu` |
| Norwegian | Norsk (Bokmål) | `no` |
| Dutch | Nederlands | `nl` |
| Polish | Polski | `pl` |
| Portuguese (BR) | Português (Brasil) | `pt-BR` |
| Portuguese (PT) | Português (Portugal) | `pt-PT` |
| Romanian | Română | `ro` |
| Slovak | Slovenský | `sk` |
| Slovenian | Slovenščina | `sl` |
| Finnish | Suomi | `fi` |
| Swedish | Svenska | `sv` |
| Vietnamese | Tiếng Việt | `vi` |
| Turkish | Türkçe | `tr` |
| Greek | Ελληνικά | `el` |
| Bulgarian | Български | `bg` |
| Mongolian | Монгол | `mn` |
| Russian | Русский | `ru` |
| Serbian | Српски | `sr` |
| Ukrainian | Українська | `uk` |
| Armenian | Հայերեն | `hy` |
| Hebrew | עברית | `he` |
| Urdu | اردو | `ur` |
| Arabic | العربية | `ar` |
| Persian | فارسی | `fa` |
| Nepali | नेपाली (Nepali) | `ne` |
| Marathi | मराठी | `mr` |
| Hindi | हिन्दी | `hi` |
| Bengali | বাংলা | `bn` |
| Gujarati | ગુજરાતી | `gu` |
| Tamil | தமிழ் | `ta` |
| Telugu | తెలుగు | `te` |
| Kannada | ಕನ್ನಡ | `kn` |
| Malayalam | മലയാളം | `ml` |
| Sinhalese | සිංහල (Sinhala) | `si` |
| Thai | ภาษาไทย | `th` |
| Lao | ພາສາລາວ (Lao) | `lo` |
| Burmese | မြန်မာဘာသာ (Myanmar language) | `my` |
| Georgian | ქართული | `ka` |
| Amharic | አማርኛ (Amharic) | `am` |
| Cherokee | ᏣᎳᎩ (Cherokee) | `chr` |
| Khmer | ភាសាខ្មែរ (Khmer) | `km` |
| Chinese (HK) | 中文 (香港) | `zh-HK` |
| Chinese (China) | 中文 (简体) | `zh-CN` |
| Chinese (Taiwan) | 中文 (繁體) | `zh-TW` |
| Japanese | 日本語 | `ja` |
| Korean | 한국어 | `ko` |
