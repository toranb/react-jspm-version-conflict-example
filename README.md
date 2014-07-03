A jspm example that shows how multiple versions of a dependency live together


**To run the react app locally**

    npm install

    jspm install react=github:reactjs/react-bower -o "{main: 'react', format: 'global'}" -f
    jspm install react-nested-router=github:toranb/toranb-react-nested-router
    jspm install ajax-mixin=github:toranb/toranb-react-cjs-rsvp-ajax-mixin
    jspm install promise-mixin-two=github:toranb/toranb-react-promise-mixin-number-two
    jspm install rsvp=github:tildeio/rsvp.js@3.0.6 -o "{main: 'lib/rsvp.js'}"

    gulp

    python -m SimpleHTTPServer 3000

    visit http://localhost:3000 to see the running app


**note about the rsvp installs**

    A bug in jspm is making it lookup rsvp.js.js instead of rsvp.js

    To fix 3.0.6 cd jspm_packages/github/tildeio/rsvp.js@3.0.6
    mv rsvp.js rsvp.js.js

    To fix 3.0.7 cd jspm_packages/github/tildeio/rsvp.js@3.0.7
    mv rsvp.js rsvp.js.js

    It's a hack clearly but lets you demo the ideas today
