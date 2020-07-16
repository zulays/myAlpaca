#  myAlpaca

- [Overview](#Overview)
  - [Team Members](#Team-Members)
  - [Team Expectations](#Team-Expectations)
  - [Permissions](#Permissions)
- [MVP](#MVP)
  - [Goals](#Goals)
  - [Libraries](#Libraries)
  - [Client (Front End)](#Client-Front-End)
    - [Wireframes](#Wireframes)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
  - [Server (Back End)](#Server-Back-End)
    - [ERD Model](#ERD-Model)
    - [Data Heirarchy](#Data-Heirarchy)
- [Post-MVP](#Post-MVP)
- [Code Showcase](#Code-Showcase)
- [Code Issues & Resolutions](#Code-Issues--Resolutions)

<br>

## Overview

_**myAlpaca** is an app that will give students who are studying abroad an easy way to maneuver their new environment. The app will allow users to register for an account and create profiles that include  the  parameters of their choice such as their area of studies, interests, hobbies, and priorities. After registration and creation, the user is directed to their profile home page, where they are given options of learning more about the  local events, weather, restaurants, currency, transportation, languages, culture, and shopping in their current area
_

### Team Members

Created, designed, and developed by [Misbah Ali](https://github.com/maliccny), [Jason Kang](https://github.com/kangja), and [Zulay Scottborgh](https://github.com/zulays) (Git Czar) for the General Assembly Software Engineering Immersive (July ’20 Cohort) Unit 3 Group Project.

### Team Expectations

Team values and expectations can be found on our project's [Group Expectation Setting Document](https://git.generalassemb.ly/sei-nyc-constellations/class-info/blob/master/projects/template_group-expectation-setting.md).

### Permissions

Digital assets used with full licensing and permission from  [Unsplash]().

<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **myAlpaca** MVP lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

<br>

### Goals

- _Give students who are studying abroad an easy way to maneuver their new environment._
- _Allow users to register for an account and create profiles that include  the  parameters of their choice_
- _Give resources to learn more about the local culture and events_
- _Provide currency exchange rates and local weather._

<br>

### Libraries

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Powers the application functionality/environment_ |
|   React Router   | _Allows application to be navigable without having to refresh the page._ |
| MongoDB | _A document-oriented NoSQL database used for high volume data storage._ |
|     Express      | _A Node.js web application server framework, designed for building multi-page web applications_ |
|  Express Router  | _Express router is a class which helps us to create router handlers_ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

![myAlpaca Wireframe + Style Guide](https://scene.zeplin.io/project/5ef5492ccbfa90a42c493b76)

- Desktop Layout for Home Page, Register User, Build Profile, Delete Profile


#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

``` structure
####front end
src
|__ components/
      |__ shared/
            |__ Footer/
                  |__ Footer.jsx
                  |__ Footer.css     
            |__ Header/
                  |__ Header.jsx
                  |__ Header.css  
|__ screens/
      |__ RegisterPage/
            |__ RegisterPage.jsx
            |__ RegisterPage.css
      |__ UserCreate/
            |__ UserCreate.jsx
            |__ UserCreate.css
      |__ UserEdit/
            |__ UserEdit.jsx
            |__ UserEdit.css
      |__ UserDelete/
            |__ UserDelete.jsx
            |__ UserDelete.css
      |__ Home/
|__ services/
      |__ apiConfig.jsx
      |__ users.jsx
|__ utils/
|__ App.js
|__ index.js

####backend
|__ components/
    |__ users.js
|__ db/
    |__ connection.js
|__ models/
    |__ user.js
|__ routes/
    |__ users.js
|__ seed/
    |__ users.js
|__ .gitignore
|__ package.json
|__ server.js

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

[image:6BF7D7C6-BDC4-400F-8AB4-FDCF12EC63B3-13448-00000B2BDBE7A881/Screen Shot 2020-07-16 at 11.23.44 AM.png]

#### Data Hierarchy

``` structure
controllers
|__ users.js
|
db
|__ connection.js
|
models
|__ user.js
|
routes
|__ users.js
|
seed
|__ users.js
|
.gitignore
package.json
server.js
```

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

The goals for this project post-MVP are as follows:
* Homepage build-out
* Log In Page?
* Restaurant Page
* Search Bar functionality

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.