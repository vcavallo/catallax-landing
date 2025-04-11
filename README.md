# Catallax Landing Page

![Catallax spontaneous order axe logo](https://vcavallo.nyc3.cdn.digitaloceanspaces.com/images/catallax-logo-1-transparent.png)

```unset
            %%            %             
           +-#    %%%%    *-+           
         #=:-=+*#%%**%%**+==-+%         
         *:-=====##=:**=====-:*         
         *:======##+-**=====-:#         
         #--===++##+=##++==+--#         
         %*-=+#  %%##%   #+=-*%         
           *+%    %**%    #=*           
            #%    %**%    %             
                  %**%                  
                  %**% ,                
               . '%**   .             
                  %* % '   
              ,  #  *  * '              
                .   %  #              
```

### Schelling point website for the burgeoning Catallax protocol.

## Resources

- [Draft NIP PR](https://github.com/nostr-protocol/nips/pull/1714)
- Protocol author on Nostr ([Vinney](https://njump.me/npub19ma2w9dmk3kat0nt0k5dwuqzvmg3va9ezwup0zkakhpwv0vcwvcsg8axkl))
  - `npub19ma2w9dmk3kat0nt0k5dwuqzvmg3va9ezwup0zkakhpwv0vcwvcsg8axkl`
  - Use `#catallax` topic tag on Nostr
- [WIP Khatru relay reference implementation](https://github.com/vcavallo/khatru/tree/trim-kinds)
- [WIP clickable UI demo](https://github.com/vcavallo/catallax-ui)
- _GitHub Discussion coming soon_

---

## Details about this Svelte site itself:

## Setup Instructions

1. Make sure you have Node.js (v16+) and npm (v7+) or yarn (v1.22+) installed
2. Clone this repository
3. Install dependencies:

```bash
yarn install
```

## Development

Start the development server:

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev --open
```

## Build and deploy

To create a production version of the site:

```bash
yarn build
```

You can preview the production build with `yarn preview`.

Deploy to the VPS (must add `sandbox` to ssh config. This is basically just for me!):

`yarn deploy`

## Troubleshooting

If you encounter issues after deleting `node_modules` or during installation:

```bash
# Clean install dependencies 
yarn install --force
```
