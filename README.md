# data-set-visualization
___
## Tech Used
- React
- Leaflet
- TopoJSON
___

## Installation Instructions
1. Fork and clone this repository.
2. In your terminal, run ```npm install``` to install node packages.
3. ```Run npm start``` to start running the app.
___

### Approach
Using a React app build and React-Leaflet to display the 2D of NYC sidewalks and sidewalk area per person. 


### Challenges
Running the json data of the sidewalks was quite heavy when displayed with leaflet and used topoJSON to filter that data. The next approach would be to filter the data of the sidewalks based on time of day and per location.

### Next steps for a full product 
Next step would be to have the legend and street data user interactive with the times of the day. In addition an input street name data that correlates with the coordinates of the current data. This would allow users to give input based on the location. Another step to take would be to build a backend that can store live user input or live data of the amount of people present at a specific street. 