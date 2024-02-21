# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

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
