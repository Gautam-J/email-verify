# Email Verification

### Setup

-   Add `MONGODB_URI` in `./env`.
-   `npm install`
-   `npm start`

### Document Structure in MongoDB

-   Database name - `email_db`.
-   Collection name - `Email`.

```json
{
    ObjectID: id,
    email: example@company.com
}
```

### API Route

GET - `/verify`

Body

```json
{
    email: example@company.com
}
```

200 - Successful Verification

```json
{
    msg: Verified
}
```

401- Not Verified

```json
{
    msg: Not Verified
}
```
