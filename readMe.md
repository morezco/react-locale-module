# React Locale Module

This module is a small localisation library written in TypeScript that I coded for my own React projects. It makes use of little JSON files that create contexts which in turn may be used to localise either a single component at a time or the entire application through one file; it's up to the developer to choose how fine the grain is.

It also comes with a handy set of DevTools that aid in the creation of these JSON localisation files, debugging the locale engine itself, and understanding how the engine interacts with your application.

**Warning: this module is opinative with regards to stack. For now it needs, at least, styled-components to work. If you want to use the development tools, you'll also need styled-icons.**

# Installation

This module is not available on npm, as it is more of a personal project. Thus, you'll need to clone it locally in a local dependencies directory of sorts, and provide it along with your final package.

You have the choice of cloning the repository and using a release branch to immediately use the module in your own application, or building from the source code yourself. If you choose to use a release branch, do this:

```
cd path/to/your/dependencies/repository
git clone https://github.com/morezco/react-locale-module.git locale
cd locale
git checkout release/1.0.0
git pull
```

Then, to use the module in your application:

```
cd path/to/your/application
yarn add locale@file:path/to/modules/directory/locale
```

And you're golden.

If you want to read the source code, modify it or build your own version for any reason, I provide, along with the source code, a `build.sh` file that will:

- Compile the source code you just cloned into a `build` directory at the `root` of the module
- Create a `_builds` directory one level above (in your dependencies directory)
- Copy the contents of the build into `_builds/locale`, along with the `package.json` file. The resulting `_builds/locale` directory is your usable node_modules-style package. If you desire to use this file, then installation is as simple as the following command. Feel free to change `build.sh` if that's your preference.

```
cd path/to/your/modules/directory
git clone https://github.com/morezco/react-locale-module.git locale
cd locale
yarn build
```

# Usage

The code examples below this point are an example for a basic setup of this module onto a fresh CRA application.

First and foremost, wrap whatever section of your application it is that you wish to apply localisation to in the `<Localised />` context. You may wrap the entire `<App />` component itself in it or several sections, though I could not fathom a scenario for the latter.

`src/index.tsx:`

```
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Localised } from "locale";

ReactDOM.render(
  <React.StrictMode>
    <Localised>
      <App />
    </Localised>
  </React.StrictMode>,
  document.getElementById("root")
);
```

Then, in any and all components you desire, simply pull in the `useLocale` hook to use locale.

`useLocale(contextName, dictionary, variables?);`

`contextName` is any unique string you desire to use to refer to the current component. It may be the name of the component itself; just be careful not to name multiple distinct "list" (for example) components as "list" contexts.

`dictionary` is an object that, in its most basic form, should follow this format:

```
{
    language: {
        entry: translation
    }
}
```

I will go more in-depth on dictionaries later.

`variables` is an optional object parameter that you may use to tell the locale engine that some entries in the language objects are not literal phrases/words, but rather _variables_ that affect other literal phrases. You may use this for some advanced language-specific scripting that I will explore in the end of this tutorial, or you may ignore this entirely. For now, just know that the variables object are the following shape:

```
{
    variable name: variable value
}
```

Finally, `useLocale` returns the things that you'll use to, actually translate your components. The most prominent of these is the `<Text />` component.

`src/components/SomeComponent/SomeComponent.tsx:`

```
import React from 'react';
import { useLocale } from 'locale';

const dictionary = {
    pt: {
        "Hello World": "Olá mundo"
    }
};

export default function SomeComponent() {
    const { Text } = useLocale("App", dictionary);

    return (
        <h1>
            <Text>Hello World</Text>
        </h1>
    );
}
```

This is pretty much all you need to know to get up and running. Do keep reading if you wanna see some cool stuff though. Refer to the end of the file for an extensive list of everything `useLocale` returns, if you so desire to know, although this module is fully typed.

# Examples

Let's prepare an example component.

```
src/components/Component/
    Component.tsx
    json/
        index.ts
        locale.json
```

Looks simple enough. Say we want a dictionary that translates the following gender-emphasised phrase "They look beautiful tonight." into English (en), Portuguese (pt) and French (fr):

`locale.json:`

```
{
    en: {
        "They look beautiful tonight.": "They look beautiful tonight."
    },
    pt: {
        "They look beautiful tonight.": "Eles estão bonitos esta noite."
    },
    fr: {
        "They look beautiful tonight.": "Ils sont magnifiques ce soir."
    }
}
```

This phrase has fundamental syntax changes to its structures between these three languages. We will explore how to deal with those later on.
To use it, our Component.tsx would look like this:

