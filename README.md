# TrailSha.pe

A place to share information on local trail conditions.

<div>
<img width="200" height="200" overflow="hidden" alt="The Problem 1" src="https://user-images.githubusercontent.com/95941250/149546796-22f3e961-f480-461a-ae03-37e2f43fa5a4.png">
<img width="200" height="200" overflow="hidden" alt="The Problem 2" src="https://user-images.githubusercontent.com/95941250/149546803-a75a8351-7935-4cf7-b967-4fdc2e188ff3.png">
<img width="200" height="200" overflow="hidden" alt="The Problem 3" src="https://user-images.githubusercontent.com/95941250/149546812-62988dbd-7710-4119-afab-f2d2110decfa.png">
<img width="200" height="200" overflow="hidden" alt="The Problem 4" src="https://user-images.githubusercontent.com/95941250/149546821-81a928b5-8be3-45af-a03e-265c35080df6.png">
</div>  
<div>  
<img width="200" height="200" overflow="hidden" alt="The Problem 5" src="https://user-images.githubusercontent.com/95941250/149546827-c9d3725a-cc6f-4a30-8c01-db7a0f2e7fc8.png">
<img width="200" height="200" overflow="hidden" alt="The Problem 6" src="https://user-images.githubusercontent.com/95941250/149546833-26f6137e-a8bc-4bfe-8aef-61f2307f6351.png">
<img width="200" height="200" overflow="hidden" alt="The Problem 7" src="https://user-images.githubusercontent.com/95941250/149546838-96b8d969-6350-4cf2-9e31-b45c527f2920.png">
<img width="200" height="200" overflow="hidden" alt="The Problem 8" src="https://user-images.githubusercontent.com/95941250/149546842-a1b72bf9-77fa-4c9b-9bf4-919cdce90552.png">
</div>

## The Problem

Southwest Colorado is a trail runner/hiker's paradise.  A subrange of the Rocky Mountains, the San Juan mountains shoot above the surrounding terrain in dramatic fashion.  Each year, between April and June, the deep snow and ice melt away and some of the most beautiful single-track trails in the lower 48--or the world, in my opinion--become accessible on foot (i.e. without skis, ice axes, or any crazy winter gear).  

During this period when the trails are starting to "melt out", aside from messaging a friend on the off chance they've been up a certain trail recently and can share some recon, there is no way to know the conditions of a trail.  Therefore there is no way to sufficiently plan your adventure.  

Trail maintenance groups and volunteers run into similar issues.  While they can communicate internally if they see trees or a mudslide blocking the trail, there is no dedicated system for them to store and share that information in real time.  Even more, there is no way for them to leverage trail information that the public might have.  

Public Land managers (U.S. Forest Service, Bureau of Land Management, etc.) likely face the same issue as well.  Each season they face the daunting task of deciding where to deploy their meeger allocation of trail maintenance crews and related resources.  

In short, from trail users to local volunteers to land managers, the public needs a dedicated system to share information on trail conditions.  

## The Solution

TrailSha.pe - A place to share information on local trail conditions.

## Technology Used in MVP 

This is my first full-stack CRUD application.  I utilized HTML, CSS, JavaScript, Node.js, Express, MongoDB, Atlas, Heroku, Google Authentication, and Google Maps API.   

## Getting Started

Go here:  https://trailshape.herokuapp.com/issues/index

## Data Model

<img width="800" alt="Data Model" src="https://user-images.githubusercontent.com/95941250/149548367-a80c0279-ada0-460d-a165-8f238acfcee6.png">

## Functionality

### Landing Page

<img width="1006" alt="TrailShape 1 - Landing Page" src="https://user-images.githubusercontent.com/95941250/149542829-9fcb4bf6-c5a0-43f2-9458-ae0e031f12c9.png">

<img width="422" alt="TrailShape 2 Landing Page Trail Issues" src="https://user-images.githubusercontent.com/95941250/149542842-321a8e91-dbdb-4869-8506-8b6358d434ed.png">



### Adding a New Trail Issue

<img width="227" alt="TrailShape 3 Add New Trail Issue" src="https://user-images.githubusercontent.com/95941250/149542845-65e17334-65ab-4941-b606-47ad5719d280.png">
<img width="188" alt="TrailShape 4 Add New Trail Issue Categories" src="https://user-images.githubusercontent.com/95941250/149542848-90d429d9-e759-46cc-a088-2b2a8665f2c1.png">
<img width="135" alt="TrailShape 5 Add New Trail Issues Status Options" src="https://user-images.githubusercontent.com/95941250/149549922-24e48b8b-bb20-4b42-8ac0-e73e923223e3.png">



### Viewing Details of an Active Issue

<img width="1544" alt="TrailShape 6 Viewing Active Issue" src="https://user-images.githubusercontent.com/95941250/149549928-299a2eef-d62b-4749-9c5f-92c88911ccc4.png">



### Commenting on an Issue

<img width="843" alt="TrailShape 7 Commenting on an Issue" src="https://user-images.githubusercontent.com/95941250/149542851-428bb729-7013-4971-9801-994745a98b99.png">



### Editing an Issue

<img width="235" alt="TrailShape 8 Editing an Issue" src="https://user-images.githubusercontent.com/95941250/149542867-b22d4b80-7e34-4145-8893-19c51608aa4d.png">
<img width="469" alt="TrailShape 9 Updated Issue on Summary" src="https://user-images.githubusercontent.com/95941250/149542872-dc00ab7f-88af-4267-92d0-e1d303bec5d0.png">


## Future Improvements / Ice Box

There is SO much more I would like to do with this, including but not limited to:

-Query functionality.  "Show me all fallen trees within 20-mile radius."
-Maps: Have all issues show as points on the same map on the landing page.  
-Maps: Have map points represented by conditions icons.   
-User permissions and privacy options.  
-User profiles: Home location so issues could be sorted nearest first. 
-User profiles: Add user types for more specific UX (runner, hiker, hunter, volunteer...). 
-Photos: Upload actual files (i.e. not just the URL).
-Photos: Ability to upload and display multiple files.  
-Consider getting feature feedback from Ouray Trail Group or nearby public land managers.
-Add points of interest.
-Ability to log and report hours for trail work.  
-Latitude/Longitude:  Request the browser's location and auto-populate that information (who wants to manually enter latitude and longitude??). 
-Integrated GPS tracker.  
-Push notifications (*ding* "Chris Marcinek just cleared the fallen trees you reported on Hayden Trail!")
-Information could be presented in a news feed.  ("Charles reported a mudslide at Ironton."  "Vale reported Richmond is now passable with microspikes.")
-Additional authentication methods.  

## Known Bugs

When editing an issue, the dropdown options (condition and status fields) are defaulting to the first options (Fallen Tree and Active, respectively).  These must be changed before saving the edit.  

## Thank You

Shoutouts to my GA instructors James Haff and Arthur D'Amato.  You guys kick ass.  Additional thanks to everyone who inspired or somehow supported taking the leap into a new career field, including but not limited to:  Margaret, Mom, Dad, Tracy, Aaron, Beat, Tim, Geoff, Nathan, Travis, Emma, Eddie, Daniel, Hudnall, and the many many others.  
