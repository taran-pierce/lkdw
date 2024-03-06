# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.8.5] - 2024-03-06
### Added
- Added analytics

## [0.8.4] - 2024-03-05
### Updated
- Updated favicon for frontend
- Fixed error in next config

## [0.8.3] - 2024-03-04
### Updated
- Working on making sure it does not double order during checkout

## [0.8.2] - 2024-03-04
### Updated
- Modified access rules that were preventing new users from querying required data
- Customers can only edit/delete their own products

## [0.8.1] - 2024-03-03
### Updated
- Changed access to view products and tags to always true
  - Products should show up to view for everyone

## [0.8.0] - 2024-03-03
### Added
- Added access control for backend

## [0.7.6] - 2024-03-03
### Updated
- Fix local stripe
- Fix cart menu not closing when navigating to /checkout

## [0.7.5] - 2024-03-03
### Updated
- Mobile style updates and testing redeploy

## [0.7.4] - 2024-03-03
### Updated
- Changed backend image storage to AWS S3 bucket

## [0.7.3] - 2024-03-02
### Updated
- Stripe return url must be fully qualified

## [0.7.2] - 2024-03-02
### Updated
- Adjusting options for stripe

## [0.7.1] - 2024-03-02
### Updated
- Updating README.md
- Adjusting env variables on Heroku for image file path

## [0.6.3] - 2024-03-02
### Updated
- Added another allowed origin to the backend

## [0.6.2] - 2024-03-02
### Updated
- Modified CORS settings on the backend

## [0.6.1] - 2024-03-02
### Updated
- Working on connecting the two now that they are on two different domains

## [0.6.0] - 2024-03-02
### Updated
- Vercel deploying frontend properly on merge to main
- Heroku deploying backend properly on merge to main

## [0.5.5] - 2024-03-02
### Updated
- Tweaking package.json for frontend on Vercel now that Heroku works

## [0.5.4] - 2024-03-01
### Updated
- Added page speed insights for Vercel
- Working on Heroku build for backend

## [0.5.3] - 2024-03-01
### Updated
- Frontend and backend both deploying to Vercel

## [0.5.2] - 2024-03-01
### Updated
- Changing to Node 18 to try and get deploy working for Vercel

## [0.5.1] - 2024-02-27
### Removed
- Cleaning up dependencies to try and make the build smaller

## [0.5.0] - 2024-02-27
### Removed
- Removed TypeScript from the backend Keystone.js setup
  - Worked fine in dev mode but failed to compile a build because Keystone was not exporting the ListConfig type

## [0.4.0] - 2024-02-27
### Added
- Switched from SQLite to PostgreSQL
  - had to setup DB again
  - Heroku is not a fan of SQLite though and Keystone can do both

## [0.3.5] - 2024-02-26
### Updated
- Fixed build issues for frontend files
- Fixed backend build issues

## [0.3.4] - 2024-02-23
### Added
- Minor style updates
- Added nprogress to show user a loading state while navigating
- Add ability to create new account from frontend

### Updated
- Updated payment to include stripe customer id

## [0.3.3] - 2024-02-23
### Added
- Sign out to account page
- Error message on sign in form 

## [0.3.2] - 2024-02-22
### Added
- Added a few more products 

## [0.3.1] - 2024-02-22
### Added
- Checkout process
  - Creates an order for the user and clears the cart
  - Shows user a reciept

## [0.3.0] - 2024-02-21
### Added
- Stripe: it will take your money
  - happy path only but it works, which is important

## [0.2.7] - 2024-02-21
### Updated
- Updated the cart count to account for quantities of the same item
- Updated backend to update quantity of item if one existed in cart already

### Added
- Added /edit/ route for updating existing items on the frontend
- Added /product/ route for viewing single items

## [0.2.6] - 2024-02-20
### Added
- Added cart count to navigation menu
- Added ability to remove cart items from frontend

### Updated
- Updated styling of a few navigation related items
- Cleaned up mobile view of css for cart
- Update styling of signin form

## [0.2.5] - 2024-02-20
### Added
- Added ability to add cart item from frontend

## [0.2.4] - 2024-02-18
### Added
- Added frontend for cart with basic styling
- Added backend for cartItems and attached to User
- Hooked frontend cart up to backend

## [0.2.3] - 2024-02-16
### Updated
- Updated styling for products a bit

### Added
- Added create product form

## [0.2.2] - 2024-02-16
### Updated
- Updated styling for products a bit

## [0.2.1] - 2024-02-16
### Added
- Adjustments to work on CORs issues for keystone 

### Updated
- Updated keystone with more fields for Product
- Updated graphql query

## [0.2.0] - 2024-02-15
### Added
- Keystone.js integration
- Small bit of layout and style changes

## [0.1.0] - 2024-02-15
### Added
- Base setup for frontend
  - adding Next.js (14) and a couple example pages
