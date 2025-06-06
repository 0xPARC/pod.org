// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	server: {
    port: 4374
  },
	outDir: "./out",
	site: 'https://pod.org',
	integrations: [
		starlight({
      title: "pod.org",
      social: {
        github: "https://github.com/proofcarryingdata/zupass",
        "x.com": "https://twitter.com/zupassproject",
        telegram: "https://t.me/zupass"
      },
			components: {
        SiteTitle: "./src/components/starlight/SiteTitle.astro"
      },
			sidebar: [
				{ label: 'Home', slug: 'docs' },
				{ label: 'Learning', slug: 'learning' },
				{
					label: 'POD',
					items: [
						{ label: 'Introduction', slug: 'pod/introduction' },
						{ label: 'Getting Started', slug: 'pod/getting-started' },
						{ label: 'Names and Schemas', slug: 'pod/names' },
						{ label: 'Values and Types', slug: 'pod/values' },
						{ label: 'Examples', slug: 'pod/examples' },
						{ label: 'Developer Resources', slug: 'pod/resources' },
						{ label: 'Disclaimers', slug: 'pod/disclaimers' },
					]
				},
				{
					label: 'GPC',
					items: [
						{ label: 'Introduction', slug: 'gpc/introduction' },
						{ label: 'Getting Started', slug: 'gpc/getting-started' },
						{ label: 'Proving and Verifying', slug: 'gpc/proving-and-verifying'},
						{ label: 'Proof Configuration', slug: 'gpc/proof-configuration' },
						{ label: 'Identity and Ownership', slug: 'gpc/identity-ownership' },
						{ label: 'Verifying Securely', slug: 'gpc/verification' },
						{ label: 'Circuit Artifacts', slug: 'gpc/artifacts' },
						{ label: 'Examples', slug: 'gpc/examples' },
						{ label: 'Developer Resources', slug: 'gpc/resources' },
						{ label: 'Disclaimers', slug: 'gpc/disclaimers' },
					]
				},
				{
					label: 'Z API',
					items: [
						{ label: 'Introduction', slug: 'z-api/introduction' },
						{ label: 'Getting Started', slug: 'z-api/getting-started' },
						{ label: 'Queries', slug: 'z-api/queries' },
						{ label: 'Ticket Proofs', slug: 'z-api/ticket-proofs' },
						{ label: 'Examples', slug: 'z-api/examples' }
					]
				}
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
