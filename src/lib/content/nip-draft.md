## _This NIP is currently in PR/Draft state at [nostr-protocol/nips](https://github.com/nostr-protocol/nips/pull/1714)_

---

NIP-33400
========

Catallax: Contract Work Protocol
----------------------------------------------

`draft` `optional`

This NIP defines a set of event kinds for implementing "Catallax", a decentralized contract work system that facilitates connections between patrons (who need work done), free agents (who perform the work), and arbiters (who ensure work meets requirements and handle payments).

## Abstract

Catallax enables decentralized contract work through a simple escrow system built on Nostr. It defines two parameterized replaceable event kinds (33400, 33401) and one regular event kind (3402) that allow arbiters to advertise their services, patrons to create task proposals, and arbiters to conclude tasks with payment confirmation. The system keeps communication on Nostr while leveraging Lightning or other payment systems for the actual value transfer.

## Specification

### Overview of the Workflow

1. Arbiters advertise their services with kind 33400 events, specifying fee structure and expertise
2. Patrons create task proposals with kind 33401 events. They coordinate with arbiters out band and find one to accept their task, at which point they replace their event with the update.
3. Patrons fund the escrow by sending payment to the arbiter
4. Patrons update their task proposal to "funded" status and reference the payment
5. Free agents apply for and discuss tasks with patrons out of band
6. Patrons assign a free agent to their task
7. Free agents submit completed work, either to the arbiter or to the patron. This protocol doesn't care.
8. Arbiters (or Patrons) judge the work and the Arbiter either pays the free agent or refunds the patron
9. Arbiters conclude the task with a kind 3402 event, referencing the payment receipt

### Kind 33400: Arbiter Announcement

**Parameterized replaceable event** that advertises arbiter services.

```json
{
  "kind": 33400,
  "content": {
    "name": "String: title of the service",
    "about": "String (optional): additional service details",
    "policy_text": "String (optional): full text of any relevant policies (dispute, terms, etc.)",
    "policy_url": "String (optional): URL to policy document"
  },
  "tags": [
    ["d", "<identifier for this specific arbiter service>"],
    ["p", "<arbiter-pubkey>", "<optional recommended relay URL>"],
    ["r", "<string (optional); arbiter details web URL>"],
    ["t", "<service category; string (optional)>"],
    ["t", "<additional service categories (optional)>"],
    ["fee_type", "<flat|percentage>"],
    ["fee_amount", "<amount in sats if flat or decimal 0.0-1.0 if percentage>"],
    ["min_amount", "<optional minimum task bounty in sats>"],
    ["max_amount", "<optional maximum task bounty in sats>"]
  ]
}
```

#### Tags:

- `d`: Unique identifier for this specific arbiter service configuration
- `p`: The arbiter's public key
- `r`: Optional web URL with more details about the arbiter
- `t`: Service categories the arbiter specializes in (e.g., "programming", "design", "writing")
- `fee_type`: Either "flat" or "percentage"
- `fee_amount`: 
  - If flat: amount in satoshis (e.g., "10000" for 10,000 sats)
  - If percentage (of total task bounty): decimal between 0.0 and 1.0 (e.g., "0.05" for 5%)
- `min_amount`: Optional minimum task value in satoshis
- `max_amount`: Optional maximum task value in satoshis

### Kind 33401: Task Proposal

**Parameterized replaceable event** that defines a work task with requirements and payment terms.

```json
{
  "kind": 33401,
  "content": {
    "title": "String: concise task title",
    "description": "String: detailed task description",
    "requirements": "String: specific deliverable requirements",
    "deadline": "Unix timestamp in seconds (optional)"
  },
  "tags": [
    ["d", "<unique task identifier>"],
    ["p", "<patron-pubkey>", "<optional recommended relay URL>"],
    ["p", "<arbiter-pubkey>", "<optional recommended relay URL>"],
    ["p", "<worker-pubkey (added when in progress)>", "<optional recommended relay URL>"],
    ["a", "33400:<arbiter-pubkey>:<d-tag-value-of-arbiter-service>", "<relay-url>"],
    ["amount", "<integer in sats>"],
    ["t", "<task category (optional)>"],
    ["t", "<additional task categories (optional)>"],
    ["status", "<proposed|funded|in_progress|submitted|concluded>"],
    ["e", "<event-id of zap receipt when escrow funded>", "<relay-url>", "zap"],
    ["r", "<string (optional); task details web URL>"]
  ]
}
```

#### Tags:

- `d`: Unique identifier for this task
- `p`: Multiple p tags:
  - Patron's public key
  - Arbiter's public key
  - Worker's public key (added when a worker is assigned and task is in progress)
- `a`: Reference to the arbiter's service announcement
- `amount`: Total task payment amount in satoshis
- `t`: Task categories (e.g., "website", "logo", "marketing")
- `status`: Current task status
  - `proposed`: Initial task proposal
  - `funded`: Escrow has been funded by patron
  - `in_progress`: Free Agent has been assigned, work has begun
  - `submitted`: Work has been submitted for review
  - `concluded`: Task is complete, payment has been made
