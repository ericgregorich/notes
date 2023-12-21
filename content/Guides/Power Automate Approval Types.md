---
tags:
  - power-automate
---
[[Microsoft Power Automate]] has two main Approval Types.

1. Everyone must approve - All approvers must approve.
2. First to respond - Requires approval from one approver. 

## First to respond

![[Microsoft Power Automate Approval Types-20231127112149691.webp]]


When one approver approves (or rejects), their approval task is marked as Approved (or Rejected) and moved to history. The approval tasks for the other Approvers are also marked as Approved (or Rejected) and moved to history. If any approvers look at that approval task, it will show a message saying the task has already been completed. No notification is sent.

Only one approver must approve (or Reject).

## Everyone must approve

![[Microsoft Power Automate Approval Types-20231127112217916.webp]]

When one approver approves, their approval task is marked as Approved and moved to history. The other approval tasks remain pending. All tasks must be approved before the workflow continues to the following action. However, if any approvers reject their task, all of the approval tasks are marked as Rejected and moved to history. Then, the following action in the workflow is triggered.
