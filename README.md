# Email Verification

API to parse JSON Web Token, and store the parsed data in MongoDB.

### Setup

-   Add `MONGODB_URI` in `./env`.
-   `npm install`
-   `npm start`

### API Route

GET - `/verify`

Body

```json
{
    "jwt": "Access Token"
}
```

200 - Successful Verification

```json
{
    "msg": "Data stored"
}
```

500 - Internal Server Error
