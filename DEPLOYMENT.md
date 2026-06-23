# Zytrixon Tech - Shared Hosting Deployment Guide

Deploying a modern Laravel + React (Inertia + Vite) application to shared hosting (like Hostinger, GoDaddy, or cPanel-based hosts) requires a few specific steps to ensure your files are secure and your application runs correctly.

Follow these step-by-step instructions to get your app live.

---

## 🛠️ Phase 1: Local Preparation

Before uploading anything to your server, you need to compile your assets and prepare your application locally.

1. **Compile Frontend Assets for Production**
   Open your terminal in the project directory and run:
   ```bash
   npm install
   npm run build
   ```
   *This will generate a `public/build/` directory with all your compiled JavaScript and CSS files.*

2. **Optimize PHP Dependencies**
   Run composer to optimize dependencies for production (this strips out development packages):
   ```bash
   composer install --optimize-autoloader --no-dev
   ```

3. **Clear Local Caches**
   ```bash
   php artisan optimize:clear
   ```

4. **Create a Deployment ZIP File**
   Zip your entire project folder. **IMPORTANT:** To save space and time, **exclude** the `node_modules` and `.git` folders from the zip file. You only need the `public/build` folder that was just generated, not the source modules.

---

## ☁️ Phase 2: Upload to Shared Hosting (cPanel)

For security reasons, Laravel's core files should NEVER be placed directly inside the `public_html` directory.

1. **Upload the Core Files**
   - Log in to your hosting control panel (e.g., cPanel).
   - Open the **File Manager**.
   - Navigate to your root directory (typically `/home/username/`), one level **above** `public_html`.
   - Create a new folder named `zytrixonapp`.
   - Upload your ZIP file into this `zytrixonapp` folder and extract it.

2. **Move the Public Folder**
   - Inside your extracted `zytrixonapp` folder, locate the `public` directory.
   - **Move all the contents** of the `public` directory (including `build`, `index.php`, `.htaccess`, etc.) directly into your `public_html` folder.

3. **Update `index.php` Paths**
   - Open the `index.php` file inside your `public_html` folder.
   - You need to update the paths so they point to your `zytrixonapp` folder.

   Change this line:
   ```php
   require __DIR__.'/../vendor/autoload.php';
   ```
   **To:**
   ```php
   require __DIR__.'/../zytrixonapp/vendor/autoload.php';
   ```

   Change this line:
   ```php
   $app = require_once __DIR__.'/../bootstrap/app.php';
   ```
   **To:**
   ```php
   $app = require_once __DIR__.'/../zytrixonapp/bootstrap/app.php';
   ```

---

## ⚙️ Phase 3: Server Configuration

1. **Set Up the `.env` File**
   - In your `zytrixonapp` folder, rename `.env.example` to `.env` (if `.env` doesn't exist).
   - Update your production settings:
     ```env
     APP_ENV=production
     APP_DEBUG=false
     APP_URL=https://yourdomain.com
     ```
   - Update your Database credentials based on the MySQL database you create in your cPanel.

2. **Create the Storage Symlink**
   Laravel needs to link the storage folder to public. If you have SSH access, simply run:
   ```bash
   cd zytrixonapp
   php artisan storage:link
   ```
   **If you don't have SSH access:**
   Create a temporary file in `public_html` called `link.php` and add this code:
   ```php
   <?php
   $targetFolder = $_SERVER['DOCUMENT_ROOT'].'/../zytrixonapp/storage/app/public';
   $linkFolder = $_SERVER['DOCUMENT_ROOT'].'/storage';
   symlink($targetFolder, $linkFolder);
   echo 'Symlink completed';
   ?>
   ```
   Visit `https://yourdomain.com/link.php` in your browser. Once it says completed, **delete** the `link.php` file.

3. **Database Migration**
   - **If you have SSH:** Run `php artisan migrate --force`.
   - **If no SSH:** Export your local database from phpMyAdmin, and import the SQL file directly into your live cPanel database using phpMyAdmin.

---

## 🔒 Post-Deployment Checklist

- [ ] Check that `APP_DEBUG=false` in the `.env` file (critical for security).
- [ ] Verify that navigating to `https://yourdomain.com/.env` returns a 404/403 error. (If it downloads the file, your core files are improperly placed inside `public_html`).
- [ ] Test the contact form and email sending functionality.
- [ ] Check if the images stored in the `storage` folder load correctly.

Your application should now be live and running blazing fast! 🚀
