---
source: https://developers.google.com/workspace/vault/reference/rest/v1/CountArtifactsResponse
root: workspace
fetched_at: 2026-04-23T15:32:04.659Z
---

# CountArtifactsResponse

Definition of the response for method matters.count.

JSON representation

```
{
  "totalCount": string,

  "mailCountResult": {
    object (MailCountResult)
  },
  "groupsCountResult": {
    object (GroupsCountResult)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>totalCount</code></td><td><p><code>string (int64 format)</code></p><p>Total count of messages.</p></td></tr><tr><td colspan="2">Union field <code>corpus_count_result</code>. Detailed count metrics for specific services. <code>corpus_count_result</code> can be only one of the following:</td></tr><tr><td><code>mailCountResult</code></td><td><p><code>object (<code>MailCountResult</code>)</code></p><p>Count metrics for Gmail and classic Hangouts.</p></td></tr><tr><td><code>groupsCountResult</code></td><td><p><code>object (<code>GroupsCountResult</code>)</code></p><p>Count metrics for Groups.</p></td></tr></tbody></table>

## MailCountResult

Gmail and classic Hangouts-specific count metrics.

JSON representation

```
{
  "queriedAccountsCount": string,
  "matchingAccountsCount": string,
  "nonQueryableAccounts": [
    string
  ],
  "accountCountErrors": [
    {
      object (AccountCountError)
    }
  ],
  "accountCounts": [
    {
      object (AccountCount)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>queriedAccountsCount</code></td><td><p><code>string (int64 format)</code></p><p>Total number of accounts involved in this count operation.</p></td></tr><tr><td><code>matchingAccountsCount</code></td><td><p><code>string (int64 format)</code></p><p>Total number of accounts that can be queried and have more than zero messages.</p></td></tr><tr><td><code>nonQueryableAccounts[]</code></td><td><p><code>string</code></p><p>When <strong>DataScope</strong> is <strong>HELD_DATA</strong> and when account emails are passed in explicitly, the list of accounts in the request that are not queried because they are not on hold in the matter. For other data scopes, this field is not set.</p></td></tr><tr><td><code>accountCountErrors[]</code></td><td><p><code>object (<code>AccountCountError</code>)</code></p><p>Errors occurred when querying these accounts.</p></td></tr><tr><td><code>accountCounts[]</code></td><td><p><code>object (<code>AccountCount</code>)</code></p><p>Subtotal count per matching account that have more than zero messages.</p></td></tr></tbody></table>

## GroupsCountResult

Groups specific count metrics.

JSON representation

```
{
  "queriedAccountsCount": string,
  "matchingAccountsCount": string,
  "nonQueryableAccounts": [
    string
  ],
  "accountCountErrors": [
    {
      object (AccountCountError)
    }
  ],
  "accountCounts": [
    {
      object (AccountCount)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>queriedAccountsCount</code></td><td><p><code>string (int64 format)</code></p><p>Total number of accounts involved in this count operation.</p></td></tr><tr><td><code>matchingAccountsCount</code></td><td><p><code>string (int64 format)</code></p><p>Total number of accounts that can be queried and have more than zero messages.</p></td></tr><tr><td><code>nonQueryableAccounts[]</code></td><td><p><code>string</code></p><p>When <strong>DataScope</strong> is <strong>HELD_DATA</strong>, these accounts in the request are not queried because they are not on hold. For other data scope, this field is not set.</p></td></tr><tr><td><code>accountCountErrors[]</code></td><td><p><code>object (<code>AccountCountError</code>)</code></p><p>Error occurred when querying these accounts.</p></td></tr><tr><td><code>accountCounts[]</code></td><td><p><code>object (<code>AccountCount</code>)</code></p><p>Subtotal count per matching account that have more than zero messages.</p></td></tr></tbody></table>
