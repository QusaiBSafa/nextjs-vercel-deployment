# Infrastructure Overview
This application is a standalone Next.js app deployed on Vercel.

## Data Models
- No complex data models; uses static responses for API endpoints.

## API Design
1. **GET /api/hello** - Returns a JSON object with a greeting message.
2. **GET /api/goodbye** - Returns a JSON object with a farewell message.

## Key Decisions
- Using Next.js for its built-in API routes and SSR capabilities.
- Deploying on Vercel for ease of use and automatic scaling.