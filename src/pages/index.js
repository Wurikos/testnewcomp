import React from "react";
import theme from "theme";
import { Theme, Link, Box, Button, Hr, Icon, Image, Input, Text, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section } from "@quarkly/components";
import * as Components from "components";
import { MdFace } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box />
		<Button>
			Button
		</Button>
		<Hr />
		<Icon category="md" icon={MdFace} />
		<Image width="64px" height="64px" />
		<Input />
		<Link href="#">
			Some text
		</Link>
		<List>
			<Text>
				First item
			</Text>
		</List>
		<Text>
			Some text
		</Text>
		<Components.EmbedHTML />
		<Components.EmbedJS />
		<Section text-align="center" padding="100px 0" sm-padding="40px 0">
			<Text as="h1" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.{" "}
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503341960582-b45751874cf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
			</Box>
		</Section>
		<Components.QuarklycommunityKitMobileSidePanel />
		<Components.QuarklycommunityKitMenuWithGroups />
		<Components.QuarklycommunityKitCardFlip />
		<Components.QuarklycommunityKitAnimation />
		<Components.QuarklycommunityKitCarousel />
		<Components.QuarklycommunityKitCarousel />
		<Components.QuarklycommunityKitYoomoneyDonateForm />
		<Components.QuarklycommunityKitBackToTop />
		<Components.QuarklycommunityKitLoopText />
		<Components.QuarklycommunityKitScrollIndicator />
		<Components.QuarklycommunityKitCounter />
		<Components.QuarklycommunityKitCounter />
		<Components.QuarklycommunityKitFbComment />
		<Components.QuarklycommunityKitFbLike />
		<Components.QuarklycommunityKitVkComments />
		<Components.QuarklycommunityKitVkPage />
		<Components.QuarklycommunityKitTable />
		<Components.QuarklycommunityKitYouTube />
		<Components.QuarklycommunityKitLiveChat />
		<Components.QuarklycommunityKitYandexMap />
		<Components.QuarklycommunityKitSvgShape />
		<Components.QuarklycommunityKitSoundCloud />
		<Components.QuarklycommunityKitGallery />
		<Components.QuarklycommunityKitBgImageParallax />
		<Components.QuarklycommunityKitBeforeAfterImage />
		<Components.QuarklycommunityKitTimer />
		<Components.QuarklycommunityKitTooltip />
		<Components.QuarklycommunityKitTimeline />
		<Components.QuarklycommunityKitPopup />
		<Components.QuarklycommunityKitCollapse />
		<Components.QuarklycommunityKitVideo />
		<Components.QuarklycommunityKitVimeo />
		<Components.QuarklycommunityKitDisqus />
		<Components.QuarklycommunityKitDisqusComment />
		<Components.QuarklycommunityKitAudio />
		<Components.QuarklycommunityKitPopup />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});