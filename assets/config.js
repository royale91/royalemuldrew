/* =============================================================
   ROYALE MULDREW — SHARED LEAD-CAPTURE CONFIG
   -------------------------------------------------------------
   This single file is loaded by every page that captures or
   displays leads (index.html, shop.html, admin.html).

   OWNER: paste your two values below, then save & re-deploy
   the site. Nothing else needs to change.

   1) endpoint
      The Web App URL you get after deploying the Google Apps
      Script (backend/Code.gs). It looks like:
        https://script.google.com/macros/s/AKfy....../exec
      Paste that whole URL between the quotes.

   2) adminToken
      A SECRET password of your choosing. It must match the
      ADMIN_TOKEN you put inside Code.gs EXACTLY. It protects
      the admin dashboard so only you can read your leads.
      Pick something long, e.g. "rm-leads-7Kx9-greenlight".

   While endpoint is left as the placeholder below, the site
   still works (forms show success) and admin.html shows DEMO
   leads so you can preview everything before going live.
   ============================================================= */

window.RM_CONFIG = {
  endpoint: "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL",
  adminToken: "CHANGE_ME_SECRET"
};
