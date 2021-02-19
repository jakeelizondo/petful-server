# Petful (Node.js/Express Server)

View the live application at: https://petful-client-jake.vercel.app/

Table of Contents:\
\
[Application Summary](#application-summary)\
[API Documentation](#api-documentation)\
[API Endpoints](#endpoints)\
[Developer Contact Info](#contact-developer)

## Application screenshot

![petful screenshot](https://github.com/jakeelizondo/petful-client/blob/master/src/images/petful-screenshot.PNG)

### Application Summary

Petful is an application which allows users to get in line to adopt a dog or cat. After they enter the queue to adopt, the queue progresses until they are at the head. Once the user is first in the queue, other people file in behind them until there are 5 people in line. At this time, the user can choose to adopt the currently available cat or dog. Once they choose, that animal is removed from the queue and replaced with the next in line, and the user is removed from the queue. At this point they can choose to get back in the queue if they so desire.

### Technology used

This application was built with Node.js, Express, and many smaller libraries.

#### To install locally

1. Clone github repo to your machine
2. Run command 'npm install' to install dependencies locally
3. Run command 'npm run dev' to start up server locally

## API Documentation

### Responses

Many API endpoints return the JSON representation of the resources created or edited. However, if an invalid request is submitted, or some other error occurs, the application will respond with a JSON response in the following format:

```javascript
{
  "error" : "message"
}
```

The `message` attribute contains a message conveying the nature of the error.

### ENDPOINTS

Table of Contents:\
\
[People Endpoints](#people-endpoints)\
[Pets Endpoints](#pets-endpoints)\
[Cat Endpoints](#cat-endpoints)\
[Dog Endpoints](#dog-endpoints)\
[Status Codes](#status-codes)

---

#### People endpoints

```http
POST /api/people
```

| Body Key | Type     | Description                               |
| :------- | :------- | :---------------------------------------- |
| `person` | `string` | **Required**. Name of person to be queued |

```http
DELETE /api/people
```

Removes the next person in the queue from the front.

#### Pets endpoints

```http
GET /api/pets
```

Returns an object containing all arrays of cats and dogs

```http
DELETE /api/pets
```

| Body Key | Type     | Description                          |
| :------- | :------- | :----------------------------------- |
| `type`   | `string` | **Required**. Must be 'cat' or 'dog' |

Takes a type. Removes the next in the queue of that animal type, cat or dog

#### Cat Endpoints

```http
GET /api/cat
```

- Returns first cat in the queue

#### Dog Endpoints

```http
GET /api/dog
```

- Returns first dog in the queue

---

### Status Codes

This API returns the following status codes:

| Status Code | Description             |
| :---------- | :---------------------- |
| 200         | `OK`                    |
| 201         | `CREATED`               |
| 400         | `BAD REQUEST`           |
| 404         | `NOT FOUND`             |
| 500         | `INTERNAL SERVER ERROR` |

---

#### Contact Developer

For questions/feedback or to discuss employment/project opportunities, contact the creator via email at jake.elizondo23@gmail.com
