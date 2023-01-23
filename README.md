# Thinkful Hackathon - Job Search Application
## Technology
React, MUI, Node, express,axios
## Instructio n
Download the repo and `npm start` on both frontend and backend folders. We used API from [adzuna](https://developer.adzuna.com/). You can create an account and 
add API_ID and API_KEY to backend .env file to get access to the api.

## Frontend
### Login & Register
- Each email address is an unique account, no duplicate account will be created by the same email.
- Password and confirm password inputs should match, otherwise account can't be created and 'Invalid Entry' shows on the console.
- Once a new account is created, page changes to sign in. `Axios` method was used to post inputs to the backend. Once account is matched, we get access token to enter to the dashboard.
### Dashboard
- Frontend was built by React and majority of the UI by MUI. 
- `fetch()` was used to get data from api.
- Random job listings will be appeared on the dashboard when no inputs are entered (It takes a few seconds to upload).
- Saved jobs can be found in SAVED JOBS navigation. Users are able to remove saved jobs by unclick the heart icon on the dashboard or by clicking the delete button on the SAVED JOBS page.
- Applied jobs can be found in APPLIED JOBS navigation. They are designed to be unremovable.
- Both saved jobs and applied jobs were managed by Redux and saved in localStorage. 

## Backend
- Backend was built by `Express` following MVC design pattern.
- REST API was used to get user information. All the account data was saved in a json file. Password was encryped using `bcrypt` package.

## Future Improvements
- [ ]  A database can be created to save user accounts information to increase safety and this project can be not limited by a single browser.
- [ ]  JWT can be added to login/register/logout
- [ ]  Still working on to get first name and last name from backend and show on the dashboard welcome page.