`Component.tsx:`

```
import React from 'react';
import Dictionary from './json';
import { useLocale } from 'locale';

export default function Component() {
    const { Text } = useLocale("Component", Dictionary);

    return (
        <h1>
            <Text>They look beautiful tonight.</Text>
        </h1>
    );
}
```

That works, but our dictionary looks a bit repetitive. Thus, here's your first tip:

- ### You do not need to translate into the default language.

The following `locale.json` would work exactly the same.

```
{
    pt: {
        "They look beautiful tonight.": "Eles estão bonitos esta noite."
    },
    fr: {
        "They look beautiful tonight.": "Ils sont magnifiques ce soir."
    }
}
```

That's because whenever you use the `<Text />` component, its contents will always be assumed to be in the "default language" of your application. In this example, that's English; thus, this basic Dictionary needs no "`en`" entry. Anything entered into any `<Text />` component and not found within the current dictionary will be assumed to be in the default language and dismissive of the need for translation. This allows for a more natural way of developing your application; instead of worrying about localisation as you design your pages/views or using some code to refer to your strings that does not make it immediately obvious to the eye what part of the page you are looking at in code, do everything in your default language first as you normally would, and then translate everything into a locale file that you can simply call in afterwards.

**A word of warning though**: you may not provide an empty dictionary to useLocale. Have at least one language entry into it.

And when you do go for the translation, you can use our second tip.

- ### This module comes with DevTools for GUI-aided translation.

Albeit you are free to choose whether you would like to translate into .json by hand or use the DevTools.

**Warning: the DevTools require styled-components, @types/styled-components AND styled-icons to be present as peerDependencies**. Attempted use of them without these packages will lead to a crash.

The code below will render the developer tools for this module to the right side of the screen. Translate your view and see the live results, then copy the resulting JSON to your application with a click of a button.

`Component.tsx:`

```
import React from 'react';
import Dictionary from './json';
import { useLocale, DevTools } from 'locale';

export default function Component() {
    const { Text } = useLocale("Component", Dictionary);

    return <>
        <h1>
            <Text>They look beautiful tonight.</Text>
        </h1>
        <DevTools />
    </>;
}
```

- ### To interact with the locale engine from anywhere within your application, use the returned functions of the `useLocale` hook.

For example, to switch the language from a component that's five or five hundred levels deep down from the declaration of the Localised context is as simple as:

`Component.tsx:`

```
import React from 'react';
import Dictionary from './json';
import { useLocale } from 'locale';

export default function Component() {
    const { Text, switchl } = useLocale("Component", Dictionary);

    // call switchl anywhere, pass it as a prop to onClick like so

    return (
        <h1 onClick={switchl}>
            <Text>They look beautiful tonight.</Text>
        </h1>
    );
}
```

## Using Variables

Here's a quick linguistics topic that you should definitely read to understand why variables are important. If you wish to skip it though, refer to "How variables help this".

Variables are a powerful tool for languages that have dissonant syntax rules. A common example stands from latin-based languages (like Portuguese and French) and germanic-influenced languages, like English, in the manner that they handle genders.

In English, the indefinite, gender-neutral article "it" does most of the heavy-lifting for anything non-personal, while latin-based languages assign genders to everything from people to rocks.

🇬🇧 ...the moon _("it")_ is shining brightly, but the sun _("it")_ shines even brighter.

🇧🇷 ...a lua _("ela")_ está brilhante, mas o sol _("ele")_ brilha ainda mais.

🇫🇷 ...la _("elle")_ lune brille de mille feux, mais le _("il")_ soleil brille encore plus.

If you translated the last two back into English literally, referring to the moon and sun in the third subject, you would get something like "**She** is shining, but **he** is shinier", and we are even ignoring the other syntatic mistakes that a literal translation would incur, plus the difference in expression mannerisms.

The first step to deal with these issues through this module is to **avoid translating pieces too small to accommodate the context of the phrase**. You might get away with translating small pieces of phrases in English and then adding them together to construct context-rich (at least, rich enough) phrases, but other languages might not follow suit. That is why, just like in the example above, you should aim to translate the phrase in its entirety instead of lone words.

Again, it is not and should not be expected of a developer to speak every language of a product they are working on, obviously, that is what the localisation team is for; but consider that whatever it is that you enter into a `<Text />` component is precisely what an entry in the dictionary should be.

Consider the following bad example. If you speak Portuguese, try to pretend you do not know the meaning behind any of the words:

## Bad

