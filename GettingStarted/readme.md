These are some notes from my experience on making the jump from react (regular, for web) to react native.  Things to watch out for, tips, things I had to learn, etc.

# getting started advice
- follow the documentation to get started and install the tools.
   - It's pretty good and thorough, even if there are a few very specific things to get right or it won't work
   - it would be great if a dev container were possible but I think it would get hairy with some of the RN tool depencencies e.g. ADB + android emulator + usb debugging
- be prepared for builds (particularly android) to take a hot minute and produce slower development cycles
- the cross-platform promise is not all it's cracked up to be
   - you still need a mac to build/run for iOS
   - you **WILL** still write platform specific code... just hopefully less of it
   - you will likely need to accept, in many places, the lowest common denominator of all the platforms you support
      - e.g. many of the components / component libraries are not responsive, your web app likely will end up looking like your mobile app floating in the middle of the browser
- the core tools are not yet at a stable 1.0
   - things will go wrong that aren't your fault, but you need to get your work accomplished anyways
   - components/libraries/tools will have bugs and you will have to work around them to force them to work
   - components/libraries/tools things might not support the same mix of platforms your app does, you will have to work around them to make them support those platforms
   - some things won't work as expected
- the community and ecosystem are smaller than React
   - by definition react native is a subset of react therefore the community and ecosystem must be smaller than react'same
   - many of the core/defacto libraries are incomplete
- if you have a choice just use the Expo framework
   - you have the option to not but... it fills a lot of gaps
   - lots of documentation just assumes you're using it and falls flat (or is wrong) if you're not
   - you can pick up parts of expo as needed or convert after getting started if you want
- styles will get you over and over again
   - I find the flex styles commonly don't work the same when comparing android to web... even though they're supposed to produce the same output
   - some styles just don't get translated correctly e.g. I had an experience where marginHorizontal on an element just got totally erase for web and the layout went wonky
   - some styles aren't even supported (or work incorrectly) on some platforms
   - the 12 column grid common to web UI best practices does not SEEM exist or have a replacement
- with `@react-navigation/native` using a stack navigator means that components won't be unmounted by default when they cease to be visible.  This has important but not obvious side effects on component lifecycles.
   
# tips
- `<View />` is your grouping component (like div, span, or a component library grouping component e.g. mui `<Box />`)
   - `<TouchableOpacity />` is a clickable (pressable) view
- `useFocusEffect` (`@react-navigation/native`) is `useEffect` with one important caveat: if you return a cleanup function it WILL be executed when the component ceases to be visible (as if it were unmounted) where the same for `useEffect` won't be true because the stack navigator won't unmount components when they're no longer visible
- `Platform.select(...)` lets you put platform specific strategies together in one place and will pick the right one
   - "strategy" meaning the strategy/policy pattern... but that policy may well just be a web specific style you want to choose
   - using this can help lint rules not yell at you about hook rules being called conditionally.  We all know that the platform cannot change between renders but the linter likely won't have an exception for it
- you might need a decently powerful machine.  This Core 7 ultra with 16gb ram will often lock up in the middle of an android build and I just need to wait
   - again, you need a mac for iOS.  RN claiming cross-platform doesn't lift this constraint, it just coordinates downstream platform specific tools and generates platform specific scaffolding around your react code
- react best practices and code design are still good practices and design, you might just find yourself needing to deviate more often to work around a limitation
   - some of these you might not as easily be able to just import from a library, however... which is unfortunate
- HMR is fast, even if the build might be slower (particularly for android, idk for iOS how slow it goes) which you can leverage to lose less time
- go in eyes open, you'll find plenty of things you need to work around to get things how you need and that's just how it is
   - you still need to get things on the screen that look and work right. Whether it doesn't work because of react native or because of something else doesn't matter
- if it's up to you, use expo.  If it's not up to you hopefully someone else has already worked through all the problems that expo would otherwise take care of
