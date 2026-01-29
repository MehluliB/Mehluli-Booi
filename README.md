# MehluliB — MERN Portfolio (scaffold)

Folders:
- server/ — Express + MongoDB API
- client/ — React (Vite) frontend

Run locally:
1. Start MongoDB (Atlas or local) and set server/.env with MONGO_URI
2. Backend:
   cd server
   npm install
   npm run dev
3. Frontend:
   cd client
   npm install
   # optionally set VITE_API_URL in client/.env.local
   npm run dev

The client expects the API at http://localhost:5000/api by default.
