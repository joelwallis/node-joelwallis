#!/usr/bin/env node

const content = `
# JOEL WALLIS JUCÁ

I like computers, and I build stuff for the web - and CLI.

Things I do:

- software engineering - github.com/joelwallis
- mentoring - codementor.io/joelwallis
- blogging - medium.com/@joelwallis

## Links

- LinkedIn - linkedin.com/in/joelwallis
- Stack Overflow (Developer Story) - stackoverflow.com/story/joelwallis
- npm - npmjs.com/~joelwallis
- Twitter - twitter.com/joelwallis1
`.trim();

module.exports = () => content;

if (require.main === module) console.info(content);