- `e` with marker "zap": Reference to a zap receipt event (kind 9735) when the task is funded
- `r`: Optional web URL with more details about the task

### Kind 3402: Task Conclusion

**Regular event** (not replaceable) that documents the resolution of a task.

```json
{
  "kind": 3402,
  "content": {
    "resolution_details": "String: description of the task outcome and resolution"
  },
  "tags": [
    ["e", "<payout-zap-receipt-event-id>", "<optional recommended relay URL>"],
    ["e", "<task-proposal-event-id>", "<optional recommended relay URL>"],
    ["p", "<patron-pubkey>", "<optional recommended relay URL>"],
    ["p", "<arbiter-pubkey>", "<optional recommended relay URL>"],
    ["p", "<worker-pubkey>", "<optional recommended relay URL>"],
    ["resolution", "<successful|rejected|cancelled|abandoned>"],
    ["a", "33401:<patron-pubkey>:<d-tag-value-of-task>", "<relay-url>"]
  ]
}
```

#### Tags:

- `e`: References:
  - Payout zap receipt event
  - Task proposal event 
- `p`: Multiple p tags for all parties involved:
  - Patron's public key
  - Arbiter's public key
  - Worker's public key
- `resolution`: Final status of the task
  - `successful`: Work was accepted and payment sent to worker
  - `rejected`: Work did not meet requirements, payment returned to patron
  - `cancelled`: Task was cancelled before completion
  - `abandoned`: Worker abandoned the task, payment returned to patron
- `a`: Addressable reference to the task proposal

## Client Behavior

### Basic Client Requirements

Clients implementing Catallax should:

1. Enable users to view, filter, and search for arbiter announcements
2. Allow patrons to create, edit, and manage task proposals
3. (Optionally) facilitate communication between patrons and free agents
4. Track task status changes
5. Display payment information
6. Implement appropriate handling of "d" tag identifiers

### "d" Tag Identifiers

For parameterized replaceable events (kinds 33400 and 33401), clients should follow these practices for "d" tag values:

1. Use descriptive, meaningful identifiers that relate to the content:
   - For arbiter services (33400): `service-category-name` (e.g., "web-dev-escrow", "design-arbiter")
   - For task proposals (33401): `task-name-slug` (e.g., "landing-page-design", "logo-creation")

2. Ensure uniqueness within a user's events of the same kind:
   - Default to a slug based on the service name or task title
   - Append a short timestamp or counter if needed to avoid collisions
   - Keep identifiers URL-safe, using only alphanumeric characters, hyphens, and underscores

3. Allow users to customize identifiers but validate uniqueness before publishing

These identifiers will be critical for maintaining referential integrity between services, tasks, and conclusions throughout the Catallax system.

### Arbiter Interfaces

Clients should enable arbiters to:

1. Create and manage service announcements (kind 33400)
2. View funded tasks that reference their services
3. Issue payments to workers or refunds to patrons
4. Document task conclusions (kind 3402)

### Patron Interfaces

Clients should enable patrons to:

1. Browse arbiter services
2. Create task proposals (kind 33401)
3. Fund escrow using the specified payment method
4. Update task status as appropriate
5. Assign workers to tasks

### Worker Interfaces

Clients should enable workers to:

1. Discover available tasks
2. Learn how to contact the patron and arbiter
3. Receive payments
4. Browse history of activity

## Relay Behavior

Relays are encouraged to support all three kinds (33400, 33401, and 3402). While kinds 33400 and 33401 are parameterized replaceable events, relays should:

1. Store all versions of each kind 33400 and 33401 event, even though only the latest version is considered active
   - This is helpful for dispute resolution and auditing purposes
   - Historical versions provide evidence of changes to service terms or task requirements
   - Timestamps in the history can prove when changes were made relative to agreements
2. Make historical versions available via appropriate filters (e.g., including deleted events)
3. Store all kind 3402 events as they are regular events
4. Support efficient querying by tags to enable discovery of available tasks and services

