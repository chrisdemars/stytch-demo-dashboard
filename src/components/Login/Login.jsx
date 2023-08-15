// login.jsx
import React from 'react';
import { StytchLogin } from '@stytch/react';
const Login = () => {
              
  const config = {
  "products": [
    "oauth",
    "emailMagicLinks"
  ],
  "oauthOptions": {
    "providers": [
      {
        "type": "google"
      }
    ],
    "loginRedirectURL": "http://localhost:3000/home",
    "signupRedirectURL": "http://localhost:3000/home"
  },
  "emailMagicLinksOptions": {
    "loginRedirectURL": "http://localhost:3000/home",
    "loginExpirationMinutes": 30,
    "signupRedirectURL": "http://localhost:3000/home",
    "signupExpirationMinutes": 30
  }
};
  const styles = {
  "container": {
    "margin": "0 auto",
    "backgroundColor": "#FFFFFF",
    "borderColor": "#ADBCC5",
    "borderRadius": "8px",
    "width": "400px"
  },
  "colors": {
    "primary": "#19303D",
    "secondary": "#5C727D",
    "success": "#0C5A56",
    "error": "#8B1214"
  },
  "buttons": {
    "primary": {
      "backgroundColor": "#19303D",
      "textColor": "#FFFFFF",
      "borderColor": "#19303D",
      "borderRadius": "4px"
    },
    "secondary": {
      "backgroundColor": "#FFFFFF",
      "textColor": "#19303D",
      "borderColor": "#19303D",
      "borderRadius": "4px"
    }
  },
  "fontFamily": "Arial",
  "hideHeaderText": false,
  "logo": {
    "logoImageUrl": ""
  }
}
                            
  return <StytchLogin config={config} styles={styles} />;
}
              
export default Login;