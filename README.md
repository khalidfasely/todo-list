# Overview

This project is built for myself, as I was need a todo-list/task-tracker app to track my day tasks.

To build this App I used React, Firebase and Sass.

# Routes
## Login: /
User can log into the web app with google account.

## Index: /home
This page is the home page, display all your tasks and a form to add a task, you can remove a task or mark it as it's already done.

# What’s contained in each file I created.

## src/ folder:
In the src/ folder, we first see:
- The __ mocks __/ folder that containes all the modules that needs to be mocked for tests purpose.
- The actions/ folder that containes files like auth.js todoList.js, with actions for the Redux Store, in these files we communicate with firebase.
- The components/ folder that containes all components that renders the app, every component is response for a part of the app(Header component response for the header in the app...).
- The firebase/ folder containes a single file to configure firebase with our app.
- The reducers/ folder containes files, every file contain a Redux reducer.
- The router/ folder containes 3 files:
    - AppRouter.js: as the root of the app and specified every component with his URL.
    - PriveteRoute.js and PublicRoute.js: check if some user have the access to some page, if yes render the page, if no redirect the User to an available page.
- The store/ folder containes a configureStore.js file that combine all the Redux reducers.
- The styles/ containes:
    - base/: That contains some base styling.
    - components/: That containes styles files, every file contains styles for a specific component.
    - styles.scss: That imports all the styles files, and this file is the one imported on the root of the app(index.js file).
- The tests/ folder that containes all actions/, components/, reducers/ folders tests, and the fictures/ folder it's a fake data to tests some files that needs it.

# How to run the application
<!--#First you must have Python and Django and NodeJs installed in your machine
#- Then you need to go to the front-end folder(blog-f-e/) and run npm install to create node_modules/ folder.
#- Then back on the root of the app run python manage.py runserver.-->

- Copy the repository to your system.
- Make sure you have NodeJs installed on your system. If not you will need to install it.
- Install yarn on your machine.
- and run these commands:
```shell
yarn install
```
```shell
yarn run build
```

Then run 

```shell
yarn start
```

Then login with google and to create new task, remove a task ...

> You can also visit the app on the internet https://lek-tasks-tracker.herokuapp.com/