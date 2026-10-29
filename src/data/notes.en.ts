import type { Note } from "../types/portfolio";

/**
 * Field notes, English. These are short, first-person entries written from
 * real project work. They intentionally avoid invented numbers: every metric
 * here already exists in the matching case study.
 */
export const notes: Note[] = [
  {
    slug: "measure-twice-migrate-once",
    date: "2026-03-18",
    readingMinutes: 5,
    tags: ["ClickHouse", "Data", "Migration"],
    projectId: "clickhouse-migration",
    title: "Twenty million rows taught me to measure twice",
    dek: "Moving analytics off MySQL was the easy part. Proving the numbers still agreed was the work.",
    body: [
      {
        type: "paragraph",
        text: "The dashboards had become a victim of their own success. Every new question added another join, and queries that used to return in a second started timing out during the morning rush. We knew the reporting workload belonged in ClickHouse. The question was how to move it without quietly changing the truth.",
      },
      {
        type: "heading",
        text: "Start with the questions, not the schema",
      },
      {
        type: "paragraph",
        text: "Before creating a single table, I listed the questions the dashboards actually asked. Almost all of them were aggregations by time window and device, with a handful of group-level rollups. That list decided the sort key, the partitioning and the shape of the materialised views. Designing around real queries kept the schema small and made the benchmarks honest.",
      },
      {
        type: "heading",
        text: "Count everything twice",
      },
      {
        type: "paragraph",
        text: "I wrote checksum queries on both sides and compared row counts per day and per device. The MySQL path stayed alive while the new tables filled, and I refused to call the migration finished until the two sides agreed. A migration is not a copy. It is a proof.",
      },
      {
        type: "quote",
        text: "If you cannot explain why two numbers should match, you do not understand the data yet.",
      },
      {
        type: "heading",
        text: "What I would do again",
      },
      {
        type: "list",
        items: [
          "Benchmark with the queries people actually run, not synthetic ones.",
          "Keep a rollback path until the old system has been read-only for a full cycle.",
          "Write the runbook before touching production, not during the incident.",
        ],
      },
      {
        type: "paragraph",
        text: "The result was 20 million rows moved with full integrity and a storage footprint reduced by more than 95%. But the part I remember is the spreadsheet of counts that finally matched on a Friday afternoon.",
      },
    ],
  },
  {
    slug: "one-hundred-fifty-apis-is-a-design-problem",
    date: "2026-02-06",
    readingMinutes: 4,
    tags: ["Node.js", "API", "Architecture"],
    projectId: "pyrojs-refonte",
    title: "150 APIs is a design problem, not a typing problem",
    dek: "Splitting a monolith is mostly about boundaries. The endpoints are just the receipts.",
    body: [
      {
        type: "paragraph",
        text: "When a codebase becomes one deploy away from a bad weekend, the tempting fix is to rewrite everything at once. We did not. We mapped the domains first: devices, groups, reporting, access. The service boundaries came from the way the business already talked about the system, not from a diagram in a blog post.",
      },
      {
        type: "heading",
        text: "Contract first, code second",
      },
      {
        type: "paragraph",
        text: "Before implementing a resource, I wrote its request, response and error envelope in Swagger. That forced the naming and pagination decisions into the open while they were still cheap to change. By the time the controllers existed, the frontend team already had something to build against.",
      },
      {
        type: "quote",
        text: "An API is a product with users you will never meet. Treat the error message as part of the interface.",
      },
      {
        type: "heading",
        text: "The migration is the feature",
      },
      {
        type: "paragraph",
        text: "Moving production data from BigQuery to MySQL was not a side quest. It ran in parallel with the service work, with reconciliation checks and a rollback plan. Shipping the new architecture was only valuable once the old data could be trusted inside it.",
      },
      {
        type: "heading",
        text: "What the count hides",
      },
      {
        type: "paragraph",
        text: "People remember the 150+ endpoints. What actually changed the team's week was independent deployment: a fix in reporting no longer waited for a release of the whole platform. The number is a by-product of getting the boundaries right.",
      },
    ],
  },
  {
    slug: "boring-cron-jobs-survive",
    date: "2026-01-12",
    readingMinutes: 4,
    tags: ["IoT", "Node.js", "Reliability"],
    projectId: "iot-reporting-service",
    title: "Boring cron jobs are the ones that survive",
    dek: "Ten scheduled jobs, two thousand devices, and a lesson in designing for the worst day.",
    body: [
      {
        type: "paragraph",
        text: "The brief sounded simple: send reports about device uptime. In practice, a report is a promise. It has to arrive for every group, on the right day, with numbers that still make sense when a device has been offline for a week and nobody noticed.",
      },
      {
        type: "heading",
        text: "Make every job safe to run twice",
      },
      {
        type: "paragraph",
        text: "Cron jobs fail. Servers restart. A job that assumes it will run exactly once is a job that will eventually send the same report twice or skip a group entirely. I made each run idempotent: it computes a window, writes a result keyed by that window, and only dispatches if the result is new.",
      },
      {
        type: "quote",
        text: "A scheduled job that fails silently is worse than no scheduled job at all.",
      },
      {
        type: "heading",
        text: "Timezones are a product decision",
      },
      {
        type: "paragraph",
        text: "Daily, weekly and monthly are not just intervals. They are promises about when someone reads the report. I kept the calculation explicit, stored timestamps in UTC, and rendered the schedule in the group's local time. It removed a whole class of 'the report arrived yesterday' bugs.",
      },
      {
        type: "heading",
        text: "Give failure a name",
      },
      {
        type: "paragraph",
        text: "When a device is down, the useful question is not only whether it is down but who owns it. The service attributes responsibility per group and surfaces an unknown state instead of guessing. That single decision made the reports trustworthy enough for operations to act on them.",
      },
    ],
  },
  {
    slug: "designing-for-gloves",
    date: "2025-11-20",
    readingMinutes: 3,
    tags: ["React Native", "Product", "UX"],
    projectId: "winshot-integration",
    title: "Designing a product people use with gloves on",
    dek: "The field does not care about your animation. It cares that the button is where the thumb expects it.",
    body: [
      {
        type: "paragraph",
        text: "One of the most useful constraints I have worked with was the mobile app used by people standing outside. They are not browsing. They are completing a task between two other tasks, often with one hand, sometimes with gloves. Every extra tap has a cost.",
      },
      {
        type: "heading",
        text: "Fewer states, clearer feedback",
      },
      {
        type: "paragraph",
        text: "We reduced the challenge module to a short path: choose, confirm, see the result. Loading and error states were designed before the happy path, because a field user who cannot tell whether the action worked will simply try again. Duplicate submissions are a UX bug before they are a backend bug.",
      },
      {
        type: "heading",
        text: "Integrations are part of the interface",
      },
      {
        type: "paragraph",
        text: "Connecting the product to CRM and Odoo meant the interface could no longer promise instant truth. We surfaced sync status instead of hiding it. That small honesty saved support time and made the system feel slower but more reliable, which is the trade users actually want.",
      },
      {
        type: "quote",
        text: "Usability is a backend feature too. Latency and failure states are part of the design.",
      },
      {
        type: "paragraph",
        text: "I still keep a note from that project on my desk: build for the person who is tired, in a hurry, and not impressed by the interface. It is a better brief than most design documents.",
      },
    ],
  },
];
