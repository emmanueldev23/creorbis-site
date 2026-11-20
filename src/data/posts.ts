export type Section = { h: string; p?: string[]; list?: string[] };
export type Post = { slug: string; title: string; date: string; excerpt: string; tags: string[]; sections: Section[] };

export const posts: Post[] = [
  { slug: 'what-affects-website-cost', title: 'What actually affects the cost of a business website', date: '2026-11-05', tags: ['Websites', 'Planning'],
    excerpt: 'Why two “five-page websites” can cost very different amounts, and how to get an accurate quote.',
    sections: [
      { h: 'It’s scope, not page count', p: ['A page of text and a page with bookings, payments or a dashboard are very different jobs. Cost follows the work involved, not the number of pages.'] },
      { h: 'The main cost drivers', list: ['Custom design versus adapting a template', 'Features such as forms, bookings, payments or logins', 'Who writes the content and supplies the images', 'Integrations with tools you already use', 'Ongoing maintenance after launch'] },
      { h: 'How to get an accurate quote', p: ['Describe what the site must achieve, who it is for and two or three sites you like. Say what content you already have. The clearer the brief, the firmer the quote, and the fewer surprises later.'] },
    ] },
  { slug: 'crm-or-spreadsheet', title: 'CRM or spreadsheet: when it’s time to switch', date: '2026-11-05', tags: ['CRM'],
    excerpt: 'A spreadsheet is a fine start. Here are the signs that it has stopped working for tracking customers.',
    sections: [
      { h: 'Signs the spreadsheet is failing', list: ['More than one person edits it and versions diverge', 'Follow-ups get missed because nothing reminds you', 'You can’t see your pipeline at a glance', 'Customer history lives in chats and memory, not in one place'] },
      { h: 'When a spreadsheet is still fine', p: ['If one or two people track a small number of customers, a spreadsheet is cheap and flexible. Switching early adds cost without much benefit.'] },
      { h: 'Off-the-shelf or custom?', p: ['If a standard CRM matches how you sell, use it. Consider a custom CRM when your process is unusual, you pay for features you never use, or you need it to connect closely with your other systems.'] },
    ] },
  { slug: 'does-small-business-need-erp', title: 'Does a small business need an ERP?', date: '2026-11-05', tags: ['ERP'],
    excerpt: 'What an ERP actually is, the warning signs that you need one, and why starting small beats a big-bang rollout.',
    sections: [
      { h: 'What an ERP is', p: ['An ERP connects the parts of a business that often live apart, such as inventory, purchasing, sales, invoicing and reporting, so they share one set of data.'] },
      { h: 'Signs you may need one', list: ['The same data is typed into several places', 'Nobody can say how much stock you have right now', 'Month-end reporting means stitching spreadsheets together', 'A process stops when one particular person is away'] },
      { h: 'Start with one module', p: ['Replacing everything at once is risky and slow. A safer approach is to fix the most painful area first, prove it works, and add modules over time.'] },
    ] },
  { slug: 'custom-web-app-vs-off-the-shelf', title: 'Custom web app or off-the-shelf software?', date: '2026-11-05', tags: ['Web apps', 'Planning'],
    excerpt: 'A practical way to decide between building your own tool and buying one.',
    sections: [
      { h: 'Where off-the-shelf wins', p: ['It is faster to start, cheaper at the beginning and maintained by someone else. If it fits your process with little compromise, it is usually the right choice.'] },
      { h: 'Where custom wins', list: ['Your process is genuinely different from the standard one', 'You’re paying monthly for features you don’t use', 'You need tight integration with other systems', 'You want to own and shape the tool as you grow'] },
      { h: 'Questions to ask before deciding', list: ['What exactly is broken today?', 'What does the current tool cost per year?', 'How much will we change our process to fit it?', 'Who will maintain it in three years?'] },
    ] },
  { slug: 'before-you-hire-a-developer', title: 'Seven things to prepare before you hire a developer', date: '2026-11-05', tags: ['Planning'],
    excerpt: 'A short checklist that saves time, money and misunderstandings on any software project.',
    sections: [
      { h: 'The checklist', list: ['The goal: what should change when this is done?', 'The audience: who will use it?', 'Examples of products you like and dislike', 'Content and assets you already have', 'A realistic budget range', 'A target date and the reason for it', 'The person who makes final decisions'] },
      { h: 'Red flags when choosing a developer', list: ['No written scope', 'Unclear payment terms', 'Promises with no mention of trade-offs', 'No plan for what happens after launch'] },
    ] },
  { slug: 'where-ai-automation-helps', title: 'Where AI and automation genuinely help a small business', date: '2026-11-05', tags: ['AI'],
    excerpt: 'Good and poor fits for AI, and how to start without wasting money.',
    sections: [
      { h: 'Good fits', list: ['Repetitive, rule-based tasks such as copying data between systems', 'Pulling details out of documents or emails', 'Sorting and routing incoming requests', 'Drafting and summarising text that a person then reviews'] },
      { h: 'Poor fits', p: ['Anything where an unchecked mistake is costly. In those cases AI should assist a person, not replace the review.'] },
      { h: 'How to start', p: ['Pick one workflow, measure how long it takes today, automate it with a person still reviewing, and measure again. If the time saved is real, move to the next workflow.'] },
    ] },
];
