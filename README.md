# Contact Management - Mini Feature of a CRM


This project focuses on providing a streamlined solution for managing contact information, enabling users to effortlessly add, view, update, and delete client or customer details. By consolidating all essential information in one place, it simplifies contact management and proves especially beneficial in business settings, where maintaining strong relationships is crucial.





## Run Locally

1. Clone the project

```bash
  git clone https://github.com/iaayushmaan/Contact-Management.git
```

2. Go to the project directory

```bash
  cd ./Contact-Management
```
3. Install the dependencies (Backend Setup)

```bash
  npm i
```
4. Create .env file with reference to the sample given.

5. Run the server
```bash
  npm run start
```
6. Got to the frontend (Frontend Setup)
```bash
  cd ./client
```
7. Install the dependencies

```bash
  npm i
```
8. Start the frontend server

```bash
  npm run dev
```
9. You are live on "http://localhost:5173/".


## Screenshots

- Creating contact

![image](https://github.com/user-attachments/assets/3876cf10-0f5d-47cb-9472-e6dcd9121ce9)

- List of contacts

![image](https://github.com/user-attachments/assets/b6eba267-c24f-475b-adf3-c66e999b27c4)

## Database Schema Description

1. Fields:

- firstName (String, Required): First name of the contact.
- lastName (String, Required): Last name of the contact.
- phoneNumber (String, Required, Unique): Unique phone number for the contact.
- email (String, Required, Unique): Unique email address for the contact.
- code (String, Optional): Custom field for additional information (e.g., contact code).
- company (String, Required): Company associated with the contact.
- jobTitle (String, Required): Job title of the contact.

2. Indexes:
  Unique indexes are created for phoneNumber and email to ensure no duplicate entries.

3. Mongoose Model:
The schema is registered as a model named contact, which can be used to interact with the database.
## Tech Stack Used
- MongoDB
- Express.js
- React
- Node.js
## Challenges and Solutions:

A major challenge was ensuring data accuracy, especially for unique fields like `phoneNumber` and `email`. During testing, duplicate entries sometimes slipped through due to simultaneous operations. To fix this, I added unique indexes in the database and also checked for duplicates on both the client and server sides to keep the data consistent.

Another challenge was connecting the backend to the frontend and handling data flow smoothly. Managing API calls, fixing data format issues, and showing errors on the frontend were tricky. I resolved this by testing APIs with Postman, ensuring consistent data formats, and adding proper error messages and loading indicators on the frontend.


## Authors

- [@iaayushmaan](https://www.github.com/iaayushmaan)

