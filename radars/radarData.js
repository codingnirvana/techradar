//This is the title for your window tab, and your Radar
document.title = "Indix UI Technology Radar (March 2016)";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 800;
var w = 1200;

var radar_data = [
    { "quadrant": "Languages",
            "left" : 45,
            "top" : 18,
            "color" : "#8FA227",
            "items" : [
    {'name': 'ECMA6 (Js)',               pc: {r: 50, t: 120}, movement: 'c'},
    {'name': 'React JSX (Html)',         pc: {r: 70, t: 150}, movement: 'c'},
    {'name': 'SASS (Css)',               pc: {r: 60, t: 170}, movement: 'c'},
    {'name': 'Polymer (Html)',           pc: {r: 250, t: 165}, movement: 'c'},
    {'name': 'Typescript (Js)',          pc: {r: 280, t: 140}, movement: 'c'},
    {'name': 'Post-Css (Css)',           pc: {r: 280, t: 150}, movement: 'c'},
    {'name': 'LESS (Css)',               pc: {r: 340, t: 150}, movement: 'c'},
    {'name': 'CoffeeScript (Js)',        pc: {r: 350, t: 160}, movement: 'c'},
    {'name': 'TODO',        pc: {r: 150, t: 150}, movement: 'c'}

            ]
        },

        { "quadrant": "Server Libraries",
            "left": w-200+30,
            "top" : 18,
            "color" : "#587486",
            "items" : [
    { name: 'Express',    pc: { r: 90,  t: 10 }, movement: 'c' },
    { name: 'NodeJs', pc: { r: 75, t: 56 }, movement: 'c' },
    { name: 'TODO',     pc: { r: 150, t: 20 }, movement: 'c' },
    { name: 'SailsJs',     pc: { r: 250, t: 20 }, movement: 'c' },
    { name: 'KOAJs',       pc: { r: 210, t: 15 }, movement: 'c' },
    { name: 'Meteor',       pc: { r: 330,  t: 60 }, movement: 'c' },
    { name: 'IOJs',   pc: { r: 350, t: 10 }, movement: 'c' }
      ]
        },
    { "quadrant": "Client Libraries",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [

            {"name":"Backbone", "pc":{"r":380,"t":260},"movement":"c"},
            {"name":"Angular.js - 1.0", "pc":{"r":350,"t":230},"movement":"c"},
            {"name":"Angular.js - 2.0", "pc":{"r":150,"t":190},"movement":"c"},
            {"name":"None", "pc":{"r":210,"t":215},"movement":"c"},

            {"name":"React.js", "pc":{"r":50,"t":260},"movement":"c"},
            {"name":"Redux", "pc":{"r":75,"t":260},"movement":"c"},
            { name: 'Ember.js',              pc: { r: 220, t: 255 },              movement: 'c' },
            { name: 'Polymer',              pc: { r: 270, t: 255 },              movement: 'c' }
        ]
    },
    { "quadrant": "Tools & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            { name: 'NPM - for Build', pc: { r: 210, t: 290 },  movement: 'c' },
            { name: 'Gulp', pc: { r: 60, t: 310 },  movement: 'c' },

            { name: 'Grunt', pc: { r: 360, t: 278 },  movement: 'c' },
            { name: 'Mocha', pc: { r: 70, t: 298 },              movement: 'c',},

            {"name":"Chai", "pc":{"r":90,"t":355},"movement":"c"},
            {"name":"Jest", "pc":{"r":190,"t":280},"movement":"c"},

            {"name":"Istanbul", "pc":{"r":80,"t":300},"movement":"c"},
            {"name":"WebDriver-IO", "pc":{"r":90,"t":320},"movement":"c"},
            {"name":"Jasmine", "pc":{"r":390,"t":320},"movement":"c"},
            {"name":"Nock", "pc":{"r":150,"t":320},"movement":"c"}
        ]
    }
];
