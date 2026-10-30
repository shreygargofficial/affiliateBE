# Affiliate API

**Base URL:** `http://localhost:3000/api`

| Method | Route                            | Description               |
| ------ | -------------------------------- | ------------------------- |
| GET    | `/`                              | Check API status          |
| GET    | `/setUpSample`                   | Setup initial sample data |
| GET    | `/getAffiliates`                 | Get all affiliates        |
| GET    | `/getAffiliateById/:affiliateId` | Get affiliate by ID       |
| POST   | `/addAffiliate`                  | Add a new affiliate       |
| PUT    | `/updateAffiliate/:affiliateId`  | Update affiliate details  |
| DELETE | `/deleteAffiliate/:affiliateId`  | Delete affiliate          |

## Add Affiliate

`POST /api/addAffiliate`

**Content-Type:** `multipart/form-data`

Fields:

- `title`
- `description`
- `link`
- `image` (File)

## Update Affiliate

`PUT /api/updateAffiliate/:affiliateId`

**Content-Type:** `application/json`

Fields:

- `title`
- `description`
- `link`

## Delete Affiliate

`DELETE /api/deleteAffiliate/:affiliateId`

## Get Affiliate by ID

`GET /api/getAffiliateById/:affiliateId`

## Get All Affiliates

`GET /api/getAffiliates`
