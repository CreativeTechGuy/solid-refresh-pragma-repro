# solid-refresh-pragma-repro

## Setup

* `npm ci`

## Issue Summary

> If `// @refresh reload` is present in the entry point, it will not work, if it's moved to another file all else being identical, it works as expected.

https://github.com/solidjs/solid-refresh/issues/22

## Repro Steps

* `npm run start:broken`
    * Open `broken/src/index.tsx` in your editor
    * Make a change to the JSX
    * See the browser HMR, now there's a duplicate button added. Every HMR will add another button
* `npm run start:working`
    * Open `working/src/indirection.tsx` - All of the content from `index.tsx` has been copied to `working/src/indirection.tsx`
    * Make a change to the JSX
    * See the browser HMR then do a full page reload. Now there aren't duplicate buttons after each reload.