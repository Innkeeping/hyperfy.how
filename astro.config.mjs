// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl: "https://github.com/Innkeeping/Hyperfy.how/edit/main/",
      },
      title: "Hyperfy.how",
      logo: {
        src: "./src/assets/hyperfy-logo.svg",
      },
      favicon: "/assets/favicon.svg",
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/hyperfy-xyz",
        discord: "https://discord.gg/SzPjsvk5",
        "x.com": "https://x.com/hyperfy_io",
        farcaster: "https://warpcast.com/~/channel/hyperfy",
        youtube: "https://www.youtube.com/@hyperfy_xyz",
      },
      sidebar: [
        {
          label: "Welcome",
          items: [
            { label: "What is Hyperfy?", slug: "welcome/what-is-hyperfy" },
          ],
        },
        {
          label: "Community",
          collapsed: true,
          items: [
            {
              label: "Open Source Contributors",
              slug: "community/contributors",
            },
            { label: "Video Tutorials Series", slug: "community/tutorials" },
            { label: "Community Assets", slug: "community/assets" },
            { label: "Community Projects", slug: "community/projects" },
            { label: "Hyperfy Colors", slug: "community/branding" },
            { label: "$Hyper Token", slug: "community/hyper" },

            {
              label: "Builders Calls",
              collapsed: true,
              items: [
                { label: "All Calls", slug: "community/calls" },
                { label: "21 Feb 2025", slug: "community/calls/21feb" },
                { label: "13 Feb 2025", slug: "community/calls/13feb" },
                { label: "6 Feb 2025", slug: "community/calls/6feb" },
              ],
            },

            {
              label: "Socials",
              collapsed: true,
              items: [
                { label: "Tweets", slug: "socials/x" },
                { label: "Bluesky", slug: "socials/bluesky" },
                { label: "Videos", slug: "socials/videos" },
              ],
            },
          ],
        },
        {
          label: "Setup",
          items: [
            { label: "Quick Start👩‍💻🚀 ", slug: "setup/quickstart" },
            { label: "Detailed Installation 🔍🎯", slug: "setup/detailed" },

            {
              label: "v2 Hosting",
              collapsed: true,
              items: [
                { label: "Self Hosting", slug: "hosting/self" },
                { label: "Hosting Providers", slug: "hosting/providers" },
              ],
            },
          ],
        },
        {
          label: "FAQs",
          collapsed: true,
          items: [
            { label: "Developer FAQs", slug: "faq/developer" },
            { label: "Creator FAQs", slug: "faq/creator" },
          ],
        },
        {
          label: "Docs",
          collapsed: true,
          items: [
            { label: "Getting Started", slug: "docs/getting-started" },
            { label: "Models", slug: "docs/models" },
            { label: "Commands", slug: "docs/commands" },
            { label: "Scripts", slug: "docs/scripts" },
            { label: ".hyp Format", slug: "docs/hyp-format" },
            { label: "Blender Exporter", slug: "docs/blender-exporter" },

            {
              label: "ref",
              collapsed: true,
              items: [
                // Each item here is one entry in the navigation menu.
                { label: "-Index", slug: "ref" },
                { label: "Action", slug: "ref/action" },
                { label: "Anchor", slug: "ref/anchor" },
                { label: "App", slug: "ref/app" },
                { label: "Audio", slug: "ref/audio" },
                { label: "Avatar", slug: "ref/avatar" },
                { label: "Collider", slug: "ref/collider" },
                { label: "Group", slug: "ref/group" },
                { label: "LOD", slug: "ref/lod" },
                { label: "Material", slug: "ref/material" },
                { label: "Mesh", slug: "ref/mesh" },
                { label: "Node", slug: "ref/node" },
                { label: "Num", slug: "ref/num" },
                { label: "Player", slug: "ref/player" },
                { label: "Props", slug: "ref/props" },
                { label: "RigidBody", slug: "ref/rigid-body" },
                { label: "UI", slug: "ref/ui" },
                { label: "UIText", slug: "ref/ui-text" },
                { label: "UIView", slug: "ref/ui-view" },
                { label: "World", slug: "ref/world" },
              ],
            },
          ],
        },
        {
          label: "Guides/Resources",
          items: [
            // Each item here is one entry in the navigation menu.

            {
              label: "Coding",
              collapsed: true,
              items: [
                { label: "Coding Resources", slug: "guides/coding" },
                { label: "Coding with AI", slug: "guides/coding/ai" },
              ],
            },

            {
              label: "3D-Design",
              collapsed: true,
              items: [
                { label: "Optimizing Assets", slug: "guides/3d/optimizing" },
                { label: "Avatars", slug: "guides/3d/avatars" },
                { label: "Models", slug: "guides/3d/models" },
                { label: "Blender", slug: "guides/3d/blender" },
                { label: "Other tools", slug: "guides/3d/tools" },
              ],
            },
            {
              label: "AI Agents",
              collapsed: true,
              items: [{ label: "Agents", slug: "guides/ai/agents" }],
            },
            {
              label: "Web3",
              collapsed: true,
              items: [
                { label: "Web3 General", slug: "guides/web3" },
                { label: "Solana", slug: "guides/web3/solana" },
                { label: "EVM", slug: "guides/web3/evm" },
              ],
            },
            {
              label: "WebXR",
              collapsed: true,
              items: [
                { label: "WebXR General", slug: "guides/webxr" },
                { label: "VR", slug: "guides/webxr/vr" },
                { label: "AR", slug: "guides/webxr/ar" },
              ],
            },

            { label: "Community HackMDs", slug: "guides/hackmd" },
            { label: "Various Articles", slug: "guides/articles" },
            { label: "Contribute to Docs", slug: "guides/contribute" },
          ],
        },

        // {
        // 	label: 'Resources',
        // 	autogenerate: { directory: 'resources' },
        // },
      ],
    }),
  ],
});