Note: While standard Nostr protocol behavior only requires storing the latest version of replaceable events, Catallax-specific relays can choose to maintain full history to ensure the integrity of the contracting system and enable dispute resolution. (This isn't a hard requirement, and it introduces overhead cost for the relay, but the cost may be offset in clever ways justified by the added auditing features.)

## Example Flow

1. **Arbiter announcement**:
   ```json
   {
     "kind": 33400,
     "content": {
       "name": "Web Development Escrow",
       "about": "Specialized in full-stack web development contract arbitration"
     },
     "tags": [
       ["d", "web-dev-escrow-service"],
       ["p", "8f34c7bf53de3a52b325e2cf10b52801dcb4a731e9e4fa7b9311434c7f6ec6af"],
       ["t", "programming"],
       ["t", "web development"],
       ["fee_type", "percentage"],
       ["fee_amount", "0.05"],
       ["min_amount", "100000"]
     ]
   }
   ```

2. **Task proposal (initial)**:
   ```json
   {
     "kind": 33401,
     "content": {
       "title": "Build a simple landing page",
       "description": "Create a responsive landing page for a small business",
       "requirements": "HTML/CSS/JS, responsive design, contact form, 3 sections"
     },
     "tags": [
       ["d", "landing-page-task-123"],
       ["p", "e9e4fa7b9311434c7f6ec6aff34c7bf53de3a52b325e2cf10b52801dcb4a731"],
       ["p", "8f34c7bf53de3a52b325e2cf10b52801dcb4a731e9e4fa7b9311434c7f6ec6af"],
       ["a", "33400:8f34c7bf53de3a52b325e2cf10b52801dcb4a731e9e4fa7b9311434c7f6ec6af:web-dev-escrow-service"],
       ["amount", "500000"],
       ["t", "web development"],
       ["status", "proposed"]
     ]
   }
   ```

3. **Task proposal (updated after funding)**:
   ```json
   {
     "kind": 33401,
     "content": {
       "title": "Build a simple landing page",
       "description": "Create a responsive landing page for a small business",
       "requirements": "HTML/CSS/JS, responsive design, contact form, 3 sections"
     },
     "tags": [
       ["d", "landing-page-task-123"],
       ["p", "e9e4fa7b9311434c7f6ec6aff34c7bf53de3a52b325e2cf10b52801dcb4a731"],
       ["p", "8f34c7bf53de3a52b325e2cf10b52801dcb4a731e9e4fa7b9311434c7f6ec6af"],
       ["a", "33400:8f34c7bf53de3a52b325e2cf10b52801dcb4a731e9e4fa7b9311434c7f6ec6af:web-dev-escrow-service"],
       ["amount", "500000"],
       ["t", "web development"],
       ["status", "funded"],
       ["e", "9f6ec6aff34c7bf53de3a52b325e2cf10b52801dcb4a731e9e4fa7b9311434c", "", "zap"]
     ]
   }
   ```

4. **Task proposal (updated after assigning worker)**:
   ```json
   {
     "kind": 33401,
     "content": {
       "title": "Build a simple landing page",
       "description": "Create a responsive landing page for a small business",
       "requirements": "HTML/CSS/JS, responsive design, contact form, 3 sections"
     },
     "tags": [
       ["d", "landing-page-task-123"],
       ["p", "e9e4fa7b9311434c7f6ec6aff34c7bf53de3a52b325e2cf10b52801dcb4a731"],
       ["p", "8f34c7bf53de3a52b325e2cf10b52801dcb4a731e9e4fa7b9311434c7f6ec6af"],
       ["p", "53de3a52b325e2cf10b52801dcb4a731e9e4fa7b9311434c7f6ec6aff34c7bf"],
       ["a", "33400:8f34c7bf53de3a52b325e2cf10b52801dcb4a731e9e4fa7b9311434c7f6ec6af:web-dev-escrow-service"],
       ["amount", "500000"],
       ["t", "web development"],
       ["status", "in_progress"],
       ["e", "9f6ec6aff34c7bf53de3a52b325e2cf10b52801dcb4a731e9e4fa7b9311434c", "", "zap"]
     ]
   }
   ```

5. **Task conclusion**:
   ```json
   {
     "kind": 3402,
     "content": {
       "resolution_details": "Task completed successfully, landing page delivered with all requirements met."
     },
     "tags": [
       ["e", "7bf53de3a52b325e2cf10b52801dcb4a731e9e4fa7b9311434c7f6ec6aff34c"],
       ["e", "b325e2cf10b52801dcb4a731e9e4fa7b9311434c7f6ec6aff34c7bf53de3a52"],
       ["p", "e9e4fa7b9311434c7f6ec6aff34c7bf53de3a52b325e2cf10b52801dcb4a731"],
       ["p", "8f34c7bf53de3a52b325e2cf10b52801dcb4a731e9e4fa7b9311434c7f6ec6af"],
       ["p", "53de3a52b325e2cf10b52801dcb4a731e9e4fa7b9311434c7f6ec6aff34c7bf"],
       ["resolution", "successful"],
       ["a", "33401:e9e4fa7b9311434c7f6ec6aff34c7bf53de3a52b325e2cf10b52801dcb4a731:landing-page-task-123"]
     ]
   }
   ```

## References

- [NIP-01: Basic protocol flow description](https://github.com/nostr-protocol/nips/blob/master/01.md)
- [NIP-57: Lightning Zaps](https://github.com/nostr-protocol/nips/blob/master/57.md)
- [NIP-23: Long-form Content](https://github.com/nostr-protocol/nips/blob/master/23.md)
