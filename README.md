# UFOs
# Overview of the Project
Help a Data Journalist, Dana, visualize a JavaScript of UFO sightings in McMinnville Oregon so as to display an interactive dashboard on a webpage for would be UFO enthusiasts.

# Purpose
Using VS Code, generate a JS and HTML script that will display Dana’s data as well as a related UFO article for people visiting the webpage to interact with (see below image for snippet of JS script).

![image](https://github.com/faridah-m/UFOs/blob/main/images/app_js.PNG)

# Results
We have been able to create a webpage that allows UFO enthusiasts to see reported sightings from all over North America.

When a user visits the website they will see the following:
- The well know phrase ”The Truth Is Out There”.
- The article that Dana requested be presented front and center on the site
- An interactive table of UFO sightings with individual filters by Date, City, State, Country, & Shape of sightings. 

This dynamic database is the main feature of the webpages. When a user inputs ”TX” for example into the state filter parameter, the table will change to display all sightings reported in the state of Texas

![image](https://github.com/faridah-m/UFOs/blob/main/images/Filtered_Data.PNG)

# Summary
One drawback of the new design is how specific the filters need to be to handle user input. For example, a filter for USA will return nothing because all data from the United States is in the table as "us". Unless the case matches exactly the table will not return any information which could be confusing to users visiting the site.

One improvement could be to add different options for the filtering process such as a drop down menu. Doing so would limit the error handling needed on the backend and also give the user more accurate data.
