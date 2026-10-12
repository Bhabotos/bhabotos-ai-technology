// Curated project catalog. Every entry is written from the project's own repository
// (README, docs, CI). Statuses are chosen from repository evidence, not from intent.
// New repositories are never published automatically - add an entry here after review.
// Last audited against GitHub: 2026-10-12.

export const CATEGORIES = [
  { id: 'network', label: 'Network Engineering & Automation', short: 'Network' },
  { id: 'devops', label: 'DevOps & Cloud Engineering', short: 'DevOps & Cloud' },
  { id: 'agents', label: 'AI Agents & Business Automation', short: 'AI Agents' },
  { id: 'ai-engineering', label: 'AI Engineering & Knowledge Systems', short: 'AI Engineering' },
  { id: 'web', label: 'Web Applications & Other', short: 'Web & Other' },
] as const

export type CategoryId = (typeof CATEGORIES)[number]['id']

export const STATUSES = [
  'Completed',
  'Tested',
  'In Progress',
  'Proof of Concept',
  'Lab / Not Deployed',
  'Archived',
] as const

export type ProjectStatus = (typeof STATUSES)[number]

export interface ProjectVisual {
  src: string
  alt: string
  caption: string
  kind: 'screenshot' | 'diagram'
}

export interface Project {
  slug: string
  title: string
  repo: string
  summary: string
  category: CategoryId
  tags: string[]
  stack: string[]
  status: ProjectStatus
  /** One sentence that qualifies the status, shown next to the badge. */
  statusNote: string
  problem: string
  features: string[]
  /** Ordered steps rendered as a generic workflow diagram (taken from the README flow). */
  flow?: { title: string; steps: string[] }
  visuals?: ProjectVisual[]
  limitations: string[]
  docs?: { label: string; url: string }[]
  /** Only set when the URL was requested and returned HTTP 200 during the audit. */
  liveUrl?: string
  featured?: number
}

const gh = (name: string) => `https://github.com/Bhabotos/${name}`

