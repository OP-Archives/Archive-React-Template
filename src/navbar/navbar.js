import React from "react";
import { AppBar, Toolbar, Typography, useMediaQuery, Box, SvgIcon } from "@mui/material";
import Logo from "../assets/logo.webp";
import CustomLink from "../utils/CustomLink";
import Drawer from "./drawer";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ReportIcon from "@mui/icons-material/Report";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const socials = [
  {
    path: `https://twitter.com/m0xyow`,
    icon: <TwitterIcon color="primary" />,
  },
  {
    path: `https://www.youtube.com/@m0xyyYT`,
    icon: <YouTubeIcon color="primary" />,
  },
  {
    path: `https://www.tiktok.com/@moxytwitch`,
    icon: (
      <SvgIcon viewBox="0 0 20 20" color="primary">
        <path d="M16.839 8.473a4.273 4.273 0 0 1-3.968-1.912v6.578a4.861 4.861 0 1 1-4.86-4.862c.102 0 .202.01.301.015v2.396c-.1-.012-.198-.031-.3-.031a2.48 2.48 0 1 0 0 4.961c1.37 0 2.58-1.08 2.58-2.45L10.616 2h2.291a4.269 4.269 0 0 0 3.935 3.81v2.663" />
      </SvgIcon>
    ),
  },
  {
    path: `https://twitch.tv/m0xyy`,
    icon: (
      <SvgIcon color="primary">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
      </SvgIcon>
    ),
  },
];

<svg fill="#000000" width="800px" height="800px" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg">
  <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
</svg>;

export default function Navbar(props) {
  const { channel } = props;
  const isMobile = useMediaQuery("(max-width: 800px)");

  return (
    <Box sx={{ flex: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
            {isMobile && <Drawer socials={socials} />}

            <Box sx={{ mr: 2 }}>
              <a href="/">
                <img alt="" style={{ maxWidth: "45px", height: "auto" }} src={Logo} />
              </a>
            </Box>

            <Typography variant="h6" component="div">
              <CustomLink color="inherit" href="/">
                <Typography color="primary" variant="h6">
                  {channel}
                </Typography>
              </CustomLink>
            </Typography>
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
              {socials.map(({ path, icon }) => (
                <Box key={path} sx={{ mr: 2 }}>
                  <CustomLink href={path} rel="noopener noreferrer" target="_blank">
                    {icon}
                  </CustomLink>
                </Box>
              ))}
            </Box>
          )}

          {!isMobile && (
            <Box sx={{ display: "flex", justifyContent: "end", flex: 1 }}>
              <Box sx={{ mr: 2 }}>
                <CustomLink href={`${process.env.REACT_APP_GITHUB}/issues`} rel="noopener noreferrer" target="_blank">
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <ReportIcon color="primary" sx={{ mr: 0.5 }} />
                    <Typography color="primary" variant="h6">
                      Report an Issue
                    </Typography>
                  </Box>
                </CustomLink>
              </Box>
              <Box sx={{ mr: 2 }}>
                <CustomLink href="/vods">
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <OndemandVideoIcon color="primary" sx={{ mr: 0.5 }} />
                    <Typography color="primary" variant="h6">
                      Vods
                    </Typography>
                  </Box>
                </CustomLink>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
