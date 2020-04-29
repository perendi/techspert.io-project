# Techspert.io Project

This project is about getting and displaying real-time weather data in a table, and on a graph.

See the deployed project here: <https://perendi.github.io/techspert.io-project/>

# Objectives and my solutions

-I had to create an angular project, and use the open weather API to retrieve data on at least 10 cities.

After creating the project I know I will need a service to deal with the http request, so I started to build that. Considering that techspert.io is located in Cambridge, I targeted this area to get weather information on 20 cities.

-I had to populate a table with the data, and introduce configurable pagination(5, 10, 20) and sortable columns

I need to implement pagination and sorting on a data table, so I decided to use the angular material library and use a mat-table for the data, because it's easily configurable and sortable. (Don't be fooled by the sorting arrows, they are indicating whether the order is ascending or descending, not the "direction". When it's pointing up, it means ascending order, when it's pointing down, it means descending order)

-I had to introduce a filter for searching by city name

Again the material library helped a lot, as I just had to create a matInput field and filter the data according to the field's value.

-I had to create a graph displaying the temperatures for all cities and a line showing the mean temperature.

I used the chart.js library for this task, because it gives us a modern look and feel, and it's easily configurable.

-I had to implement unit tests for the pagination and the filter

I created a mock backend to simulate the http request, then populated the table with mock data, and created test cases for the pagination and the filter field. Run this by using 'ng test'.

# Conclusion

I had a lot of fun working on this project and I feel like I gained a lot of valuable programming experience in Angular. Thank you for the opportunity techspert.io!