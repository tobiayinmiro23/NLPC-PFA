# NLPC-PFA

Live project:   https://nlpc-pfa.vercel.app/

Project summary 

The website was built with react frame work,it is fully responsive and fully functional, it was made with semantic html in mind to improve accessibility.I made sure to maintain consistency across web pages and i used camel casing naming system for the class,the general state of all the employees are stored in the App.js component so as to prevent a change in the state when navigating from one page to another,i installed one dependency (react router) for navigation between pages ,the site consists of two pages,the home page and the employee page,the home page consists of a navigation, search bar and a list of all the employees of Adigun and Co ,two react hooks were used , useState hook and useEffect hook .UseState was used to manage the state of the employees,state of the app when a search returns result and when it doesn't,when a record is deleted and state to return all the employees after searching for an employee, the useEffect was used get all the employees from the App.js component when the page loads or is refreshed which is then looped through to be displayed in a table,the employee page  contains the details of an employee these details include his picture,name,grade, job position and renumeration. The renumeration are grouped into earnings and deductions , the earnings section include basic,housing allowance, clothing allowance and transport allowance while the deductions section include tax,pension, utility and nhis


Project overview 

1.Frame work used:   react only

2.Dependency used:  react router 

3.Fully responsive: yes

4.Fully functional: yes

5.React hooks used: useState and useRef

6.Number of pages:  2, the home page to list all employees and the employee page to list details of an employee 

7.Hosting platform: vercel

8.Semantic html: yes

9.Css naming convention: camel casing
