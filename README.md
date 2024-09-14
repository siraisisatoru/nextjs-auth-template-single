# Purpose of this template

This template aimed to be a beginning point for any projects that wants to limit public access but only allow single Github account access with given email address. It is likely to be modified to support a finite number of users by given emails, however it will not be implemented in this template to maintain simplicity.

# Change other OAuth services

This template only demostrates the feasibility of using Github account to login. It is better to refer to the [official documents](https://authjs.dev/getting-started/authentication/oauth) if other services is needed.


# Additional work required to make this template to work

An environment document for keys and allow emails is needed. Use `npx auth secret` to create a `.env.local` file which should contain `AUTH_SECRET` key. Then add all the neccessory ID and secret to the file. The following is a template of the file for this repo. Details on how keys can be obtained can be found in [official documents](https://authjs.dev/getting-started/authentication/oauth) Github section.


```env
AUTH_SECRET=".................." # Added by `npx auth`. Read more: https://cli.authjs.dev

NEXTAUTH_URL=http://localhost:5173

GITHUB_ID=.............
GITHUB_SECRET==.............

ALLOWED_EMAIL==.............
```

# License

MIT