# Baumaschinen-Vermietung – Starter

**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind + Nodemailer

## Los geht's
```bash
npm install
cp .env.example .env.local   # SMTP-Zugangsdaten eintragen
npm run dev                  # http://localhost:3000
```

Inhalte je Maschine: `data/maschinen/*.json`.
Bilder: `public/img/` (Pfade in den JSONs).

Preise sind als **Netto** hinterlegt; die Anzeige rechnet **inkl. MwSt.** (B2C).
API Route `/api/contact` sendet E-Mails via SMTP.

Bitte Impressum/Datenschutz ergänzen und `src/lib/seo.ts` (Adresse, Domain, Telefon) anpassen.
# Website-Baumaschinenvermietung
# Vermietung1
