import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Some User", email: "someuser@example.com" }],
    },
  ],
  from: {
    name: "ACME Support",
    // The domain of your `from` address must be the same as the domain you set up MailChannels Domain Lockdown for (detailed below)
    email: "support@mydomain.com",
  },
  respondWith: () => {
    return new Response(
      `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
    );
  },
});
