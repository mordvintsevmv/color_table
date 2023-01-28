# Color Table

Website with a table of colors of the year according to Pantone.

**Currently developed:**
- [X] Redux Store with Redux Toolkit
- [X] Dark/Light Mode Feature
- [X] Color Table with AG Grid
- [X] Pagination
- [X] Search by ID
- [X] Modal Component for Pantone Color
- [X] Loading indication


<a href="https://mordvintsevmv.github.io/color_table" target="_blank">Test App</a>

---

## <a name="content">Content</a>

0. [Task](#task)
   - [Task Description](#task-description)
   - [Task Requirements](#task-requirements)
   - [Task API](#task-api)
0. [Technologies](#technologies)
1. [ToDo](#todo)
2. [Contacts](#contacts)

---

## <a name="task">Task</a>

### <a name="task-description">Task Description</a>

The goal of the task is to implement SPA application with just one view. 
You should use the below API endpoint to display the paginated list of products. 
At the top of the view, there should be text input, which allows the user to filter results by id. 
The input should accept only numbers, other signs should not even appear. 
Below this input user should see a table displaying the following items’ properties: id, name, and year. 
Additionally, the background colour of each row should be taken from the colour property. 
After clicking on a row a modal should be displayed and should present all item data. 
The table should display 5 items per page. 
Under the table, there should be a pagination component, which allows switching between pages with “next” and “previous” arrows.


Please remember about handling situations when API endpoint returns a 4XX or 5XX error. 
In such a case the user should be informed about the error.


Apart from React, the technology stack totally ups to you, the same applies to styling. 
As a result of the task, we expect a link to a repository on GitHub, GitLab, or bitbucket. 
Your app should start after running npm install & npm start.


Please reflect pagination and filtering in the address URL, so users can copy and share the URL with each other.

### <a name="task-requirements">Task Requirements</a>

- React 
- Typescript 
- git 
- github/gitlab/bitbucket
- Unit tests
- Redux/Context API or other state management library

### <a name="task-api">Task API</a>

https://reqres.in/api/products

---

## <a name="technologies">Technologies</a>

<div style="display:flex; justify-content: space-around; align-items: center; gap: 40px">
<img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-plain-wordmark.svg" width="40" alt="html"/>
<img src="https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg" width="40" alt="scss"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="40" alt="typescript"/>
<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" width="40" alt="react"/>
<img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" width="40" alt="redux"/>
<img src="https://github.com/devicons/devicon/blob/master/icons/materialui/materialui-original.svg" width="40" alt="mui"/>
</div>

[🔝Content🔝](#content)

---

## <a name="todo">ToDo</a>

- [ ] Develop Error check
- [ ] Develop Tests

---

## <a name="contacts">Contacts</a>

**TG**: [@mordvintsevmv](https://t.me/mordvintsevmv)

**e-mail**: mordvintsevmv@gmail.com


[🔝Content🔝](#content)