import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: "schoettner.dev",
		author: "Oliver Schöttner",
		street: "Hegnenbergstr. 42",
		postal_code: "85055",
		city: "Ingolstadt",
		email: "me@johnturbo.com",
		mailto: "mailto:me@johnturbo.com",
		mobile: "+49 170 / TURBO ON",
		mobileto: "tel:+491708872666",
		siteUrl: "https://johnturbo.com",
		siteGithubUrl: "https://github.com/johnturbo82/schoettner.dev",
		lang: "de",
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sass",
		"gatsby-plugin-sharp",
		"gatsby-plugin-sitemap",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Johnturbo.com",
				short_name: "JT.com",
				start_url: "/",
				background_color: "#12355b",
				theme_color: "#ff6978",
				display: "standalone",
				icon: "src/assets/images/jt.png",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "images",
				"path": "./src/assets/images/"
			},
			__key: "images"
		},
		{
			resolve: "gatsby-plugin-google-gtag",
			options: {
				trackingIds: [
					"G-DQN4Z8BTXG", // Google Analytics / GA
				],
				gtagConfig: {
					anonymize_ip: true,
					cookie_expires: 0,
				},
				pluginConfig: {
					head: false,
					respectDNT: true,
				},
			},
		},
		{
			resolve: "gatsby-source-instagram-all",
			options: {
				access_token: process.env.INSTAGRAM_TOKEN,
			}
		},
	]
};

export default config;
