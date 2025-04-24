// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';



// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			editLink: {
				baseUrl: 'https://github.com/Innkeeping/Hyperfy.how/edit/main/',
			},
			title: 'hyperfy.how',
			logo: {
        src: './src/assets/hyperfy-logo.svg',
      },
			favicon: '/assets/favicon.svg',
			customCss: [
        './src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/hyperfy-xyz',
				discord: 'https://discord.gg/SzPjsvk5',
				'x.com': 'https://x.com/hyperfy_io',
				farcaster: 'https://warpcast.com/~/channel/hyperfy',
				youtube: 'https://www.youtube.com/@hyperfy_xyz',
			},
			sidebar: [
				{
					label: 'Welcome',
					items: [
						{ label: 'What is Hyperfy?', slug: 'welcome/what-is-hyperfy' },
						{ label: 'Quick Start👩‍💻🚀 ', slug: 'welcome/quickstart' },
						{ label: 'Detailed Installation 👶🤝', slug: 'welcome/detailed' },
						{ label: 'Contribute to Docs', slug: 'welcome/contribute' },
					],
				},
				{
					label: 'Docs',
					collapsed: true,
					items: [
								{ label: 'Getting Started', slug: 'docs/getting-started' },
								{ label: 'Models', slug: 'docs/models' },
								{ label: 'Commands', slug: 'docs/commands' },
								{ label: 'Scripts', slug: 'docs/scripts' },
								{ label: '.hyp Format', slug: 'docs/hyp-format' },
								{ label: 'Blender Scripts', slug: 'docs/blender-scripts' },

						{
							label: 'ref',
							collapsed: true,
							items: [
								// Each item here is one entry in the navigation menu.
								{ label: '-Index', slug: 'ref' },
								{ label: 'Action', slug: 'ref/action' },
								{ label: 'Anchor', slug: 'ref/anchor' },
								{ label: 'App', slug: 'ref/app' },
								{ label: 'Audio', slug: 'ref/audio' },
								{ label: 'Avatar', slug: 'ref/avatar' },
								{ label: 'Collider', slug: 'ref/collider' },
								{ label: 'Group', slug: 'ref/group' },
								{ label: 'LOD', slug: 'ref/lod' },
								{ label: 'Material', slug: 'ref/material' },
								{ label: 'Mesh', slug: 'ref/mesh' },
								{ label: 'Node', slug: 'ref/node' },
								{ label: 'Num', slug: 'ref/num' },
								{ label: 'Player', slug: 'ref/player' },
								{ label: 'Props', slug: 'ref/props' },
								{ label: 'rigidbody', slug: 'ref/rigid-body' },
								{ label: 'UI', slug: 'ref/ui' },
								{ label: 'UIText', slug: 'ref/ui-text' },
								{ label: 'UIView', slug: 'ref/ui-view' },
								{ label: 'UIImage', slug: 'ref/ui-image' },
								{ label: 'World', slug: 'ref/world' },
							],
						},
					],
				},
				{
					label: 'Community',
					collapsed: true,
					items: [
						{ label: 'Open Source Contributors', slug: 'community/contributors' },
						{ label: 'Hyperfy Branding', slug: 'community/branding' },
						{ label: 'Video Tutorials Series', slug: 'community/tutorials' },
						{ label: 'Community Assets', slug: 'community/assets' },
						{ label: 'Community Projects', slug: 'community/projects' },


						{
							label: 'Builders Calls',
							collapsed: true,
							items: [
								{ label: 'All Calls', slug: 'community/calls' },
								{ label: '12 March 2025', slug: 'community/calls/12mar' },
								{ label: '5 March 2025', slug: 'community/calls/5mar' },
								{ label: '21 Feb 2025', slug: 'community/calls/21feb' },
								{ label: '13 Feb 2025', slug: 'community/calls/13feb' },
								{ label: '6 Feb 2025', slug: 'community/calls/6feb' },

							],
						},

						{
							label: 'Socials',
							collapsed: true,
							items: [
								{ label: 'Tweets', slug: 'socials/x' },
								{ label: 'Bluesky', slug: 'socials/bluesky' },
								{ label: 'Videos', slug: 'socials/videos' },

							],
						},




					],
				},
				
				{
					label: 'Guides/Resources',
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'V2 Hosting',
							collapsed: true,
							items: [
								{ label: 'Self Hosting', slug: 'hosting/self' },
								{ label: 'Hosting Providers', slug: 'hosting/providers' },
							],
						},
						{
							label: 'Coding',
							collapsed: true,
							items: [
								

								{ label: 'Coding Resources', slug: 'guides/coding' },
								{ label: 'Coding with AI', slug: 'guides/coding/ai' },
								{ label: 'AI Super Prompts', slug: 'guides/coding/ai-prompts' },
								{ label: 'Fork Guide', slug: 'guides/coding/hyperfy_fork_guide' },
							],
						},

						{
							label: 'Avatars',
							collapsed: true,
							items: [

								{ label: 'Emotes', slug: 'guides/avatars/emotes' },
								{ label: 'VRM Creators', slug: 'guides/avatars/creators' },
								{ label: 'Guides and Tools', slug: 'guides/avatars/guides' },
								{ label: 'Open Source Avatars', slug: 'guides/avatars/opensource' },
								{ label: 'Marketplaces', slug: 'guides/avatars/marketplaces' },

							],
						},

						{
							label: '3D-Design',
							collapsed: true,
							items: [

								{ label: 'Optimizing Assets', slug: 'guides/3d/optimizing' },
								{ label: 'Models', slug: 'guides/3d/models' },
								{ label: 'Colliders to Meshes', slug: 'guides/3d/meshes' },
								{ label: 'Blender', slug: 'guides/3d/blender' },
								{ label: 'Other tools', slug: 'guides/3d/tools' },

							],
						},
						{
							label: 'AI Agents',
							collapsed: true,
							items: [

								{ label: 'Agents', slug: 'guides/ai/agents' },
							],
						},
						{
							label: 'Web3',
							collapsed: true,
							items: [

								{ label: 'Web3 General', slug: 'guides/web3' },
								{ label: 'Solana', slug: 'guides/web3/solana' },
								{ label: 'EVM', slug: 'guides/web3/evm' },
							],
						},
						{
							label: 'WebXR',
							collapsed: true,
							items: [

								{ label: 'WebXR General', slug: 'guides/webxr' },
								{ label: 'VR', slug: 'guides/webxr/vr' },
								{ label: 'AR', slug: 'guides/webxr/ar' },
							],
						},
						{
							label: 'Misc',
							collapsed: true,
						   items: [
							   { label: 'History of Hyperfy', slug: 'welcome/hyperfy-history' },
							   { label: 'Community HackMDs', slug: 'guides/hackmd' },
							   { label: 'Various Articles', slug: 'guides/articles' },
						   ]
					   },

					],
				},

				{
					label: 'Token',
					collapsed: true,
					items: [
						{ label: '$Hyper Token', slug: 'token/hyper' },
					],
				},

				{
					label: 'DAO',
					collapsed: true,
					items: [
						{ label: 'Overview', slug: 'dao/overview' },
						{ label: 'Proposals', slug: 'dao/proposals' },

					]
				},
				{
					label: 'FAQ',
					collapsed: true,
					items: [
						{ label: 'Developer FAQs', slug: 'faq/developer' },
						{ label: 'Creator FAQs', slug: 'faq/creator' },
					],
				},

			],
		}),
	],
});