```
{
    pt: {
        "the": "a",
        "moon": "lua",
        "is": "está",
        "shining brightly": "brilhante",
        "but": "mas",
        "the": "o",
        "sun": "sol",
        "shines": "brilha",
        "even": "ainda",
        "brighter": "mais"
    }
}
```

While it might look acceptable to a non-portuguese speaker, this sloppy dictionary will result in a fragile, inconsistent and flat-out wrong localisation for components within the context that make repeated use of these words. Notice how the word "the" is repeated with differences amidst its equivalent in Portuguese, as articles are gender-based, and there are explicitly incorrect translations, like "ainda" to "even", which map to so many words in Portuguese based on context alone.

So the lesson is, translate the entirety of the text, as far as its context reaches, into its most variable-neutral form first, in the language you are translating into. **Only then** should you translate the bits and pieces that are variable-specific from the already-translated phrase. This allows you to create **specific translations and variables** for each language, attending to every one of their specific needs.

## Good

```
{
    pt: {
        "the moon is shining brightly, but the sun shines even brighter":
        "a lua está brilhante, mas o sol brilha ainda mais"
    }
}
```

## How variables help this

In the beginning of these examples I cited the following example dictionary.

```
{
    pt: {
        "They look beautiful tonight.": "Eles estão bonitos esta noite."
    },
    fr: {
        "They look beautiful tonight.": "Ils sont magnifiques ce soir."
    }
}
```

Now let us make it about something specific. Let us make it the third person about the user who is using our application.

`Component.tsx:`

```
import React from 'react';
import Dictionary from './json';
import { useLocale } from 'locale';

interface Props {
    user: {
        gender: 'unknown' | 'male' | 'female';
    }
}

export default function Component({ user }: Props) {
    const { Text } = useLocale("Component", Dictionary);

    return (
        <h1>
            <Text>They look beautiful tonight.</Text>
        </h1>
    );
}
```

For our English-speaking user base, translation should be easy enough. As you probably know, it'll be entirely based on `user.gender` alone:

```
* unknown: They look  beautiful tonight
* male:    He   looks handsome  tonight
* female:  She  looks pretty    tonight
```

For our portuguese-speaking user base, however, translation also varies on gender, **but** the indefinite unknown is **not** the plural; it defaults to male in some cases. Also, plural **does vary by gender**. 

For this case especifically, it is impossible to replicate the exact meaning of the phrase while still referring to the user by an article. The text will need to be readapted to refer to the user in some other manner, like "the user". This has the side-effect of turning "look" into "looks" (third person), though confusingly enough that does not affect the syntax in the Portguese language. 

We could also remove the reference to the user entirely by changing the addressing of the phrase to the second person, similar to changing it to "You are beautiful tonight" in English, which, again, may or may not be acceptable in that language depending on cultural differences and the tonal requirement of your application.

```
unknown: [ The user  ] looks beautiful tonight
         [ O usuário ] está  bonito    esta noite
         [           ] estás bonito    esta noite

         They          look  beautiful tonight
male:    Ele           está  belo      esta noite
female:  Ela           está  linda     esta noite
                             ^^^^^
                        [handsome/pretty]
```

While this looks confusing at first, being mindful of syntax rules will greatly enhance the quality of the localisation. You should probably be able to discern by now that **the variable in our current situation at hand is `user.gender`**. It should be simple enough to translate then. Start out by defining the "gender" variable onto your `useLocale` hook call:

`const { Text } = useLocale("Component", Dictionary, { gender: user.gender });`

Now, any property entries in the Dictionary object (under a language) that are named `gender` **and** are **objects**, not strings, will be treated differently. To reiterate:

```
{
    pt: {
        "gender": "Gênero" // not affected
    },
    fr: {
        "gender": {
            "male": "le sexe masculin",
            "female": "le sexe féminin"
        }
    } // will be handled differently according to the language
}
```

Our Component.tsx should now look like this.

`Component.tsx:`

```
import React from 'react';
import Dictionary from './json';
import { useLocale } from 'locale';

interface Props {
    user: {
        gender: 'unknown' | 'male' | 'female';
    }
}

export default function Component({ user }: Props) {
    const { Text } = useLocale("Component", Dictionary, { gender: user.gender });

    return (
        <h1>
            <Text>They look beautiful tonight.</Text>
        </h1>
    );
}
```

Secondly, and order is important now, translate **the phrase in its most variable-neutral form available, AKA the default case**. For this example, the best default case for us to fallback to is the unknown gender one, rather than assuming the gender of our user to be male or female. It should be okay for the default case of your default language to fit every other language. Our current example already has the default case translated into Portuguese and French:

