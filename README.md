# Course Management API

A Course Management REST API built with NestJS.

## Technologies

- NestJS
- Node.js
- TypeScript
- class-validator
- class-transformer
- Multer

## Installation

```bash
npm install
npm run start:dev
```

Server URL: `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/course` | Get all courses |
| GET | `/course/:id` | Get a course by ID |
| POST | `/course` | Create a course |
| PUT | `/course/:id` | Update a course |
| PATCH | `/course/:id` | Partially update a course |
| DELETE | `/course/:id` | Delete a course |
| POST | `/course/:id/upload` | Upload course material |

## Create Course Example

**POST** `/course`

```json
{
  "name": "Web Development",
  "code": "CSE101",
  "instructor": "Mr. Rahman",
  "credits": 3,
  "description": "Introduction to web development"
}
```

## Validation

- Required fields: `name`, `code`, `instructor`, and `credits`.
- `credits` must be between 1 and 6.
- Unknown properties are rejected by the validation pipe.

## File Upload

Use `multipart/form-data` with the field name `file`.

- Allowed file types: `.jpg`, `.jpeg`, `.png`, `.pdf`
- Maximum file size: 2 MB

## Build

```bash
npm run build
```

## Testing

Test the API endpoints using Postman, including valid and invalid request bodies and file uploads.
