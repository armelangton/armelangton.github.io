# Palomma Services Page Blueprint

Status: Working blueprint for review
Branch: `experiment/pricing-engagements-redesign`

## What we are modeling

Palomma should follow Interprogram's actual page system, not a loose interpretation of it.

The model has two distinct layers:

1. A **Services overview page** made of clickable service cards.
2. A separate **detail page for every service** with substantially more information.

The overview page creates curiosity and helps visitors choose where to go. The individual page does the explaining and selling.

## Services overview page

### Hero

A concise page title, short introduction, and one primary action.

The hero should not try to explain every service.

### Clickable service-card grid

Each service appears as a compact clickable card, similar to Interprogram's Services page.

Every card should include:

- Small icon
- Service name
- Two- or three-line description
- Starting price or pricing language when approved
- Typical timeline when useful
- Clear `View Details` action

The entire card should link to the related detail page, not just the button.

### Core cards

#### AI & Operations Assessment

Future page: `/services/ai-operations-assessment.html`

#### Workflow Sprint

Future page: `/services/workflow-sprint.html`

#### Managed AI Agents

Future page: `/services/managed-ai-agents.html`

#### Custom AI & Automation

Future page: `/services/ai-automation.html`

#### Business Applications

Future page: `/services/business-applications.html`

The final grid arrangement should be based on visual balance and the approved number of services. We should not add extra cards only to fill a row.

### Supporting services or capabilities

Supporting capabilities can appear as a secondary card group only when they deserve their own detail pages. They should not be added as decorative labels beneath the primary services.

Potential supporting pages to review later:

- CRM and Revenue Operations
- Revenue Enablement and Adoption
- Business Process Improvement
- Ongoing Advisory or Optimization

### Closing section

After the service grid, include a simple next-step section for visitors who do not know which service fits.

Primary action: Schedule a Discovery Session

## Individual service-page model

Each service card opens a dedicated page modeled closely on Interprogram's detail-page structure.

### 1. Service hero

Include:

- Service name
- Clear outcome-focused headline
- Short explanation
- Primary CTA

### 2. Main content and package-details sidebar

Use a two-column desktop layout.

The main column contains the detailed service explanation.

The right column contains a compact, sticky package-details card with items such as:

- Starting investment
- Typical timeline
- Primary booking or scoping CTA
- Brief fixed-scope note

On mobile, the package-details card stacks naturally within the page.

### 3. Who it is for

A concise explanation of the type of company, problem, or level of complexity that fits the service.

### 4. Common examples

Use concrete business examples so visitors can recognize their own situation.

This should be a short list, not an exhaustive feature catalog.

### 5. What we build or deliver

Use a small set of visual blocks similar to Interprogram's four-block treatment.

Possible categories depend on the service. For example, a workflow page may include:

- Workflow map
- Connected automation
- AI assist layer
- Human control layer

The labels must reflect the actual service and should not be reused mechanically across every page.

### 6. Scope or safeguard note

Include a brief highlighted note when needed to explain an important boundary, approval requirement, ownership principle, or fixed-scope condition.

### 7. Typical build path

Show a simple numbered progression, usually three or four steps.

This should use the relevant portion of Palomma's established process rather than inventing a new methodology.

### 8. Related next steps

Use two compact pathways near the end of the main content, similar to Interprogram's related-service choices.

Examples:

- Start with an AI & Operations Assessment
- Talk through the workflow

### 9. Common questions

A focused FAQ section specific to that service.

Questions should address the concerns that would prevent someone from booking or requesting a scope.

### 10. Closing CTA

End with one clear next action.

## Visual rules

- Use Palomma's existing visual identity, not Interprogram's colors or branding.
- Copy Interprogram's information architecture and interaction pattern.
- Keep the overview cards concise.
- Put substantial detail on the individual service pages.
- Make cards obviously clickable.
- Use consistent page templates so visitors quickly learn how the site works.
- Avoid turning the Services overview into a long narrative page.
- Avoid placing the complete details for every service on one page.

## Existing wording to recover

Before coding, recover and review the strongest existing wording for:

- Service names
- Card summaries
- Approved prices and timelines
- Individual service descriptions
- Scope boundaries
- CTA language

The page structure is now corrected. The next implementation should create the clickable Services overview first, followed by one fully developed service detail page as the template for the rest.