`locale.json:`
```
{
    pt: {
        "They look beautiful tonight.": "Eles estão bonitos esta noite."
    },
    fr: {
        "They look beautiful tonight.": "Ils sont magnifiques ce soir."
    }
}
```

The third phase is for us to translate the bits and pieces that actually change from gender to gender. A variable object entry in the dictionary looks like this:

```
{
    language: {
        variable: {
            value1: {
                word1: translation1,
                word2: translation2,
                ...
                wordX: translationX
            }
        }
    }
}
```

So the third change should be for us to add the variable-dependant variations of our phrases into our default language context. Yeah, the "`en`" context is coming back, but it still does not need the repetitive default translations.

`locale.json:`
```
{
    en: {
        "gender": {
            "male": { 
                "They": "He",
                "look": "looks",
                "beautiful": "handsome"
            },
            "female": {
                "They": "She",
                "look": "looks",
                "beautiful": "pretty"
            }
        }
    },
    pt: {
        "They look beautiful tonight.": "Eles estão bonitos esta noite."
    },
    fr: {
        "They look beautiful tonight.": "Ils sont magnifiques ce soir."
    }
}
```

That takes care of the English language. As `unknown` is the default variation of `gender`, it needs no translation.


Our fourth and final step is to make these same clauses for the other languages. The only thing to notice here is that the translation of the other languages should be made **from the translation of the phrase already into that language**. Thus `locale.json` will look like this:

```
{
    en: {
        "gender": {
            "male": { 
                "They": "He",
                "look": "looks",
                "beautiful": "handsome"
            },
            "female": {
                "They": "She",
                "look": "looks",
                "beautiful": "pretty"
            }
        }
    },
    pt: {
        "They look beautiful tonight.": "Eles estão bonitos esta noite.",

        "gender": {
            "male": { 
                "Eles": "Ele",
                "estão": "está",
                "bonitos": "belo"
            },
            "female": {
                "Eles": "Ela",
                "estão": "está",
                "bonitos": "linda"
            }
        }
    },
    fr: {
        "They look beautiful tonight.": "Ils sont magnifiques ce soir.",

        "gender": {
            "male": { 
                "Ils": "Il",
                "sont": "est",
                "magnifiques": "beau"
            },
            "female": {
                "Ils": "Elle",
                "sont": "est",
                "magnifiques": "belle"
            }
        }
    }
}
```

You may look at the translation steps like this:

```
(Into French, to a female user):
Step 1. <Text>They look beautiful tonight.</Text>
Step 2. <Text>Ils sont magnifiques ce soir.</Text>
Step 3. <Text>Elle est belle ce soir.</Text>
```

That's it. Have a cookie 🍪

## useLocale hook returns

- `React.FunctionalComponent` **Text**: the component you can use for translating. Pass a string as its only child and its contents will be rendered always according to the current language.

* `string` **language**: the code (set by you) of the currently-set language.
* `string[]` **languages**: an array containing all of the languages currently registered. A language is registered whenever a dictionary, in any component, uses a language code that was unknown up until now. You may call languages whatever you like, as long as you keep your naming for that language consistent throughout your application.

* `{ log, clear }` **history**: an object containing log and a clear function for the log of the engine.
  - `log[]` **log**: an array of `log` objects to help you debug the engine during development.
  - `void` **clear**: a function that clears all entries off the log.
* `object` **contexts**: an object containing all contexts currently registered. You should **not** interact with this directly, but you may log it to inspect it.

- `void` **set**: a function you may call passing in a language code. If that language is registered, it'll be set as the current language throughout the entire application (as far as everything inside of the nearest `<Localised />` context).

- `void` **switchl**: a function you may call to switch to the next language in the languages array.

- `string | null` **code**: a string representation of the current contents in the engine.

- `void, void, void, void, void` **add, remove, change, toggleDevTools, setDevToolsCode**: functions that do exactly as their names suggest (first three refer to contexts in the engine). You should **DEFINITELY** not call any of these directly.


# Opinative file/context disposition etc

There are no opinions of mine burned into the code. Create your organisational structure for your files as you like. I use other JSON files in my projects with my other modules, such as for theming and such. I also use styled-components in nearly every project and I like to index my subdirectories. Thus, I like my structure to be like so:

```
Component/
    Component.tsx
    json/
        index.ts
        locale.json
        theme.json
        ...
    styles/
        index.ts
        PresentationalComponent.ts
        ...
    tests/
        ...
```

And I wrap my entire application within the contexts of my modules. But you may create/nest as many of those contexts wherever your heart desires; you may also write out a single humongous translation.json file and use it within a global lone context if you prefer. Enjoy yourself.