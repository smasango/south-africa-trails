# Deploying BT New Adventure Tours to Truehost South Africa

## 1. Create hosting
Choose a Truehost plan that supports a Node-compatible application or static site upload. Confirm the plan can serve the generated production output before purchase.

## 2. Connect btnatours.co.za
Add `btnatours.co.za` and `www.btnatours.co.za` in the Truehost control panel. Keep the domain ownership and billing account under the business's control.

## 3. Configure DNS
Use the A, AAAA or CNAME values shown by Truehost. Add the records at the domain's DNS provider. DNS changes can take time to propagate. Do not remove mail-related MX records when changing website DNS.

## 4. Build the website
On a development machine run:

```sh
bun install
bun run build
```

The production output is generated in `.output/`. If the selected Truehost plan only supports static files, confirm static export support with Truehost or deploy the project through Lovable and point the domain to that deployment instead.

## 5. Upload or run
For a supported Node application, upload the source without `node_modules`, install dependencies on the server, set the production start command required by the generated `.output` server, and select the current LTS Node version. Follow the exact application-start fields shown by the Truehost control panel.

## 6. Configure SSL and HTTPS
Issue the free SSL certificate in the Truehost control panel for both root and `www` domains. Enable HTTPS redirection only after the certificate is active. Check that both domains open without a certificate warning.

## 7. Connect forms
The included forms are presentation-ready but do not send email yet. Connect them to a secure form receiver or server endpoint. Validate all fields on the server, add spam protection, keep credentials in server environment variables, and update the privacy policy before collecting enquiries.

## 8. Domain test
Open both `https://btnatours.co.za` and `https://www.btnatours.co.za`. Confirm one redirects consistently to the preferred address and all pages load directly when pasted into the browser.

## 9. Responsive test
Check the home page, menus, forms, cards and gallery around 1440, 1024, 768, 480 and 375 pixels wide.

## 10. Contact test
Submit both forms after a receiver is connected. Confirm the business receives the complete enquiry and no private form information appears in browser logs or public URLs.

## 11. WhatsApp and contact links
Test the floating WhatsApp button on desktop and mobile. Also test the telephone and email links.

## 12. Final link test
Open every header and footer link, each tour CTA, attraction CTA, legal page, gallery image and lightbox close control. Confirm there are no missing photographs or unfinished placeholders.
