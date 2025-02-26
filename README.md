# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



 {/* Content Card */}
        <Card sx={{ flexGrow: 1, height: "90%", display: "flex", flexDirection: "column", p: 2 }}>
  <CardContent sx={{ color: "black", display: "flex", height: "100%" }}>
    {/* Left Side (70%) */}
    <Box sx={{ flex: 7, display: "flex", flexDirection: "column" }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>Group Discussions</Typography>
      {/* Add content here */}
       {/* Card 1 */}
    <Card sx={{ display: "flex", flexDirection: "column", p: 2 }}>
      <CardContent>
      <Card sx={{ display: "flex", flexDirection: "column", p: 2 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar />
          <Typography variant="body1">Shamsinga Roy</Typography>
        </Stack>
        
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          Just finished the initial wireframes for the new dashboard. Would love to get everyone’s feedback!
        </Typography>
       
        <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <IconButton>
              <MessageIcon />
            </IconButton>
            <Typography variant="body2">4 Replies</Typography>
          </Stack>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <Typography variant="body2">2 Files</Typography>
          </Stack>
          
        </Stack>
        </Card>
      </CardContent>
      

    </Card>


    {/* Card 3 (with Start a Discussion feature) */}
    <Card sx={{ display: "flex", flexDirection: "column", p: 2 }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar />
          
        </Stack>
        <Box sx={{ mt: 2, display: "flex", alignItems: "center", border: "1px solid #ccc",backgroundColor:"#E0FFDE" , p: 1, borderRadius: 5 }}>
          <Typography variant="body2" sx={{ flex: 1 }}>
            Start a discussion...
          </Typography>
        </Box>
        <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
          <IconButton>
            <ImageIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  
    </Box>

    {/* Vertical Divider */}
    <Divider orientation="vertical" sx={{ height: "100%", margin: "0 10px" }} />

    {/* Right Side (30%) */}
    <Box sx={{ flex: 3, display: "flex", flexDirection: "column" }}>
      {/* Add content here for the right side */}

      <Typography variant="h6" fontWeight="bold" color="black">Team Members</Typography>
      <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar />
          <Typography variant="body1">Emma Wilson</Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">Developer</Typography>
        <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar />
          <Typography variant="body1">James Chen</Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">Designer</Typography>
      
        <Typography variant="h6" fontWeight="bold" color="black">Upcoming Events</Typography>
        <Card sx={{ display: "flex", flexDirection: "column",backgroundColor:"#E0FFDE" }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton>
              <CalendarTodayIcon /> {/* Calendar Icon */}
            </IconButton>
            <Typography variant="body1">Team Sync Meeting</Typography>
          </Stack>
          <Typography variant="body2" color="textSecondary">Today, 2:00 P.M</Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            <Avatar />
            <Avatar />
            <Typography variant="body2">+3 more</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
    
  </CardContent>
</Card>