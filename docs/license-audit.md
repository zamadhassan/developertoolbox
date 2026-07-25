# License Audit

This document records license findings before code or visual pattern adaptation.

## Audited Repositories

| Source     | License file                          | Finding                        | Production impact                                                                                                                                                                 |
| ---------- | ------------------------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IT Tools   | `it-tools-main/it-tools-main/LICENSE` | GNU GPL v3                     | Any adapted code must preserve GPLv3 obligations and notices. Do not present adapted upstream logic as wholly original.                                                           |
| Animate UI | `animate-ui-main/LICENSE.md`          | MIT + Commons Clause condition | Use only as selective reference unless direct adaptation is necessary. Do not sell or redistribute components themselves in original form. Preserve notice for direct adaptation. |
| Inspira UI | `inspira-ui-main/LICENSE`             | MIT                            | Visual ideas may be recreated manually. Preserve notice if code is copied or substantially adapted.                                                                               |
| Lenis      | `lenis-main/LICENSE`                  | MIT                            | Use the published Lenis package and preserve MIT notice.                                                                                                                          |

## IT Tools License Constraint

The source IT Tools project is licensed under GNU GPL v3. Because the new website is intended to preserve and migrate IT Tools functionality, the production project must retain GPLv3-compatible licensing unless legal counsel approves another approach. This audit does not provide legal advice.

## Notices Required

- `LICENSE` must include GPLv3-compatible licensing for this project.
- `THIRD_PARTY_NOTICES.md` must identify IT Tools and other directly reused or adapted dependencies.
- An `/open-source` page is required because upstream code and behavior are a material part of the project.

## Adaptation Log

| Source     | Adapted material                                                    | Status                                       |
| ---------- | ------------------------------------------------------------------- | -------------------------------------------- |
| IT Tools   | Tool inventory, categories, behavior references, future logic ports | Inventory only so far; logic not yet ported. |
| Animate UI | Interaction and animation patterns                                  | Reference only so far.                       |
| Inspira UI | Visual direction references                                         | Reference only so far.                       |
| Lenis      | Smooth scrolling integration approach                               | Reference only so far.                       |

## Open Items

- Confirm final project license with the owner before public deployment.
- Preserve upstream notices for every dependency and any copied/adapted source module.
- Review whether any IT Tools test fixtures are reused and document each instance.
