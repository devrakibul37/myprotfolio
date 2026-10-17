# Weblance – Personal Portfolio Website
(HTML + SCSS + JS recreation of the Weblance theme design)

## যা যা আছে (What's included)

- `index.html` — সম্পূর্ণ পেজ (সব সেকশন একসাথে)
- `sections/` — প্রতিটি সেকশন আলাদা আলাদা HTML ফাইলে (01 থেকে 14 পর্যন্ত ক্রমানুসারে)
- `scss/` — সোর্স SCSS ফাইল (variables, mixins, ও প্রতিটি সেকশনের জন্য আলাদা partial)
- `css/style.css` — কম্পাইল করা ফাইনাল CSS (SCSS থেকে তৈরি)
- `css/fontawesome.css` + `webfonts/` — আইকনের জন্য (লোকাল, CDN লাগবে না)
- `js/script.js` — সব ইন্টারঅ্যাকশন: mobile menu, FAQ accordion, pricing toggle, experience tabs, scroll animation
- `images/` — স্ক্রিনশট থেকে বের করা ছবি

## কীভাবে ব্যবহার করবেন (How to use)

1. পুরো ফোল্ডারটি extract করুন
2. `index.html` ব্রাউজারে খুলুন — এটাই পুরো ওয়েবসাইট
3. প্রতিটি সেকশন আলাদাভাবে দেখতে/কপি করতে চাইলে `sections/` ফোল্ডারের নির্দিষ্ট ফাইল ব্যবহার করুন
   (মনে রাখবেন: এই ফাইলগুলোতে ছবির path `../images/...` — কারণ এগুলো `sections/` ফোল্ডারের ভেতরে থাকে)

## SCSS এডিট করলে (If you edit SCSS)

SCSS ফাইল এডিট করার পর নিচের কমান্ড দিয়ে আবার কম্পাইল করুন:

```bash
sass scss/style.scss css/style.css --style=expanded
```

(sass কম্পাইলার না থাকলে: `npm install -g sass`)

## রেসপন্সিভ (Responsive)

Mobile, Tablet, Desktop — সব ব্রেকপয়েন্টে টেস্ট করা হয়েছে।
- Desktop: 1200px+
- Tablet: 768px–992px
- Mobile: 576px এর নিচে

## Notes

- Color palette, typography (Poppins), layout, এবং সব section মূল স্ক্রিনশটের সাথে মিলিয়ে বানানো হয়েছে।
- Font Awesome আইকন লোকালি bundled আছে — ইন্টারনেট ছাড়াও কাজ করবে।
- Google Fonts (Poppins) CDN থেকে লোড হয় — চাইলে সেটাও লোকাল করে নেওয়া যাবে।
