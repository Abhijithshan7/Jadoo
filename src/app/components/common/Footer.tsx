"use client";
import React, { useState } from "react";
import styles from "../../styles/Footer.module.scss";
import Image from "next/image";

import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/Twitter.png";

import FacebookDark from "../assets/FacebookDark.png";
import InstagramDark from "../assets/instagramDark.png";
import TwitterDark from "../assets/TwitterDark.png";

import GooglePlay from "../assets/GooglePlay.png";

GooglePlay;

const socialMediaIcons = [
	{ dark: FacebookDark, light: Facebook, alt: "Facebook" },
	{ dark: InstagramDark, light: Instagram, alt: "Instagram" },
	{ dark: TwitterDark, light: Twitter, alt: "Twitter" },
];

const Footer: React.FC = () => {
	const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className="row">
					<div className={`col-md-12 col-lg-4 ${styles.brandSection}`}>
						<h2 className={styles.brandName}>Jadoo.</h2>
						<p className={styles.tagline}>
							Book your trip in a minute, get full control for much longer.
						</p>
					</div>

					<div className={`col-6 col-md-4 col-lg-2 ${styles.linkSection}`}>
						<h3 className={styles.sectionTitle}>Company</h3>
						<ul className={styles.linkList}>
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Careers</a>
							</li>
							<li>
								<a href="#">Press</a>
							</li>
						</ul>
					</div>

					<div className={`col-6 col-md-4 col-lg-2 ${styles.linkSection}`}>
						<h3 className={styles.sectionTitle}>Contact</h3>
						<ul className={styles.linkList}>
							<li>
								<a href="#">Help/FAQ</a>
							</li>
							<li>
								<a href="#">Press</a>
							</li>
							<li>
								<a href="#">Airlineless</a>
							</li>
						</ul>
					</div>

					<div className={`col-6 col-md-4 col-lg-2 ${styles.linkSection}`}>
						<h3 className={styles.sectionTitle}>More</h3>
						<ul className={styles.linkList}>
							<li>
								<a href="#">Airlinefees</a>
							</li>
							<li>
								<a href="#">Airline</a>
							</li>
							<li>
								<a href="#">Low fare tips</a>
							</li>
						</ul>
					</div>

					<div className={`col-6 col-md-4 col-lg-2 ${styles.linkSection}`}>
						<div className={styles.SocialMediaIcons}>
							{socialMediaIcons.map((icon, index) => (
								<div
									key={index}
									className={styles.Icons}
									onMouseEnter={() => setHoveredIcon(index)}
									onMouseLeave={() => setHoveredIcon(null)}
								>
									<Image
										src={hoveredIcon === index ? icon.light : icon.dark}
										alt={icon.alt}
										width={15}
										height={15}
										priority
									/>
								</div>
							))}
						</div>

						<ul className={styles.linkList}>
							<li>
								<a href="#">Discover our app</a>
							</li>
							<div className={styles.appStore}>
								<Image
									src={GooglePlay}
									alt="Google Play"
									width={107}
									height={35}
									priority
								/>
								<Image
									src={GooglePlay}
									alt="Google Play"
									width={107}
									height={35}
									priority
								/>
							</div>
						</ul>
					</div>
				</div>

				<div className={`row ${styles.copyrightRow}`}>
					<div className="col-12">
						<p className={styles.copyright}>All rights reserved @jadoo.co</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
