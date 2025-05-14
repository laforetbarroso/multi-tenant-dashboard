# 🏢 Multi-Tenant SaaS Dashboard

A modern fullstack SaaS starter built with **Laravel**, **Inertia.js**, **React**, **TypeScript**, and **PostgreSQL**, featuring multi-tenant support, organization scoping, and user management.

---

## ✨ Features

- 🔐 **Multi-Tenant Architecture**
  - Users can belong to multiple organizations
  - Session-scoped organization context
- 👥 **Organization Membership**
  - Invite users by email
  - Manage roles per organization
- 📁 **Projects Module**
  - CRUD operations scoped to organization
- ⚙️ **Tech Stack**
  - Laravel 11 + PostgreSQL
  - Inertia.js + React + TypeScript
  - Tailwind CSS
  - Breeze for authentication scaffolding

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/your-username/your-saas-app.git
cd your-saas-app
composer install
npm install
```

### 2. Configure Environment

Copy and edit the `.env` file:

```bash
cp .env.example .env
php artisan key:generate
```

Set up your PostgreSQL DB credentials in `.env`.

### 3. Run Migrations & Seeders

```bash
php artisan migrate
php artisan db:seed
```

> Seeder includes a default organization and test users.

### 4. Start Development Servers

```bash
php artisan serve
npm run dev
```

---

## 📸 Screenshots

| Org Switcher | Members List | Projects |
|--------------|--------------|----------|
| ![](docs/screens/org-switcher.png) | ![](docs/screens/members-list.png) | ![](docs/screens/projects.png) |

## ✅ To-Do

- [x] Project CRUD
- [x] Org switching
- [x] Members & roles
- [ ] Invitations with email
- [ ] Role-based access control
- [ ] Billing and Stripe integration

---

## 📄 License

This project is licensed under the **GNU General Public License v3.0**.

You may copy, distribute, and modify the software as long as you track changes/dates in source files. All modifications must also be licensed under GPL-3. See the [LICENSE](./LICENSE) file for full details.

---

## 👤 Author

Built by [Pedro Barroso](https://github.com/laforetbarroso)