export const projects: Project[] = [
  {
    slug: 'netautoops',
    title: 'NetAutoOps',
    repo: gh('NetAutoOps'),
    summary:
      'Python network automation and monitoring platform: device inventory, health checks, interface discovery, configuration backups, n8n alerting and a React NOC dashboard.',
    category: 'network',
    tags: ['FastAPI', 'Netmiko', 'PostgreSQL', 'n8n', 'Docker', 'React', 'JWT / RBAC'],
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Netmiko', 'React', 'TypeScript', 'Docker Compose', 'GitHub Actions', 'n8n'],
    status: 'Tested',
    statusNote: 'Automated tests and CI pass. Device access was tested with mocked Netmiko, not against live network devices.',
    problem:
      'NOC teams need one place to keep a device inventory, see device health, collect interface data and take configuration backups, with alerts that reach the team automatically.',
    features: [
      'Device inventory REST API with PostgreSQL persistence',
      'Reachability and health checks plus interface discovery through Netmiko vendor adapters',
      'Structured configuration backup storage',
      'Webhook alerting to n8n with retry and backoff',
      'Background scheduler for health, backup and interface checks',
      'JWT authentication with role-based access control on every endpoint',
      'React + TypeScript NOC dashboard, served by nginx in a multi-stage Docker build',
      'pytest suite (173 tests reported in the README) and a GitHub Actions "Tests" workflow',
    ],
    flow: {
      title: 'Platform flow (from the repository structure)',
      steps: ['React NOC dashboard', 'FastAPI + JWT/RBAC', 'Services layer', 'Netmiko vendor adapters', 'PostgreSQL + backups', 'n8n alert webhook'],
    },
    limitations: [
      'Netmiko was fully mocked in tests; the README states no real network device was available.',
      'CLI output parsers are validated against synthetic samples and need adjusting per vendor firmware.',
      'Not deployed as a production service.',
    ],
    docs: [{ label: 'Repository README (phase-by-phase notes)', url: gh('NetAutoOps') + '#readme' }],
    featured: 1,
  },
  {
    slug: 'netmiko-vyos-bgp-automation',
    title: 'Netmiko VyOS BGP Automation',
    repo: gh('netmiko-vyos-bgp-automation'),
    summary:
      'Network automation lab: Python and Netmiko scripts driven by a YAML inventory to configure static routes and BGP between two VyOS routers.',
    category: 'network',
    tags: ['Netmiko', 'VyOS', 'BGP', 'YAML inventory'],
    stack: ['Python', 'Netmiko', 'VyOS', 'YAML', 'Ubuntu'],
    status: 'Tested',
    statusNote: 'Verified against two VyOS lab routers per the README. Lab only, not a production network.',
    problem: 'Repeatable, idempotent router configuration instead of typing commands by hand on each device.',
    features: [
      'YAML device inventory shared by all scripts',
      'Idempotent static route script: checks the running config, then commits, saves and verifies',
      'BGP between two lab routers verified as Established, with route advertisement and reachability checked',
      'Documented bugs and fixes, such as a per-device password prompt and Netmiko timing issues',
    ],
    limitations: [
      'Built in a two-router lab with private ASNs; some steps in the README are marked as designed or prepared rather than run.',
      'Interface listing output came back empty because of a known timing limitation in the script.',
    ],
  },
  {
    slug: 'network-log-analyzer',
    title: 'Network Log Analyzer',
    repo: gh('network-log-analyzer'),
    summary:
      'Command-line tool that parses router logs with regex and Pandas, flags BGP, interface and authentication problems, and produces CSV and HTML reports, with Prometheus metrics and alerting.',
    category: 'network',
    tags: ['Python', 'Pandas', 'Prometheus', 'Grafana', 'FastAPI', 'Docker', 'pytest'],
    stack: ['Python', 'Pandas', 'FastAPI', 'Prometheus', 'Grafana', 'Alertmanager', 'Docker Compose', 'pytest', 'GitHub Actions'],
    status: 'Tested',
    statusNote: '174 automated tests reported in the README; the CI workflow last ran successfully on 2026-09-19.',
    problem: 'Raw router logs are hard to scan. The tool turns them into structured data and a readable operations summary.',
    features: [
      'Regex parsing of date, time, severity, IP and message',
      'Detection of interface failures, BGP neighbour failures and authentication failures',
      'CSV export and a self-contained HTML report',
      'Prometheus metrics, Grafana dashboard and Alertmanager rules via Docker Compose',
      'FastAPI service to trigger analyses and fetch reports',
      'Non-root Docker image',
    ],
    flow: {
      title: 'Processing pipeline (from the README)',
      steps: ['Read and validate log', 'Regex parsing', 'Pandas analysis', 'Summary + CSV export', 'HTML report', 'Prometheus metrics + alerts'],
    },
    limitations: ['Works on a defined log line format; lines that do not match are reported and skipped.'],
  },
  {
    slug: 'network-inventory-api',
    title: 'Network Inventory API',
    repo: gh('network-inventory-api'),
    summary: 'REST API for tracking routers, switches and firewalls with CRUD, filtering and duplicate-IP prevention.',
    category: 'network',
    tags: ['FastAPI', 'SQLAlchemy', 'SQLite', 'REST'],
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'SQLite', 'pytest'],
    status: 'Completed',
    statusNote: 'Small, self-contained API with a test folder. Test results were not independently run for this site.',
    problem: 'A simple source of truth for network devices that other automation can query.',
    features: [
      'Create, read, update and delete device records',
      'Filter by vendor, site, status or IP address',
      'Duplicate IP prevention',
      'Interactive Swagger and ReDoc documentation',
    ],
    limitations: ['SQLite storage; single-node and intended as a foundation, not a full IPAM.'],
  },
  {
    slug: 'ai-fiber-alarm-automation',
    title: 'AI Fiber Alarm Automation',
    repo: gh('AI-Fiber-Alarm-Automation'),
    summary:
      'n8n pipeline that ingests alarms from five vendor NMS/EMS systems, normalises them, classifies them with Claude, enriches with site data, correlates and routes them to the right team on Telegram.',
    category: 'network',
    tags: ['n8n', 'Claude', 'Alarm correlation', 'Telegram', 'Google Sheets'],
    stack: ['n8n', 'Claude (Anthropic)', 'Google Sheets', 'Telegram Bot API', 'Webhooks'],
    status: 'Proof of Concept',
    statusNote: 'Documented n8n workflows with screenshots. The README lists open security and scaling limitations.',
    problem:
      'Telecom NOCs receive alarms in different formats from different vendors; they need one normalised, prioritised incident stream.',
    features: [
      'Webhook ingestion and vendor normalisation (Huawei, Nokia, Cisco, Juniper, FiberHome formats)',
      'AI classification of severity and likely root cause',
      'Site metadata enrichment and impact scoring from Google Sheets',
      'Correlation and de-duplication into incidents',
      'Rule-based routing with priority, SLA and escalation, then Telegram notification with retry',
      'Eight chained, single-purpose sub-workflows (WF-01 to WF-08)',
    ],
    flow: {
      title: 'Pipeline (from the README)',
      steps: ['Alarm ingestion webhook', 'Vendor normaliser', 'AI classification', 'Site enrichment', 'Correlation + dedup', 'Routing + SLA', 'Notification dispatch', 'Telegram'],
    },
    visuals: [
      {
        src: '/projects/fiber-alarm-architecture.png',
        alt: 'Architecture diagram of the AI Fiber Alarm Automation workflows WF-01 to WF-08',
        caption: 'Architecture diagram from the repository.',
        kind: 'diagram',
      },
    ],
    limitations: [
      'The ingestion webhook has no authentication configured (stated in the README).',
      'The correlation store is in-memory workflow static data, so it is single-instance only.',
      'All teams currently route to the same Telegram chat.',
    ],
    featured: 6,
  },
  {
    slug: 'terraform-hetzner-devops-platform',
    title: 'Terraform Hetzner DevOps Platform',
    repo: gh('terraform-hetzner-devops-platform'),
    summary:
      'Modular Terraform infrastructure for Hetzner Cloud: private network, firewalls, load-balanced Docker and Nginx app servers and a private PostgreSQL server.',
    category: 'devops',
    tags: ['Terraform', 'Hetzner Cloud', 'IaC', 'Docker', 'Nginx', 'cloud-init'],
    stack: ['Terraform', 'Hetzner Cloud', 'Docker', 'Nginx', 'PostgreSQL', 'cloud-init'],
    status: 'Lab / Not Deployed',
    statusNote: 'terraform fmt, init, validate and plan have passed. apply has intentionally never been run, so no cloud resources exist.',
    problem: 'Define a repeatable, least-exposure cloud environment as code before spending money on it.',
    features: [
      'Reusable modules: network, firewall, server, database and load balancer',
      'dev environment wired from the modules; staging and prod are placeholders',
      'Only the load balancer is public; app servers allow restricted SSH; the database has no public address',
      'Docker and Nginx installed through cloud-init',
      'Documented cost estimate and a validation-status section',
    ],
    flow: {
      title: 'Intended topology (from the README)',
      steps: ['Internet', 'Load balancer', 'App servers (Docker + Nginx)', 'Private network', 'PostgreSQL (no public IP)'],
    },
    limitations: [
      'Not deployed. The diagrams show the intended design, not running infrastructure.',
      'Staging and prod environments, and the CI/CD workflow, are not implemented yet.',
      'The README proposes a remote-state backend but does not implement it.',
    ],
    featured: 2,
  },
  {
    slug: 'production-docker-app',
    title: 'Production Dockerised Web Application',
    repo: gh('prod-docker-app'),
    summary:
      'Three-tier app (static frontend, FastAPI, PostgreSQL and Redis) in Docker Compose, deployed by GitHub Actions through a self-hosted runner on a Hetzner VPS with TLS.',
    category: 'devops',
    tags: ['Docker', 'GitHub Actions', 'CI/CD', 'Nginx', "Let's Encrypt", 'Hetzner', 'PostgreSQL', 'Redis'],
    stack: ['Docker', 'Docker Compose', 'GitHub Actions', 'GHCR', 'Nginx', 'FastAPI', 'PostgreSQL', 'Redis', 'Linux'],
    status: 'Completed',
    statusNote: 'The CI/CD workflow ran successfully on 2026-09-21 and the README live URL answered HTTP 200 on 2026-10-12.',
    problem: 'Push-to-deploy for a small production stack with health-gated startup, rollback and routine operations.',
    features: [
      'Multi-stage Docker builds and network-segmented services',
      'Pipeline: test, build, validate, publish to GHCR, then deploy via self-hosted runner',
      'Deployment, rollback, backup, restore, certificate renewal and status scripts',
      'ARCHITECTURE.md and DEPLOYMENT.md documents',
    ],
    flow: {
      title: 'Delivery pipeline (from the README)',
      steps: ['git push', 'GitHub Actions: test + build', 'Publish to GHCR', 'Self-hosted runner on VPS', 'deploy.sh + Docker Compose', 'Nginx TLS to app'],
    },
    docs: [
      { label: 'Architecture', url: gh('prod-docker-app') + '/blob/main/ARCHITECTURE.md' },
      { label: 'Deployment guide', url: gh('prod-docker-app') + '/blob/main/DEPLOYMENT.md' },
    ],
    liveUrl: 'https://api.bhabotos.com/',
    limitations: ['Single-server deployment: no high availability.', 'A personal project, not a customer production system.'],
    featured: 3,
  },
  {
    slug: 'zero-touch-linux-provisioning',
    title: 'Zero-Touch Linux Provisioning',
    repo: gh('zero-touch-linux-provisioning'),
    summary:
      'Ansible roles for repeatable Ubuntu and Rocky Linux provisioning: base config, users, hardening, Docker, Nginx, monitoring, Vault and backup/restore.',
    category: 'devops',
    tags: ['Ansible', 'Linux', 'Hardening', 'Vault', 'GitHub Actions', 'pytest'],
    stack: ['Ansible', 'Python', 'pytest', 'GitHub Actions', 'Ansible Vault', 'Nginx', 'Docker', 'Prometheus Node Exporter'],
    status: 'Tested',
    statusNote: 'Lab validation is documented across seventeen phases. Whether it was deployed beyond the lab is unverified, and no production deployment is claimed.',
    problem: 'Bring new servers to a consistent, hardened baseline without manual steps.',
    features: [
      'OS-aware base configuration for Ubuntu 22.04/24.04 and Rocky Linux 9',
      'User and SSH key management, firewall and sysctl hardening',
      'Optional Docker, Nginx and Node Exporter roles',
      'Ansible Vault workflow, backup and rollback automation',
      'pytest validation of inventory and roles, and CI linting',
    ],
    limitations: [
      'Deployment status is unverified: the README documents lab validation only.',
      'The repository shows no GitHub Actions run history, so CI results are not verified here.',
    ],
  },
  {
    slug: 'k8s-production-platform',
    title: 'Kubernetes Production Platform (RKE2)',
    repo: gh('k8s-production-platform'),
    summary: 'Mini Kubernetes platform on RKE2: Ansible node preparation and install playbooks, a Helm chart and manifests, backend and frontend apps, and a CI/CD workflow.',
    category: 'devops',
    tags: ['Kubernetes', 'RKE2', 'Ansible', 'Helm', 'GitHub Actions'],
    stack: ['Kubernetes (RKE2)', 'Ansible', 'Helm', 'GitHub Actions'],
    status: 'In Progress',
    statusNote: 'PROJECT-STATUS.md records only Phases 0 and 1 (node preparation) as completed, and the repository has no README yet.',
    problem: 'Practise running a multi-node Kubernetes platform: node preparation, cluster install and application delivery.',
    features: [
      'Three-server lab: an Ansible controller plus control-plane and worker nodes, prepared with Ansible',
      'Kernel modules, sysctl, time sync and swap handling configured and recorded',
      'Ansible RKE2 install playbook, a Helm chart and Kubernetes manifests for a "telecom" app with backend and frontend',
      'Documentation set covering architecture, RKE2 cluster, CI/CD, GitOps, monitoring, security and troubleshooting',
      'A CI/CD workflow that ran successfully on 2026-08-22 (its exact scope was not reviewed)',
    ],
    limitations: [
      'Work in progress. The status file documents only node preparation as complete; the later pieces are present in the repository but their deployment state is not recorded.',
      'Lab on local virtual servers.',
    ],
  },
  {
    slug: 'ai-devops-health-bot',
    title: 'Ansible Deployment and Telegram Health Bot',
    repo: gh('ai-devops-health-bot'),
    summary: 'Deploys Apache behind Nginx with Ansible and reports server health on demand through a Telegram bot.',
    category: 'devops',
    tags: ['Ansible', 'Telegram', 'Nginx', 'Python', 'Monitoring'],
    stack: ['Ansible', 'Python', 'Telegram Bot API', 'Nginx', 'Apache'],
    status: 'Completed',
    statusNote: 'Small working automation with an architecture diagram and tests folder in the repository.',
    problem: 'Quick server health checks from a chat without logging in over SSH.',
    features: [
      'Ansible deployment of Apache on 127.0.0.1:8080 behind Nginx',
      'Read-only health checks: CPU, RAM, disk, load, services, HTTP and reachability',
      'Telegram /health command that formats the JSON result',
    ],
    flow: {
      title: 'Request flow (from the README)',
      steps: ['Telegram /health', 'Bot', 'Health runner', 'Ansible ad-hoc commands', 'JSON result', 'Formatted reply'],
    },
    limitations: ['Targets a single configured server.'],
  },
  {
    slug: 'ansible-docker-automation',
    title: 'Ansible Docker Automation',
    repo: gh('ansible-docker-automation'),
    summary: 'Ansible roles that install Docker and Compose on Ubuntu and deploy Nginx, Redis and PostgreSQL containers.',
    category: 'devops',
    tags: ['Ansible', 'Docker', 'Compose', 'Roles'],
    stack: ['Ansible', 'Docker', 'Docker Compose', 'Ubuntu'],
    status: 'Proof of Concept',
    statusNote: 'Role-based playbook demonstration. The README does not record test results.',
    problem: 'Repeatable Docker host setup and container deployment.',
    features: ['Roles: common, docker, docker_compose, verify, containers', 'Deploys Nginx, Redis and PostgreSQL containers', 'Verifies the Docker installation'],
    limitations: ['No recorded test evidence in the repository.'],
  },
  {
    slug: 'real-estate-ai-agent',
    title: 'Real Estate AI Sales & Appointment Agent',
    repo: gh('real-estate-ai-voice-agent'),
    summary:
      'AI voice agent design for a fictional real-estate business: qualify inbound callers, book viewings, confirm by SMS and write a CRM summary. Business logic lives in n8n and pure functions, not in the prompt.',
    category: 'agents',
    tags: ['n8n', 'Vapi', 'Claude', 'PostgreSQL', 'HighLevel CRM', 'Python', 'Voice'],
    stack: ['Python', 'n8n', 'PostgreSQL', 'HighLevel CRM', 'Vapi', 'Twilio'],
    status: 'In Progress',
    statusNote:
      'Local Python app and mock tests are done. In the deployed part, Workflow 01 is inactive; Vapi and Twilio are not connected and SMS is mocked.',
    problem:
      'Real-estate teams lose leads from missed calls and slow follow-up. The agent answers, qualifies deterministically and books appointments.',
    features: [
      'Local domain rules: extraction, deterministic lead qualification, property search, scheduling and merge/stage policy',
      'Mock CRM, calendar, SMS and catalogue adapters with idempotency, retry and dead-letter handling',
      'Vapi tool-contract gateway implemented against mocks',
      'Deployed on a self-hosted stack but inactive: PostgreSQL durable state and n8n Workflow 01 (lead intake to HighLevel contact)',
      'n8n Vapi adapter workflow deployed but inactive',
      'Detailed requirements, architecture, security and test-plan documents',
    ],
    flow: {
      title: 'Intended call flow (from the README)',
      steps: ['Inbound call', 'Voice agent (Vapi)', 'n8n tool gateway', 'Deterministic scoring + rules', 'HighLevel CRM + booking', 'SMS confirmation (n8n)'],
    },
    docs: [
      { label: 'Project status', url: gh('real-estate-ai-voice-agent') + '/blob/main/docs/PROJECT_STATUS.md' },
      { label: 'Architecture', url: gh('real-estate-ai-voice-agent') + '/blob/main/ARCHITECTURE.md' },
    ],
    limitations: [
      'No live end-to-end call has been run. Voice, telephony and SMS are not connected.',
      'Some deployed-test evidence is recorded as pending in the repository, and is not claimed as passed.',
      'In the deployed n8n workflows, lead scoring, request signing, CRM tags and stages, and the remaining workflows are planned, not built.',
    ],
    featured: 4,
  },
  {
    slug: 'ai-lead-management-automation-n8n',
    title: 'AI Lead Management Automation',
    repo: gh('ai-lead-management-automation-n8n'),
    summary: 'Six modular n8n workflows that capture form leads, validate and de-duplicate, score them with AI, route them and notify sales.',
    category: 'agents',
    tags: ['n8n', 'Lead scoring', 'Telegram', 'Google Sheets', 'Gmail'],
    stack: ['n8n', 'LLM', 'Google Forms', 'Google Sheets', 'Telegram', 'Gmail'],
    status: 'Proof of Concept',
    statusNote: 'Documented workflows with screenshots. The README does not record a structured test run.',
    problem: 'Reading every inbound lead by hand is slow; sales needs hot leads flagged quickly.',
    features: [
      'Google Form intake, schema mapping, validation and duplicate checks',
      'AI qualification and a transparent 0-100 score, classified HOT, WARM or COLD',
      'Queue routing, Telegram alerts for high-value leads and classification-aware email replies',
      'Six independent workflows (CAP-00 to CAP-05) with an orchestrator',
    ],
    limitations: ['No recorded production usage.'],
  },
  {
    slug: 'cit-course-inquiry-auto-triage',
    title: 'Course Inquiry Auto-Triage Bot',
    repo: gh('cit-course-inquiry-auto-triage'),
    summary: 'n8n and Claude workflow that classifies Bangla, English and mixed-language course inquiries, scores and routes them, and logs to Google Sheets.',
    category: 'agents',
    tags: ['n8n', 'Claude', 'Lead triage', 'Bangla', 'Google Sheets'],
    stack: ['n8n', 'Claude (Anthropic)', 'Google Sheets', 'Webhooks'],
    status: 'Proof of Concept',
    statusNote: 'The README separates live-tested, simulated and pending items, and records test T01 as NOT PASSED.',
    problem: 'Staff read every inquiry by hand, so hot leads wait behind spam and urgent complaints.',
    features: ['Claude classification schema, lead scoring and routing rules', 'Duplicate detection, retry and fallback, error handling', 'Test results and cost estimate documented'],
    limitations: ['Test T01 (clean Bangla inquiry) is recorded as not passed and needs investigation.', 'Built as a course assignment.'],
  },
  {
    slug: 'ai-lead-qualification-make',
    title: 'AI Lead Qualification (Make.com)',
    repo: gh('ai-lead-qualification-automation-'),
    summary: 'Make.com scenario that scores form leads 1-10 with OpenAI, logs them and routes by quality.',
    category: 'agents',
    tags: ['Make.com', 'OpenAI', 'Google Sheets', 'Gmail'],
    stack: ['Make.com', 'OpenAI', 'Google Sheets', 'Gmail'],
    status: 'Proof of Concept',
    statusNote: 'Scenario blueprint with a test table in the README.',
    problem: 'Inbound leads arrive with no consistent way to judge which deserve immediate attention.',
    features: ['AI scoring and High/Medium/Low categorisation', 'Master lead log with an error-handler fallback route', 'Routes to email alert, CRM sheet or archive'],
    limitations: ['Built and tested in one Make.com zone; not a hosted product.'],
  },
  {
    slug: 'n8n-ai-invoice-processing',
    title: 'AI Invoice Processing',
    repo: gh('n8n-ai-invoice-processing'),
    summary: 'n8n workflow that ingests invoices from Gmail, extracts fields with AI and OCR, validates against purchase orders, detects duplicates and alerts on exceptions.',
    category: 'agents',
    tags: ['n8n', 'OCR', 'PostgreSQL', 'Telegram', 'Gmail'],
    stack: ['n8n', 'OpenRouter', 'Gmail', 'OCR', 'PostgreSQL', 'Telegram'],
    status: 'Proof of Concept',
    statusNote: 'Importable workflow with fixtures for regression testing.',
    problem: 'Invoices are paid against wrong POs or twice when checked by hand.',
    features: ['PO matching and duplicate detection', 'PostgreSQL audit trail', 'Telegram alerts for exceptions', 'Fixture-based regression scenarios'],
    limitations: ['Uses synthetic fixtures; no production invoice volume is claimed.'],
  },
  {
    slug: 'telegram-ai-personal-assistant',
    title: 'Telegram AI Personal Assistant',
    repo: gh('Telegram-AI-Personal-Assistant'),
    summary: 'n8n LangChain agent that lets you manage Gmail, Calendar, Sheets, Drive and Slack from one Telegram chat.',
    category: 'agents',
    tags: ['n8n', 'LangChain', 'Telegram', 'Google Workspace', 'Slack'],
    stack: ['n8n', 'LangChain', 'Gemini / Groq', 'Telegram', 'Google Workspace', 'Slack'],
    status: 'Proof of Concept',
    statusNote: 'Documented workflow with screenshots and installation guide.',
    problem: 'Small teams juggle several disconnected tools for daily operations.',
    features: ['Natural-language commands routed by an agent', 'Email, calendar, sheet, drive and Slack actions', 'Asks for missing details before acting'],
    limitations: ['Depends on user-supplied credentials for each connected service.'],
  },
  {
    slug: 'ai-voice-banking-agent',
    title: 'AI Voice Banking Agent',
    repo: gh('AI-Voice-Banking-Agent'),
    summary: 'Voice banking assistant on n8n, Vapi and Claude: balance, statements, loan and card info, branch finder, complaints and human escalation.',
    category: 'agents',
    tags: ['n8n', 'Vapi', 'Claude', 'Voice', 'Slack'],
    stack: ['n8n', 'Vapi', 'Claude', 'Google Sheets', 'Slack'],
    status: 'Proof of Concept',
    statusNote: 'Uses mock customer data only; not connected to any banking system.',
    problem: 'Demonstrates conversational, OTP-gated voice self-service for common banking queries.',
    features: ['OTP-style authentication step', 'Seven tool capabilities including human escalation', 'Voice-friendly short replies'],
    limitations: ['Mock data only. Not suitable for real accounts or transactions.'],
  },
  {
    slug: 'ai-smart-receptionist',
    title: 'AI Smart Receptionist',
    repo: gh('AI-Smart-Receptionist'),
    summary: 'n8n receptionist that qualifies leads, stores them in Google Sheets, books Calendar appointments and notifies by Gmail and Telegram.',
    category: 'agents',
    tags: ['n8n', 'Groq', 'Google Workspace', 'Telegram'],
    stack: ['n8n', 'Groq AI', 'Google Sheets', 'Google Calendar', 'Gmail', 'Telegram'],
    status: 'Proof of Concept',
    statusNote: 'Short README; the screenshots section is still a placeholder.',
    problem: 'Capture and book enquiries without staff handling each one.',
    features: ['Conversation memory', 'Lead qualification and CRM sheet', 'Appointment booking and notifications'],
    limitations: ['Minimal documentation and no screenshots yet.'],
  },
  {
    slug: 'telegram-ai-restaurant-assistant',
    title: 'Telegram AI Restaurant Assistant',
    repo: gh('telegram-ai-restaurant-assistant'),
    summary: 'Telegram chatbot that recommends restaurants by location and cuisine from a Google Sheets database using an n8n AI agent.',
    category: 'agents',
    tags: ['n8n', 'Groq', 'Telegram', 'Google Sheets'],
    stack: ['n8n', 'Groq AI', 'Telegram', 'Google Sheets'],
    status: 'Proof of Concept',
    statusNote: 'Early learning project with workflow export and screenshots.',
    problem: 'Natural-language restaurant discovery inside a chat app.',
    features: ['Search by location and cuisine', 'Ratings from the sheet', 'Sample data and prompts included'],
    limitations: ['Small sample dataset.'],
  },
  {
    slug: 'rag-customer-email-support-agent',
    title: 'RAG Customer Email Support Agent',
    repo: gh('rag-customer-email-support-agent'),
    summary:
      'n8n workflow that reads support emails, retrieves answers from a ChromaDB knowledge base, drafts a grounded reply in Gmail and requires human approval before anything is sent.',
    category: 'ai-engineering',
    tags: ['RAG', 'ChromaDB', 'OpenAI', 'n8n', 'Gmail', 'Human-in-the-loop', 'Embeddings'],
    stack: ['n8n', 'ChromaDB', 'OpenAI embeddings', 'OpenAI chat model', 'Gmail'],
    status: 'Proof of Concept',
    statusNote: 'The README calls it a functional prototype. A successful n8n execution screenshot is included.',
    problem: 'Support agents spend time searching documentation and typing first-pass replies to routine emails.',
    features: [
      'Gmail trigger for unread support emails',
      'ChromaDB retrieval with a prompt that forbids answering outside the retrieved context',
      'Structured output with answer, confidence and status fields',
      'Gmail draft only for high-confidence, fully answered cases. It never sends automatically.',
      'Human approval gate, labelling, dedupe gate and audit log',
    ],
    flow: {
      title: 'Workflow (from the README)',
      steps: ['New customer email', 'Retrieve from ChromaDB', 'AI support agent', 'Confidence + dedupe gate', 'Human approval', 'Gmail draft + audit log'],
    },
    visuals: [
      {
        src: '/projects/rag-email-workflow.png',
        alt: 'n8n execution view of the RAG email support workflow showing a successful run and the Create Gmail Draft output',
        caption: 'Screenshot from the repository: a successful n8n execution of the full workflow.',
        kind: 'screenshot',
      },
    ],
    docs: [{ label: 'Challenges and mitigations', url: gh('rag-customer-email-support-agent') + '/blob/main/docs/challenges.md' }],
    limitations: ['Prototype quality depends on the knowledge base content.', 'Not deployed for real customers.'],
    featured: 5,
  },
  {
    slug: 'bhabotos-ai-technology',
    title: 'BHABOTOS AI & Technology Website',
    repo: gh('bhabotos-ai-technology'),
    summary: 'This site: React 19, TypeScript, Vite and Tailwind CSS 4, served by nginx.',
    category: 'web',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'],
    status: 'Completed',
    statusNote: 'Live at bhabotos.com.',
    problem: 'A single place for training, solutions and project work.',
    features: ['Training, solutions and projects pages', 'Curated project catalog with filtering and detail pages'],
    limitations: [],
    liveUrl: 'https://bhabotos.com/',
  },
  {
    slug: 'daily-work-tracker',
    title: 'Daily Work Tracker',
    repo: gh('aily-work-tracker-android'),
    summary: 'Task manager with dashboard progress, search, filters and local persistence, built with React and TypeScript.',
    category: 'web',
    tags: ['React', 'TypeScript', 'Vite', 'localStorage'],
    stack: ['React', 'TypeScript', 'Vite'],
    status: 'Completed',
    statusNote: 'The README lists manual checks of the main features. It is a web app despite the repository name.',
    problem: 'A simple personal tool for tracking daily tasks.',
    features: ['Add, edit, delete and complete tasks', 'Search and Today / Completed / Pending filters', 'Progress calculation and local data persistence'],
    limitations: ['Data lives in the browser only.', 'The repository name contains a typo and says "android".'],
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
export const featuredProjects = [...projects].filter((p) => p.featured).sort((a, b) => a.featured! - b.featured!)
export const categoryLabel = (id: CategoryId) => CATEGORIES.find((c) => c.id === id)!.label
