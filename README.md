# Budget Kickstart

A multi-page budgeting web app for setting a monthly budget, logging income and expenses, and tracking savings goals. Built with plain HTML, CSS, and JavaScript. All data is saved in the browser with `localStorage`, so it needs no server or account.

Originally developed for a university course and refined for my portfolio.

<!-- Add a screenshot: save it as public/screenshot.png and uncomment the next line. -->
<!-- ![Budget Kickstart home page](public/screenshot.png) -->

## Features

- **Home:** monthly budget, amount spent and saved, available balance, recommended daily spending, and the spend/save split.
- **Budget settings:** set the monthly budget and the percentage to spend versus save.
- **Tracker:** add income and expenses, confirm each entry, and filter the history by name or category.
- **Goals:** add, edit, and remove savings goals.
- **Settings:** a layout for notification and currency preferences.

## Run it

```bash
git clone https://github.com/SAADALKINANI/budgeting_app.git
```

Open `index.html` in a browser. It forwards to the home page, `pages/page1.html`. No installation is needed.

## Project structure

```text
budgeting_app/
├── index.html            # Forwards to pages/page1.html
├── pages/
│   ├── page1.html        # Home dashboard
│   ├── budgeting.html    # Budget settings
│   ├── page2.html        # Income and expense tracker
│   ├── addExp.html       # Add an expense
│   ├── addInc.html       # Add income
│   ├── confirmation.html # Confirm a new entry
│   ├── page3.html        # Savings goals
│   ├── addGoals.html     # Add a goal
│   ├── editGoals.html    # Edit a goal
│   ├── page4.html        # Settings
│   └── taskbar.html      # Shared navigation bar
├── css/                  # One stylesheet per page, plus shared styles.css
├── js/                   # One script per page; scripts.js runs the navigation bar
└── public/               # Icons and images
```

## How data is stored

The app reads and writes `localStorage` keys such as `BudgetPerMonth`, `spend`, `save`, `income`, `expenses`, and `goals`. Data stays in the browser it was entered in. Clearing site data resets the app.

## Limitations

- The layout is designed for desktop browsers. There are no mobile breakpoints yet.
- Data does not sync across browsers or devices.
- The Settings page is a layout only. Its preferences are not saved and no notifications are sent.

## Future improvements

- Responsive layout for phones and tablets
- Charts of spending by category
- Recurring expenses
- Optional account sync with a backend database

## Image credits

- Icons in `public/` named `*-svgrepo-com.svg` are from [SVG Repo](https://www.svgrepo.com/).
- `pngtree-smiley-face-image_2292627.jpg` is from [Pngtree](https://pngtree.com/).
- `yellow-happy-smile-face-emoticon-png.webp` is a third-party image.
