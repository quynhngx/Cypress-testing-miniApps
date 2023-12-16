# Cypress-testing-miniApps

This is a repo where I contain all the code for testing mini apps.
I practice on this page [QA Playaround Miniapps](https://qaplayground.dev/#apps).

## Run the project

## Lession learned after each practice

1/ Open New Tab

- **Require**: Open new tab by clicking on the button and assert text on the new opened page.
- **Lession learned**
  - Cypress typically operates within a single browser tab, and it doesn't have native support for handling elements in new tabs or windows. In order to prevent this, we use `.invoke()`, remove the target="\_blank" attribute from a link, preventing it from opening in a new tab.

```js
cy.get(".btn.btn-lg").invoke("removeAttr", "target").click();
```

- If the new opened page (child) has the same domain with its parents. Should not use `cy.origin()`

2/
