# Building documentation 

## Installation of required modules

Install `claat` by following the steps in [Google Codelabs](https://github.com/googlecodelabs/tools/tree/master/claat). 


## Combine markdown files
From home folder run the following commands to combine markdown files

`
npm run clean && npm run build
`

## Export markdown file as claat 
From the home folder build the claat-documentation with the command printed from the command:
 
`
npm run claat
`


Move to `/docs/introduction-to-voice-assistant` and run the command

`
claat build
`

### Local development

Serve the documentation locally with the command

`
claat serve
`