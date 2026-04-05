# 🎯 CRM Application (Angular)

> A personal training project simulating real-world SDLC practices and enterprise application development

---

## 🌱 About This Project

This is my **self-learning journey** as a junior developer, where I'm simulating professional software development practices to prepare for my first job in the industry.

**Goal:** Build a realistic CRM application while practicing:
- Sprint-based development (Agile/Scrum)
- Clean code architecture
- Business logic implementation
- Professional Git workflow
- Real-world application structure

---

## 💡 What is CRM?

**CRM** stands for **Customer Relationship Management** — a system that helps businesses manage their customer journey.

This application manages:
- 🎯 **Leads** — Potential customers
- 💼 **Deals** — Sales opportunities  
- 👥 **Customers** — Converted clients
- 📊 **Dashboard** — Business metrics

---

## 🌊 The Business Flow

```text
📋 Lead (Potential Customer)
    ↓
🔄 Convert to Deal
    ↓
💼 Deal (Sales Opportunity)
    ↓
✅ Won or ❌ Lost
    ↓
🧮 Business Logic Applied
    ↓
📊 Dashboard Metrics Updated
```

---

## 📁 Project Structure

Clean architecture for scalability:

```
src/
 └── app/
     ├── core/                    # Application core
     │    ├── models/             # Data models & interfaces
     │    │     ├── lead.model.ts
     │    │     ├── customer.model.ts
     │    │     └── deal.model.ts
     │    └── services/           # Business logic & data services
     │
     ├── pages/                   # Feature pages
     │    ├── login/              # Authentication
     │    ├── leads/              # Lead management
     │    ├── customers/          # Customer records
     │    ├── deals/              # Deal pipeline
     │    └── dashboard/          # Analytics & metrics
     │
     ├── layout/                  # UI structure
     │    ├── sidebar/            # Navigation sidebar
     │    └── main-layout/        # Main app layout
     │
     └── app.routes.ts            # Application routing
```

---

## 🎯 Why I Built This

As a **junior developer**, I wanted to:

- ✅ Practice real enterprise application architecture
- ✅ Learn sprint-based development workflow
- ✅ Build something beyond simple tutorials
- ✅ Understand business logic and application flow
- ✅ Create portfolio-worthy projects
- ✅ Prepare for professional development environments

This project intentionally starts **without a backend** to focus on:
- Frontend engineering skills
- Clean code practices
- Business logic implementation
- Application architecture

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Angular** | Framework (Standalone Components) |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **FontAwesome** | Icons |
| **CSR** | Client-Side Rendering |
| **In-Memory Data** | Mock data layer |

---

## 🚀 Development Sprints

I'm building this project in professional sprints to simulate real-world SDLC:

---

### 🟢 Sprint 1 — Project Foundation

**Goal:** Establish a solid foundation

**Tasks:**
- ✅ Create Angular project (Standalone)
- ✅ Setup GitHub repository
- ✅ Install and configure Tailwind CSS
- ✅ Install and configure FontAwesome
- ✅ Define project structure
- ✅ Create Login screen (Mock auth)
- ✅ Create main layout (Sidebar + Content)
- ✅ Configure routing

---

### 🔵 Sprint 2 — Leads Management

**Goal:** Build the entry point of CRM

**Tasks:**
- ✅ Create Lead model
- ✅ Create Leads service (Fake data)
- ✅ Display leads in table
- ✅ Add new lead
- ✅ Delete lead
- ✅ Convert lead → deal

---

### 🟡 Sprint 3 — Deals Management

**Goal:** Manage sales opportunities

**Tasks:**
- ✅ Create Deal model
- ✅ Create Deals service
- ✅ Display active deals
- ✅ Update deal status (Won/Lost)
- ✅ Calculate revenue from won deals

---

### 🟣 Sprint 4 — Customers Management

**Goal:** Handle customer records

**Tasks:**
- ✅ Create Customer model
- ✅ Create Customers service
- ✅ Display customers list
- ✅ Link customers with deals

---

### 🔴 Sprint 5 — Dashboard & Metrics

**Goal:** Visualize business insights

**Tasks:**
- ✅ Calculate dashboard metrics
  - 👥 Total customers
  - 💼 Active deals
  - 🆕 New deals
  - 💰 Revenue
- ✅ Create charts and graphs

---

## 🎯 Getting Started

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project
cd crm-application

# Install dependencies
npm install

# Run development server
ng serve

# Open browser
http://localhost:4200
```

---

## 📚 What I'm Learning

Through this project, I'm gaining hands-on experience with:

- **SDLC Practices** — Agile/Scrum sprint methodology
- **Clean Architecture** — Separation of concerns, scalable structure
- **Business Logic** — Real-world application flow
- **TypeScript** — Advanced typing and interfaces
- **Angular Best Practices** — Standalone components, services, routing
- **State Management** — Handling application data
- **Professional Git Workflow** — Commits, branches, documentation

---

## 🌟 Future Enhancements

After mastering the frontend, I plan to add:

- 🔌 Backend API (Node.js/Express or .NET)
- 🔐 Real authentication (JWT)
- 💾 Database integration (PostgreSQL/MongoDB)
- 📧 Email notifications
- 📱 Responsive design improvements
- 🧪 Unit and E2E testing

---

## 📖 Personal Notes

This is a **training project** where I'm learning by doing. Each sprint teaches me new skills and brings me closer to being job-ready. I'm documenting my journey to track progress and demonstrate my growth as a developer.

**Current Status:** [working now on : sprint-2]

**Lessons Learned:** [
## Lessons Learned
- Git: Always commit after every meaningful change.
- Tailwind CSS v3: Need postcss.config.json for Angular 17 projects.
- Font Awesome: Include in angular.json under styles.
- Angular CLI: `ng serve` vs `ng build` and the importance of build for production.
]

---

<div align="center">

**Built with 💪 and determination**

*Training for my first job as a frontend developer*

</div>
